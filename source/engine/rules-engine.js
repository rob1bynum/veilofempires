/*
 * Pure calculation functions. No Roll20 APIs belong in this file.
 */

const asNumber = (value, fallback = 0) => {
  const result = Number(value);
  return Number.isFinite(result) ? result : fallback;
};

const indexById = collection =>
  Object.freeze(Object.fromEntries(collection.map(item => [item.id, item])));

const applyOperation = (current, modifier) => {
  if (modifier.operation === "set") return asNumber(modifier.value);
  if (modifier.operation === "multiply") return current * asNumber(modifier.value, 1);
  return current + asNumber(modifier.value);
};

const createBlankBonuses = data => ({
  attributes: Object.fromEntries(data.attributes.map(item => [item.id, 0])),
  skills: Object.fromEntries(data.skills.map(item => [item.id, 0])),
  derived: { movement: 0 },
  resources: {
    health_max: 0,
    contacts: 0,
    actions: 3,
    reaction_available: 1
  },
  allTests: 0,
  notes: []
});

const applyModifier = (state, modifier, data) => {
  const [group, id] = String(modifier.target).split(".");

  if (modifier.target === "all_tests") {
    state.allTests = applyOperation(state.allTests, modifier);
    return;
  }

  if (group === "skill" && id in state.skills) {
    state.skills[id] = applyOperation(state.skills[id], modifier);
    return;
  }

  if (group === "attribute" && id in state.attributes) {
    state.attributes[id] = applyOperation(state.attributes[id], modifier);
    return;
  }

  if (group === "derived" && id in state.derived) {
    state.derived[id] = applyOperation(state.derived[id], modifier);
    return;
  }

  if (group === "resource" && id in state.resources) {
    state.resources[id] = applyOperation(state.resources[id], modifier);
    return;
  }

  if (group === "attribute_skill_group") {
    data.skills
      .filter(skill => skill.attribute === id)
      .forEach(skill => {
        state.skills[skill.id] = applyOperation(state.skills[skill.id], modifier);
      });
    return;
  }

  state.notes.push(`Unrecognized modifier target: ${modifier.target}`);
};

const calculateBonuses = (data, selections) => {
  const state = createBlankBonuses(data);
  const heritageById = indexById(data.heritages);
  const specialtyById = indexById(data.specialties);
  const protocolById = indexById(data.protocols);
  const conditionById = indexById(data.conditions);

  const sources = [
    heritageById[selections.heritage || ""],
    specialtyById[selections.specialty || ""],
    ...(selections.protocols || []).map(id => protocolById[id]),
    ...(selections.conditions || []).map(id => conditionById[id])
  ].filter(Boolean);

  sources.forEach(source => {
    (source.modifiers || []).forEach(modifier => applyModifier(state, modifier, data));
  });

  return state;
};

const calculateCharacter = (data, character) => {
  const bonuses = calculateBonuses(data, character.selections || {});
  const attributes = {};
  const skills = {};

  data.attributes.forEach(attribute => {
    attributes[attribute.id] =
      asNumber(character.attributeBase?.[attribute.id]) +
      asNumber(bonuses.attributes[attribute.id]);
  });

  data.skills.forEach(skill => {
    skills[skill.id] =
      asNumber(character.skillBase?.[skill.id]) +
      asNumber(attributes[skill.attribute]) +
      asNumber(bonuses.skills[skill.id]) +
      asNumber(bonuses.allTests);
  });

  return {
    attributes,
    skills,
    movement: Math.max(
      0,
      asNumber(character.movementBase, 35) + asNumber(bonuses.derived.movement)
    ),
    healthMax: Math.max(
      0,
      asNumber(character.healthBase, 10) + asNumber(bonuses.resources.health_max)
    ),
    contacts: Math.max(
      0,
      asNumber(character.contactsBase) + asNumber(bonuses.resources.contacts)
    ),
    actions: Math.max(0, asNumber(bonuses.resources.actions, 3)),
    reactionAvailable: Boolean(asNumber(bonuses.resources.reaction_available, 1)),
    diagnostics: bonuses.notes
  };
};

if (typeof module !== "undefined") {
  module.exports = {
    asNumber,
    indexById,
    applyOperation,
    applyModifier,
    calculateBonuses,
    calculateCharacter
  };
}
