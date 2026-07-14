const assert = require("assert");
const { VOE_DATA } = require("../source/data/game-data");
const { calculateCharacter } = require("../source/engine/rules-engine");
const { VOE_WIZARD, validateWizardStep } = require("../source/components/wizard-model");
const { VOE_SHEET_MODES } = require("../source/components/sheet-modes");

const unique = (items, label) => {
  const ids = items.map(item => item.id);
  assert.strictEqual(new Set(ids).size, ids.length, `${label} contains duplicate IDs`);
};

unique(VOE_DATA.attributes, "attributes");
unique(VOE_DATA.skills, "skills");
unique(VOE_DATA.heritages, "heritages");
unique(VOE_DATA.specialties, "specialties");
unique(VOE_DATA.protocols, "protocols");
unique(VOE_DATA.conditions, "conditions");

const attributeIds = new Set(VOE_DATA.attributes.map(item => item.id));
VOE_DATA.skills.forEach(skill => {
  assert(attributeIds.has(skill.attribute), `Skill ${skill.id} references missing attribute ${skill.attribute}`);
});

[
  ...VOE_DATA.heritages,
  ...VOE_DATA.specialties,
  ...VOE_DATA.protocols,
  ...VOE_DATA.conditions
].forEach(source => {
  (source.modifiers || []).forEach(modifier => {
    assert(["add", "set", "multiply"].includes(modifier.operation),
      `${source.id} has invalid operation ${modifier.operation}`);
    assert(Number.isFinite(Number(modifier.value)),
      `${source.id} has nonnumeric modifier value`);
  });
});

const warden = calculateCharacter(VOE_DATA, {
  attributeBase: { strength: 20, dexterity: 20, endurance: 20, intelligence: 20, wisdom: 20, charisma: 20 },
  skillBase: { athletics: 10, close_combat: 10, intimidation: 10, survival: 10, ranged_combat: 10 },
  movementBase: 35,
  healthBase: 10,
  selections: { heritage: "ursa", specialty: "warden", protocols: [], conditions: [] }
});

assert.strictEqual(warden.movement, 40, "Warden movement bonus failed");
assert.strictEqual(warden.healthMax, 15, "Warden health bonus failed");
assert.strictEqual(warden.skills.athletics, 35, "Warden Athletics calculation failed");

const stunned = calculateCharacter(VOE_DATA, {
  attributeBase: { strength: 20, dexterity: 20, endurance: 20, intelligence: 20, wisdom: 20, charisma: 20 },
  skillBase: { athletics: 10 },
  selections: { conditions: ["stunned"] }
});

assert.strictEqual(stunned.actions, 0, "Stunned actions failed");
assert.strictEqual(stunned.reactionAvailable, false, "Stunned reaction failed");
assert.strictEqual(stunned.skills.athletics, 10, "Stunned all-tests penalty failed");

assert(VOE_WIZARD.steps.length === 7, "Wizard should contain seven steps");
const heritageStep = VOE_WIZARD.steps.find(step => step.id === "heritage");
assert.deepStrictEqual(validateWizardStep(heritageStep, { heritage: "" }).missing, ["heritage"]);
assert.strictEqual(validateWizardStep(heritageStep, { heritage: "ursa" }).valid, true);

assert(VOE_SHEET_MODES.player && VOE_SHEET_MODES.npc && VOE_SHEET_MODES.creature,
  "All three sheet modes must exist");

console.log("Veil of Empires v3.0-alpha.1 validation passed.");
