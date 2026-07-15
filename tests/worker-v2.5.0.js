
const HERITAGES = {"":{"name":"None","lineage":"Choose a Heritage","attributes":{},"skills":{},"armor":0,"health":0,"special":"No Heritage selected."},"rajah":{"name":"Rajah","lineage":"Snake Lineage","attributes":{"dexterity":5,"charisma":5},"skills":{"stealth":5,"deception":5},"armor":5,"health":0,"special":"Natural Scales: counts as Light Armor, imposing -5% on attackers."},"balam":{"name":"Balam","lineage":"Jaguar Lineage","attributes":{"strength":5,"dexterity":5},"skills":{"athletics":5,"close_combat":5},"armor":0,"health":0,"special":"Pounce: Once per round, move up to 5 feet immediately before a Close Combat attack without spending an action."},"hrafn":{"name":"Hrafn","lineage":"Raven Lineage","attributes":{"intelligence":5,"wisdom":5},"skills":{"investigation":5,"perception":5},"armor":0,"health":0,"special":"Keen Eyes: Gain +10 on Perception tests made to notice distant or hidden details."},"ursa":{"name":"Ursa","lineage":"Bear Lineage","attributes":{"strength":5,"endurance":5},"skills":{"athletics":5,"survival":5},"armor":0,"health":5,"special":"Massive Frame: +5 Maximum Health and count as one size larger when lifting, carrying, or resisting forced movement."},"zephyr":{"name":"Zephyr","lineage":"Wind Lineage","attributes":{"dexterity":5,"wisdom":5},"skills":{"acrobatics":5,"stealth":5},"armor":0,"health":0,"special":"Airborne Step: Ignore ordinary difficult terrain and reduce falling harm at the Director's discretion."}};
const PROTOCOLS = {"":{"name":"None","attributes":{},"skills":{},"temporary_health":0,"special":"No Protocol prepared."},"ghost_step":{"name":"Ghost Step","attributes":{"dexterity":5},"skills":{"stealth":10},"temporary_health":0,"special":"Observers suffer -5 to Perception tests made to locate you."},"arcane_sight":{"name":"Arcane Sight","attributes":{"intelligence":5},"skills":{"investigation":10},"temporary_health":0,"special":"You can perceive active magic and magical residue, even through thin barriers at short range."},"iron_heart":{"name":"Iron Heart","attributes":{"endurance":5},"skills":{"survival":10},"temporary_health":0,"special":"Ignore the first fatigue or exhaustion penalty you would suffer each scene."},"titan_frame":{"name":"Titan Frame","attributes":{"strength":5},"skills":{"athletics":10},"temporary_health":5,"special":"Gain +5 Temporary Health while this Protocol is prepared."},"calm_mind":{"name":"Calm Mind","attributes":{"wisdom":5},"skills":{"insight":10},"temporary_health":0,"special":"Once per scene, clear Frightened or gain +10 to resist mental or emotional influence."},"battle_focus":{"name":"Battle Focus","attributes":{"charisma":5},"skills":{"close_combat":10},"temporary_health":0,"special":"Your second Close Combat attack each round ignores the normal -10% multiple-attack penalty."}};
const SPECIALTIES = {"":{"name":"None","tagline":"Choose an Agent Specialty","skills":{},"movement":0,"contacts":0,"health":0,"contact_types":[],"special":"No Specialty selected."},"investigator":{"name":"Investigator","tagline":"The truth has a habit of hiding behind lies.","skills":{"perception":5,"investigation":5,"deception":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Detective","Professor","Informant"],"special":"Once per mission, ask the Director one focused investigative question. The answer must be truthful, though it may be incomplete."},"infiltrator":{"name":"Infiltrator","tagline":"Some doors were never meant to open.","skills":{"stealth":5,"acrobatics":5,"sleight_of_hand":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Spy","Fence","Safehouse Keeper"],"special":"After using a Move action, you may immediately attempt to Hide when suitable cover or concealment is available."},"vanguard":{"name":"Vanguard","tagline":"When the plan breaks, the Vanguard holds.","skills":{"athletics":5,"survival":5,"intimidation":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":5,"contact_types":["Officer","Veteran","Quartermaster"],"special":"Hardened Operative: +5 Maximum Health."},"scholar":{"name":"Scholar","tagline":"Every ruin is a library with sharper shelves.","skills":{"investigation":5,"arcana":5,"engineering":5,"technology":5,"medicine":5},"movement":5,"contacts":1,"health":0,"contact_types":["Archivist","Researcher","Librarian"],"special":"After one minute of examination, identify the broad purpose, origin, or danger of an unknown artifact or arcane device."},"pathfinder":{"name":"Pathfinder","tagline":"The Wilds are only unmapped until you survive them.","skills":{"survival":5,"perception":5,"athletics":5,"animal_handling":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Hunter","Scout","Guide"],"special":"Ordinary difficult terrain does not reduce your movement."},"warden":{"name":"Warden","tagline":"Stand behind me.","skills":{"athletics":5,"close_combat":5,"intimidation":5,"survival":5,"ranged_combat":5},"movement":5,"contacts":1,"health":5,"contact_types":["Veteran Commander","Master Smith","Expedition Marshal"],"special":"Hold the Line: Once each round after a successful adjacent Close Combat hit, force the target to remain engaged until its next turn unless it succeeds on an Athletics test."}};

const PROTOCOLS_RANK_2 = {
  ghost_step:{
    name:"Ghost Step II",
    attributes:{dexterity:5},
    skills:{stealth:15},
    temporary_health:0,
    special:"Observers suffer -10 to Perception tests made to locate you, and moving at full speed does not automatically reveal you."
  },
  arcane_sight:{
    name:"Arcane Sight II",
    attributes:{intelligence:5},
    skills:{investigation:15},
    temporary_health:0,
    special:"Perceive active magic and residue through substantial barriers at medium range, and identify its broad source or tradition."
  },
  iron_heart:{
    name:"Iron Heart II",
    attributes:{endurance:5},
    skills:{survival:15},
    temporary_health:5,
    special:"Ignore the first two fatigue or exhaustion penalties each scene and gain +5 Temporary Health while prepared."
  },
  titan_frame:{
    name:"Titan Frame II",
    attributes:{strength:10},
    skills:{athletics:15},
    temporary_health:10,
    special:"Gain +10 Temporary Health while prepared and count as one size larger for lifting, carrying, and forced movement."
  },
  calm_mind:{
    name:"Calm Mind II",
    attributes:{wisdom:5},
    skills:{insight:15},
    temporary_health:0,
    special:"Once per scene, clear Frightened or Charmed. Gain +15 to resist mental or emotional influence."
  },
  battle_focus:{
    name:"Battle Focus II",
    attributes:{charisma:5},
    skills:{close_combat:15},
    temporary_health:0,
    special:"Your second attack each round ignores its multiple-attack penalty. Your third attack suffers only -10%."
  }
};

const SPECIALTIES_RANK_2 = {
  investigator:{
    skills:{perception:5,investigation:5},health:0,contacts:1,
    special:"Reconstruct the Scene: Once per mission after examining a scene, ask two linked investigative questions. The Director answers truthfully, though details may remain incomplete."
  },
  infiltrator:{
    skills:{stealth:5,acrobatics:5},health:0,contacts:1,
    special:"Ghost Entry: Once per scene after successfully Hiding, reposition up to 10 feet without another test when cover or concealment connects the positions."
  },
  vanguard:{
    skills:{athletics:5,close_combat:5},health:5,contacts:1,
    special:"Refuse to Fall: Once per mission when reduced to 0 Health, remain at 1 Health instead."
  },
  scholar:{
    skills:{arcana:5,engineering:5},health:0,contacts:1,
    special:"Deep Analysis: Once per mission, identify one hidden property, flaw, or operating principle of an artifact, device, or magical phenomenon."
  },
  pathfinder:{
    skills:{survival:5,perception:5},health:0,contacts:1,
    special:"Trailblazer: You and allies following your route ignore ordinary difficult terrain and reduce environmental travel penalties by 5%."
  },
  warden:{
    skills:{close_combat:5,athletics:5},health:5,contacts:1,
    special:"Unbroken Line: Once each round when an adjacent ally takes damage, reduce that damage by 2 and become engaged with the attacker."
  }
};

const specialtyRank2Summary = key => {
  const base = SPECIALTIES[key] || SPECIALTIES[""];
  const rank2 = SPECIALTIES_RANK_2[key];
  if (!rank2) return summarizeSpecialty(base);
  const skills = Object.entries(rank2.skills || {}).map(([skill,value]) => `+${value} ${skill.replace(/_/g," ")}`);
  const extras = [];
  if (rank2.health) extras.push(`+${rank2.health} Maximum Health`);
  if (rank2.contacts) extras.push(`+${rank2.contacts} Contact`);
  if (rank2.special) extras.push(rank2.special);
  return `${summarizeSpecialty(base)}\n\nRank 2: ${[...skills,...extras].join(" • ")}`;
};

const getProtocolForRank = (key, rank) =>
  rank >= 2 && PROTOCOLS_RANK_2[key] ? PROTOCOLS_RANK_2[key] : (PROTOCOLS[key] || PROTOCOLS[""]);


const numberValue = (value, fallback = 0) => {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};
const clampPercent = value => Math.max(0, Math.min(100, Math.trunc(numberValue(value, 0))));
const escapeTemplate = value => String(value ?? "").replace(/}/g, ")").replace(/\n/g, " ");
const flipPercentile = roll => {
  const n = Math.max(1, Math.min(100, Math.trunc(numberValue(roll, 0))));
  if (n === 100) return 1;
  const padded = String(n).padStart(2, "0");
  const flipped = Number(padded[1] + padded[0]);
  return flipped === 0 ? 100 : flipped;
};

const ATTRIBUTE_KEYS = ["strength","dexterity","endurance","intelligence","wisdom","charisma"];
const SKILL_ATTRIBUTE_MAP = {
  athletics: ["athletics", "strength"], acrobatics: ["acrobatics", "dexterity"], stealth: ["stealth", "dexterity"],
  investigation: ["investigation", "intelligence"], arcana: ["arcana", "intelligence"], engineering: ["engineering", "intelligence"],
  medicine: ["medicine", "wisdom"], survival: ["survival", "wisdom"], perception: ["skill_perception", "wisdom"],
  insight: ["insight", "wisdom"], persuasion: ["persuasion", "charisma"], deception: ["deception", "charisma"],
  intimidation: ["intimidation", "charisma"], sleight_of_hand: ["sleight_of_hand", "dexterity"], technology: ["technology", "intelligence"],
  animal_handling: ["animal_handling", "wisdom"], close_combat: ["close_combat", "strength"], ranged_combat: ["ranged_combat", "dexterity"]
};

const CONDITION_KEYS = ["blinded","charmed","deafened","exhausted","frightened","incapacitated","poisoned","restrained","shocked","stunned"];
const CONDITION_LABELS = {
  blinded:"Blinded: -20% Perception, Close Combat, and Ranged Combat.",
  charmed:"Charmed: -10% Insight, Persuasion, Deception, and Intimidation; cannot willingly attack the charmer.",
  deafened:"Deafened: -10% Perception and hearing-based Initiative.",
  exhausted:"Exhausted: -10% to all tests and -10 feet Movement.",
  frightened:"Frightened: -10% to all tests while the source is present.",
  incapacitated:"Incapacitated: 0 Actions and no Reaction.",
  poisoned:"Poisoned: -10% to all tests.",
  restrained:"Restrained: Movement 0; -10% Dexterity-based skills and combat attacks.",
  shocked:"Shocked: -10% Intelligence/Wisdom-based tests and no Reaction.",
  stunned:"Stunned: 0 Actions, no Reaction, and -20% to all tests."
};


/*
 * Version 2.4 structured data facade.
 *
 * The mature v2.3.3 calculations remain authoritative in this release.
 * VOE_DATA exposes those exact same rule records through one stable schema,
 * allowing later migrations to replace hard-coded lookups one family at a time
 * without changing the sheet UI or existing character attributes.
 */
const VOE_DATA = Object.freeze({
  meta: Object.freeze({
    schemaVersion: 1,
    sheetVersion: "2.4.0",
    baselineVersion: "2.3.3"
  }),
  heritages: HERITAGES,
  specialties: SPECIALTIES,
  protocols: PROTOCOLS,
  conditions: Object.freeze(CONDITION_KEYS.reduce((catalog, id) => {
    catalog[id] = Object.freeze({ id, name: id.charAt(0).toUpperCase() + id.slice(1), summary: CONDITION_LABELS[id] || "" });
    return catalog;
  }, {})),
  attributes: Object.freeze(ATTRIBUTE_KEYS.map(id => Object.freeze({ id }))),
  skills: Object.freeze(Object.entries(SKILL_ATTRIBUTE_MAP).map(([id, fields]) => Object.freeze({
    id,
    attributeField: fields[0],
    linkedAttribute: fields[1]
  })))
});

const getRuleRecord = (family, id = "") => {
  const catalog = VOE_DATA[family] || {};
  return catalog[id] || catalog[""] || null;
};

const getActiveConditions = values => CONDITION_KEYS.filter(k => values[`condition_${k}`] === "1");
const conditionPenaltyForSkill = (skill, attribute, active) => {
  let penalty = 0;
  if (active.includes("exhausted")) penalty -= 10;
  if (active.includes("frightened")) penalty -= 10;
  if (active.includes("poisoned")) penalty -= 10;
  if (active.includes("stunned")) penalty -= 20;
  if (active.includes("blinded") && ["perception","close_combat","ranged_combat"].includes(skill)) penalty -= 20;
  if (active.includes("charmed") && ["insight","persuasion","deception","intimidation"].includes(skill)) penalty -= 10;
  if (active.includes("deafened") && skill === "perception") penalty -= 10;
  if (active.includes("restrained") && (attribute === "dexterity" || ["close_combat","ranged_combat"].includes(skill))) penalty -= 10;
  if (active.includes("shocked") && ["intelligence","wisdom"].includes(attribute)) penalty -= 10;
  return penalty;
};
const conditionPenaltyForAttribute = (attribute, active) => {
  let penalty = 0;
  if (active.includes("exhausted")) penalty -= 10;
  if (active.includes("frightened")) penalty -= 10;
  if (active.includes("poisoned")) penalty -= 10;
  if (active.includes("stunned")) penalty -= 20;
  if (active.includes("restrained") && attribute === "dexterity") penalty -= 10;
  if (active.includes("shocked") && ["intelligence","wisdom"].includes(attribute)) penalty -= 10;
  return penalty;
};

const summarizeHeritage = heritage => {
  if (!heritage || !heritage.name || heritage.name === "None") return "No Heritage selected.";
  const attrs = Object.entries(heritage.attributes || {}).map(([k,v]) => `+${v} ${k.charAt(0).toUpperCase()+k.slice(1)}`);
  const skills = Object.entries(heritage.skills || {}).map(([k,v]) => `+${v} ${k.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}`);
  const extras = [];
  if (numberValue(heritage.health,0)) extras.push(`+${heritage.health} Maximum Health`);
  if (numberValue(heritage.armor,0)) extras.push(`Natural Armor -${heritage.armor}% to attackers`);
  return [...attrs, ...skills, ...extras, heritage.special].filter(Boolean).join(" • ");
};
const summarizeProtocol = protocol => {
  const attrs = Object.entries(protocol.attributes || {}).map(([k,v]) => `+${v} ${k.charAt(0).toUpperCase()+k.slice(1)}`);
  const skills = Object.entries(protocol.skills || {}).map(([k,v]) => `+${v} ${k.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}`);
  const extras = numberValue(protocol.temporary_health,0) ? [`+${protocol.temporary_health} Temporary Health`] : [];
  return `${protocol.name}: ${[...attrs,...skills,...extras,protocol.special].filter(Boolean).join(" • ")}`;
};


const summarizeSpecialty = specialty => {
  if (!specialty || !specialty.name || specialty.name === "None") return "No Specialty selected.";
  const skills = Object.entries(specialty.skills || {}).map(([k,v]) => `+${v} ${k.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}`);
  const extras = [];
  if (numberValue(specialty.movement,0)) extras.push(`+${specialty.movement} Movement`);
  if (numberValue(specialty.contacts,0)) extras.push(`+${specialty.contacts} Contact`);
  if (numberValue(specialty.health,0)) extras.push(`+${specialty.health} Maximum Health`);
  if (specialty.special) extras.push(specialty.special);
  return [...skills, ...extras].join(" • ");
};
const summarizeCurrentBonuses = (heritage, specialty, protocols) => {
  const lines = [];
  if (heritage && heritage.name && heritage.name !== "None") lines.push(`${heritage.name}: ${summarizeHeritage(heritage)}`);
  if (specialty && specialty.name && specialty.name !== "None") lines.push(`${specialty.name}: ${summarizeSpecialty(specialty)}`);
  (protocols || []).forEach(p=>lines.push(summarizeProtocol(p)));
  return lines.length ? lines.join("\n\n") : "No Heritage, Specialty, or Protocol bonuses selected.";
};

const recalculateCharacter = () => {
  const fields = ["heritage","heritage_mirror","specialty","secondary_specialty","specialty_rank","rank","rank_health_bonus","protocol_slot_1","protocol_slot_2","protocol_slot_3", "armor_type", "carry_capacity_base", "health", "health_max", "temporary_health", "temporary_health_max", "temporary_health_applied", ...ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]), ...Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]), ...CONDITION_KEYS.map(k=>`condition_${k}`)];
  getAttrs([...new Set(fields)], values => {
    const heritageKey = values.heritage_mirror || values.heritage || "";
    const heritage = HERITAGES[heritageKey] || HERITAGES[""];
    const specialtyKey = values.specialty || "";
    const specialty = SPECIALTIES[specialtyKey] || SPECIALTIES[""];
    const secondarySpecialtyKey = values.secondary_specialty || "";
    const secondarySpecialty = SPECIALTIES[secondarySpecialtyKey] || SPECIALTIES[""];
    const specialtyRank = Math.max(1,Math.trunc(numberValue(values.specialty_rank,1)));
    const agentRank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
    const specialtyRank2 = specialtyRank >= 2 ? SPECIALTIES_RANK_2[specialtyKey] : null;
    const selectedProtocolKeys = [...new Set([values.protocol_slot_1, values.protocol_slot_2, values.protocol_slot_3].filter(Boolean))];
    const selectedProtocols = selectedProtocolKeys.map(k=>getProtocolForRank(k,agentRank)).filter(Boolean);
    const activeConditions = getActiveConditions(values);
    // Heritage Attribute values are folded into the editable Base field.
    // Protocol Attribute values remain temporary/active bonuses.
    const protocolAttrBonuses = Object.fromEntries(ATTRIBUTE_KEYS.map(k=>[k,0]));
    const skillBonuses = Object.fromEntries(Object.keys(SKILL_ATTRIBUTE_MAP).map(k=>[k,0]));
    Object.entries(heritage.skills || {}).forEach(([k,v])=>skillBonuses[k]=(skillBonuses[k]||0)+v);
    Object.entries(specialty.skills || {}).forEach(([k,v])=>skillBonuses[k]=(skillBonuses[k]||0)+v);
    Object.entries(secondarySpecialty.skills || {}).forEach(([k,v])=>skillBonuses[k]=(skillBonuses[k]||0)+v);
    Object.entries((specialtyRank2 || {}).skills || {}).forEach(([k,v])=>skillBonuses[k]=(skillBonuses[k]||0)+v);
    selectedProtocols.forEach(p=>{
      Object.entries(p.attributes || {}).forEach(([k,v])=>protocolAttrBonuses[k]=(protocolAttrBonuses[k]||0)+v);
      Object.entries(p.skills || {}).forEach(([k,v])=>skillBonuses[k]=(skillBonuses[k]||0)+v);
    });
    const updates = {
      heritage: heritageKey, heritage_mirror: heritageKey,
      specialty: specialtyKey,
      heritage_display: heritage.name === "None" ? "No Heritage" : heritage.name,
      heritage_lineage: heritage.lineage || "",
      heritage_summary: summarizeHeritage(heritage),
      specialty_display: specialty.name === "None" ? "No Specialty" : specialty.name,
      specialty_tagline: specialty.tagline || "",
      specialty_summary: specialtyRank >= 2 ? specialtyRank2Summary(specialtyKey) : summarizeSpecialty(specialty),
      secondary_specialty_display: secondarySpecialtyKey ? secondarySpecialty.name : "",
      secondary_specialty_summary: secondarySpecialtyKey ? summarizeSpecialty(secondarySpecialty) : "",
      specialty_contact_types: (specialty.contact_types || []).join(" / "),
      contacts_granted: numberValue(specialty.contacts,0) + numberValue(secondarySpecialty.contacts,0) + numberValue((specialtyRank2||{}).contacts,0),
      protocol_summary: selectedProtocols.length ? selectedProtocols.map(summarizeProtocol).join("\n\n") : "No Protocols prepared.",
      protocol_slot_1_display: getProtocolForRank(values.protocol_slot_1 || "",agentRank).name === "None" ? "No Protocol" : getProtocolForRank(values.protocol_slot_1 || "",agentRank).name,
      protocol_slot_1_summary: values.protocol_slot_1 ? summarizeProtocol(getProtocolForRank(values.protocol_slot_1,agentRank)) : "No Protocol prepared.",
      protocol_slot_2_display: getProtocolForRank(values.protocol_slot_2 || "",agentRank).name === "None" ? "No Protocol" : getProtocolForRank(values.protocol_slot_2 || "",agentRank).name,
      protocol_slot_2_summary: values.protocol_slot_2 ? summarizeProtocol(getProtocolForRank(values.protocol_slot_2,agentRank)) : "No Protocol prepared.",
      protocol_slot_3_display: getProtocolForRank(values.protocol_slot_3 || "",agentRank).name === "None" ? "No Protocol" : getProtocolForRank(values.protocol_slot_3 || "",agentRank).name,
      protocol_slot_3_summary: values.protocol_slot_3 ? summarizeProtocol(getProtocolForRank(values.protocol_slot_3,agentRank)) : "No Protocol prepared.",
      current_bonuses_summary: summarizeCurrentBonuses(heritage,specialty,selectedProtocols),
      heritage_armor_display: numberValue(heritage.armor,0) ? `Natural Light (-${heritage.armor}%)` : "None",
      speed: activeConditions.includes("restrained") ? 0 : Math.max(0, 35 + numberValue(specialty.movement,0) + numberValue(secondarySpecialty.movement,0) - (activeConditions.includes("exhausted") ? 10 : 0)),
      condition_summary: activeConditions.length ? activeConditions.map(k=>CONDITION_LABELS[k]).join("\n") : "No active condition penalties."
    };
    ATTRIBUTE_KEYS.forEach(k=>{
      const currentBase = numberValue(values[`${k}_base`],0);
      const previouslyAppliedHeritage = numberValue(values[`${k}_heritage_applied`],0);
      const newHeritageBase = numberValue((heritage.attributes || {})[k],0);
      // Remove the previous Heritage contribution, then apply the newly selected Heritage.
      // Any points manually added by the player remain intact.
      const adjustedBase = clampPercent(currentBase - previouslyAppliedHeritage + newHeritageBase);
      const protocolBonus = protocolAttrBonuses[k] || 0;
      updates[`${k}_base`] = adjustedBase;
      updates[`${k}_heritage_applied`] = newHeritageBase;
      updates[`${k}_bonus`] = protocolBonus;
      updates[k] = clampPercent(adjustedBase + protocolBonus + conditionPenaltyForAttribute(k, activeConditions));
    });
    Object.entries(SKILL_ATTRIBUTE_MAP).forEach(([skill,[baseField,attribute]])=>{
      const base = numberValue(values[baseField],0);
      const attrTotal = updates[attribute];
      const extra = skillBonuses[skill] || 0;
      const conditionPenalty = conditionPenaltyForSkill(skill, attribute, activeConditions);
      updates[`${skill}_bonus`] = extra + conditionPenalty;
      updates[`${skill}_total`] = clampPercent(base + attrTotal + extra + conditionPenalty);
    });
    const armorRaw = String(values.armor_type || "0");
    const wornArmor = numberValue(armorRaw.replace("natural_",""),0);
    const heritageArmor = numberValue(heritage.armor,0);
    updates.armor_penalty = Math.max(wornArmor, heritageArmor);

    const previousHealthMax = Math.max(0,numberValue(values.health_max,10));
    const newHealthMax = 10 + numberValue(heritage.health,0) + numberValue(specialty.health,0) + numberValue(secondarySpecialty.health,0) + numberValue((specialtyRank2||{}).health,0) + numberValue(values.rank_health_bonus,0);
    const currentHealth = Math.max(0,numberValue(values.health,previousHealthMax));
    updates.health_max = newHealthMax;
    updates.health = Math.min(newHealthMax, Math.max(0, currentHealth + (newHealthMax - previousHealthMax)));

    const previousTempApplied = Math.max(0,numberValue(values.temporary_health_applied,0));
    const newTempHealth = selectedProtocols.reduce((sum,p)=>sum+numberValue(p.temporary_health,0),0);
    const currentTemp = Math.max(0,numberValue(values.temporary_health,0));
    updates.temporary_health_max = newTempHealth;
    updates.temporary_health_applied = newTempHealth;
    updates.temporary_health = Math.max(0, currentTemp - previousTempApplied + newTempHealth);

    if (activeConditions.includes("incapacitated") || activeConditions.includes("stunned")) updates.actions_current = 0;
    if (activeConditions.includes("incapacitated") || activeConditions.includes("stunned") || activeConditions.includes("shocked")) updates.reaction_available = 0;

    const baseCapacity = numberValue(values.carry_capacity_base,20);
    updates.carry_capacity = baseCapacity;
    setAttrs(updates, {silent:true});
  });
};

const runPercentileTest = ({name,target,kind="Test",damage="",description=""}) => {
  const safeTarget = clampPercent(target);
  getAttrs(["character_name"], values => {
    const rollString = `&{template:voe} {{name=${escapeTemplate(name)}}} {{agent=${escapeTemplate(values.character_name || "Unnamed Agent")}}} {{kind=${escapeTemplate(kind)}}} {{rolled=[[1d100]]}} {{showresult=1}} {{result=[[0]]}} {{target=${safeTarget}}} {{success=[[0]]}} {{failure=[[0]]}} {{margin=[[0]]}}${damage ? ` {{damage=${escapeTemplate(damage)}}}` : ""}${description ? ` {{description=${escapeTemplate(description)}}}` : ""}`;
    startRoll(rollString, results => {
      const rolled = Math.trunc(results.results.rolled.result);
      const success = rolled <= safeTarget;
      const margin = success ? safeTarget - rolled : rolled - safeTarget;
      setAttrs({last_roll:rolled,last_target:safeTarget,last_test_name:name,last_test_kind:kind,last_test_damage:damage,last_test_description:description,last_test_valid:1},{silent:true});
      finishRoll(results.rollId,{result:rolled,success:success?1:0,failure:success?0:1,margin});
    });
  });
};
const bindTest = (button,field,label,kind="Test") => on(`clicked:${button}`,()=>getAttrs([field],v=>runPercentileTest({name:label,target:v[field],kind})));
const postNotice = (name,notice,kind="Combat") => getAttrs(["character_name"],v=>startRoll(`&{template:voe} {{name=${escapeTemplate(name)}}} {{agent=${escapeTemplate(v.character_name||"Unnamed Agent")}}} {{kind=${escapeTemplate(kind)}}} {{notice=${escapeTemplate(notice)}}}`,r=>finishRoll(r.rollId)));


const RANK_UP_COST = 1000;

const rank2PathPreview = (path, currentSpecialty, newSpecialty) => {
  if (path === "new") {
    const selected = SPECIALTIES[newSpecialty] || SPECIALTIES[""];
    return newSpecialty
      ? `Second Specialty: ${selected.name}\n${summarizeSpecialty(selected)}`
      : "Choose a second Specialty. It must be different from your current Specialty.";
  }
  return currentSpecialty
    ? specialtyRank2Summary(currentSpecialty)
    : "Choose a current Specialty before advancing it to Rank 2.";
};

const refreshLevelUpPreview = () => {
  getAttrs(["levelup_specialty_path","specialty","levelup_new_specialty"], values => {
    setAttrs({
      levelup_specialty_preview: rank2PathPreview(
        values.levelup_specialty_path || "advance",
        values.specialty || "",
        values.levelup_new_specialty || ""
      )
    }, {silent:true});
  });
};

on("clicked:open_level_up", () => {
  getAttrs(["rank","experience","rank2_completed"], values => {
    const rank = Math.max(1, Math.trunc(numberValue(values.rank,1)));
    const xp = Math.max(0, Math.trunc(numberValue(values.experience,0)));
    let warning = "";
    if (rank >= 2 || String(values.rank2_completed) === "1") warning = "This Agent has already completed Rank 2 advancement.";
    else if (xp < RANK_UP_COST) warning = `You need ${RANK_UP_COST - xp} more XP to reach Rank 2.`;
    setAttrs({levelup_open:1,levelup_warning:warning});
    refreshLevelUpPreview();
  });
});

on("change:levelup_specialty_path change:levelup_new_specialty change:specialty", refreshLevelUpPreview);

on("clicked:confirm_level_up", () => {
  const fields = [
    "rank","experience","rank2_completed","health","health_max","rank_health_bonus",
    "specialty","levelup_specialty_path","levelup_new_specialty",
    "levelup_attribute","levelup_skill_1","levelup_skill_2"
  ];
  getAttrs(fields, values => {
    const rank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
    const xp = Math.max(0,Math.trunc(numberValue(values.experience,0)));
    const attribute = values.levelup_attribute || "";
    const skill1 = values.levelup_skill_1 || "";
    const skill2 = values.levelup_skill_2 || "";
    const path = values.levelup_specialty_path || "advance";
    const currentSpecialty = values.specialty || "";
    const newSpecialty = values.levelup_new_specialty || "";

    const errors = [];
    if (rank !== 1 || String(values.rank2_completed) === "1") errors.push("Rank 2 advancement has already been completed.");
    if (xp < RANK_UP_COST) errors.push("At least 1,000 current XP is required.");
    if (!ATTRIBUTE_KEYS.includes(attribute)) errors.push("Choose an Attribute.");
    if (!SKILL_ATTRIBUTE_MAP[skill1] || !SKILL_ATTRIBUTE_MAP[skill2]) errors.push("Choose two Skills.");
    if (skill1 === skill2) errors.push("The two Skill increases must be different.");
    if (path === "advance" && !currentSpecialty) errors.push("Choose a current Specialty before advancing it.");
    if (path === "new" && (!newSpecialty || newSpecialty === currentSpecialty)) errors.push("Choose a different second Specialty.");

    if (errors.length) {
      setAttrs({levelup_warning:errors.join("\n")});
      return;
    }

    const attributeField = `${attribute}_base`;
    const skillField1 = SKILL_ATTRIBUTE_MAP[skill1][0];
    const skillField2 = SKILL_ATTRIBUTE_MAP[skill2][0];
    getAttrs([attributeField,skillField1,skillField2], current => {
      const updates = {
        rank:2,
        mastery:1,
        experience:xp-RANK_UP_COST,
        experience_next:RANK_UP_COST,
        rank_health_bonus:numberValue(values.rank_health_bonus,0)+5,
        rank2_completed:1,
        levelup_open:0,
        levelup_warning:"",
        [attributeField]:clampPercent(numberValue(current[attributeField],0)+5),
        [skillField1]:clampPercent(numberValue(current[skillField1],0)+5),
        [skillField2]:clampPercent(numberValue(current[skillField2],0)+5)
      };

      if (path === "advance") {
        updates.specialty_rank = 2;
        updates.secondary_specialty = "";
      } else {
        updates.specialty_rank = 1;
        updates.secondary_specialty = newSpecialty;
      }

      setAttrs(updates, {}, () => recalculateCharacter());
    });
  });
});

ATTRIBUTE_KEYS.forEach(k=>bindTest(k,k,k.charAt(0).toUpperCase()+k.slice(1),"Attribute Test"));
const skillLabels = {athletics:"Athletics",acrobatics:"Acrobatics",stealth:"Stealth",investigation:"Investigation",arcana:"Arcana",engineering:"Engineering",medicine:"Medicine",survival:"Survival",perception:"Perception",insight:"Insight",persuasion:"Persuasion",deception:"Deception",intimidation:"Intimidation",sleight_of_hand:"Sleight of Hand",technology:"Technology",animal_handling:"Animal Handling"};
Object.entries(skillLabels).forEach(([k,label])=>bindTest(k,`${k}_total`,label,"Skill Test"));

const runInitiative = () => getAttrs(["character_name"],v=>startRoll(`&{template:voe} {{name=Initiative}} {{agent=${escapeTemplate(v.character_name||"Unnamed Agent")}}} {{kind=Initiative}} {{showinitiative=1}} {{rolled=[[1d100]]}} {{result=[[0]]}}`,r=>finishRoll(r.rollId,{result:Math.trunc(r.results.rolled.result)})));
const runCombatAttack = mode => {
  const field=mode==="close"?"close_combat_total":"ranged_combat_total"; const label=mode==="close"?"Close Combat Attack":"Ranged Combat Attack";
  getAttrs([field,"actions_current","attacks_made","target_armor_penalty","target_evading","attack_other_modifier","protocol_slot_1","protocol_slot_2","protocol_slot_3"],v=>{
    const actions=Math.max(0,Math.trunc(numberValue(v.actions_current,3))); const attacks=Math.max(0,Math.trunc(numberValue(v.attacks_made,0)));
    if(actions<1) return postNotice(label,"No actions remain. Reset the round before making another attack.");
    const hasBattleFocus=[v.protocol_slot_1,v.protocol_slot_2,v.protocol_slot_3].includes("battle_focus");
    const base=numberValue(v[field],0), multi=(mode==="close" && hasBattleFocus && attacks===1 ? 0 : attacks*10), armor=Math.max(0,numberValue(v.target_armor_penalty,0)), evasion=v.target_evading==="1"?10:0, other=numberValue(v.attack_other_modifier,0);
    const finalTarget=clampPercent(base-multi-armor-evasion+other);
    runPercentileTest({name:label,target:finalTarget,kind:"Attack",description:`Base ${Math.trunc(base)}% | Attack ${attacks+1} penalty -${multi}% | Armor -${armor}% | Evasion -${evasion}% | Other ${other>=0?"+":""}${other}% | Final ${finalTarget}%`});
    setAttrs({actions_current:actions-1,attacks_made:attacks+1,attacks_remaining:Math.max(0,2-attacks)},{silent:true});
  });
};
on("clicked:initiative",runInitiative);
on("clicked:evasion",()=>getAttrs(["reaction_available","athletics_total"],v=>{if(v.reaction_available!=="1")return postNotice("Evasion","Your Reaction has already been spent this round.","Reaction");setAttrs({reaction_available:0},{silent:true});runPercentileTest({name:"Evasion",target:v.athletics_total,kind:"Reaction • Athletics",description:"On a success, the incoming attacker reduces their attack target by 10%. Declare before the attack roll."});}));
on("clicked:move_action",()=>getAttrs(["actions_current","speed"],v=>{const a=Math.max(0,Math.trunc(numberValue(v.actions_current,3)));if(a<1)return postNotice("Move","No actions remain.");setAttrs({actions_current:a-1},{silent:true});postNotice("Move",`Moved up to ${numberValue(v.speed,35)} feet. ${a-1} actions remain.`);}));
on("clicked:close_attack clicked:close_combat",()=>runCombatAttack("close"));
on("clicked:ranged_attack clicked:ranged_combat",()=>runCombatAttack("ranged"));
on("clicked:reset_round",()=>{setAttrs({actions_current:3,attacks_made:0,attacks_remaining:3,reaction_available:1,target_evading:0},{silent:true});postNotice("New Round","Actions reset to 3, attack penalties cleared, and Reaction restored.");});
on("clicked:untrained_test",()=>runPercentileTest({name:"Untrained Test",target:0,kind:"Custom Test"}));
on("clicked:diagnostic_d100",()=>runPercentileTest({name:"Test d100",target:100,kind:"Diagnostic"}));

on("clicked:contingency",()=>getAttrs(["last_roll","last_target","last_test_name","last_test_kind","last_test_valid","contingency_current","character_name"],v=>{
  if(numberValue(v.last_test_valid,0)!==1)return postNotice("Contingency","No percentile roll is stored. Make a test first.","Contingency");
  const current=Math.max(0,Math.trunc(numberValue(v.contingency_current,0))); if(current<1)return postNotice("Contingency","No Contingency points remain.","Contingency");
  const original=Math.trunc(numberValue(v.last_roll,0)),target=clampPercent(v.last_target),flipped=flipPercentile(original),success=flipped<=target,margin=success?target-flipped:flipped-target;
  const rollString=`&{template:voe} {{name=${escapeTemplate(v.last_test_name||"Contingency")}}} {{agent=${escapeTemplate(v.character_name||"Unnamed Agent")}}} {{kind=Contingency • ${escapeTemplate(v.last_test_kind||"Test")}}} {{showresult=1}} {{result=[[0]]}} {{original=${original}}} {{target=${target}}} {{success=[[0]]}} {{failure=[[0]]}} {{margin=[[0]]}} {{description=Digits flipped from ${original} to ${String(flipped).padStart(2,"0")}. No dice were rerolled.}}`;
  startRoll(rollString,r=>{finishRoll(r.rollId,{result:flipped,success:success?1:0,failure:success?0:1,margin});setAttrs({contingency_current:current-1,last_roll:flipped,last_test_valid:1},{silent:true});});
}));

on("change:armor_type",recalculateCharacter);
on("change:heritage",e=>setAttrs({heritage_mirror:e.newValue},{silent:true}));
on("change:heritage_mirror",e=>setAttrs({heritage:e.newValue},{silent:true}));
const recalcEvents=["heritage","heritage_mirror","specialty","protocol_slot_1","protocol_slot_2","protocol_slot_3","armor_type",...ATTRIBUTE_KEYS.map(k=>`${k}_base`),...Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]), ...CONDITION_KEYS.map(k=>`condition_${k}`)].map(f=>`change:${f}`).join(" ");
on(recalcEvents,recalculateCharacter);
on("change:specialty", recalculateCharacter);
on("sheet:opened",()=>{getAttrs(["sheet_version","actions_current","attacks_made","attacks_remaining","reaction_available"],v=>{const u={sheet_version:"2.4.2"};const made=Math.max(0,Math.trunc(numberValue(v.attacks_made,0)));if(!Number.isFinite(parseFloat(v.actions_current)))u.actions_current=3;if(!Number.isFinite(parseFloat(v.attacks_made)))u.attacks_made=0;if(!Number.isFinite(parseFloat(v.attacks_remaining)))u.attacks_remaining=Math.max(0,3-made);if(v.reaction_available!=="0"&&v.reaction_available!=="1")u.reaction_available=1;setAttrs(u,{silent:true});recalculateCharacter();});});

on("change:contingency_max",e=>{const m=Math.max(0,numberValue(e.newValue,3));getAttrs(["contingency_current"],v=>setAttrs({contingency_current:Math.min(m,numberValue(v.contingency_current,m))}));});





const getProtocolCardDetails = protocolId => {
  const protocol = getProtocolForRank(protocolId,2);
  return {
    display: protocol.name && protocol.name !== "None" ? protocol.name : "No Protocol",
    summary: protocolId ? summarizeProtocol(protocol) : "No Protocol prepared."
  };
};

const updateRepeatingProtocolRow = (rowId, selectedId) => {
  if (!rowId) return;
  const prefix = `repeating_protocols_${rowId}`;
  const selected = getProtocolCardDetails(selectedId || "");
  setAttrs({
    [`${prefix}_protocol_display`]: selected.display,
    [`${prefix}_protocol_summary`]: selected.summary
  }, {silent:true});
};

on("change:repeating_protocols:protocol_name", eventInfo => {
  const source = eventInfo.sourceAttribute || "";
  const rowId = source
    .replace(/^repeating_protocols_/, "")
    .replace(/_protocol_name$/, "");
  if (!rowId || rowId === source) return;
  updateRepeatingProtocolRow(rowId, eventInfo.newValue || "");
});

const refreshRepeatingProtocolRows = () => {
  getSectionIDs("repeating_protocols", rowIds => {
    if (!rowIds || !rowIds.length) return;
    const fields = rowIds.map(rowId => `repeating_protocols_${rowId}_protocol_name`);
    getAttrs(fields, values => {
      rowIds.forEach(rowId => {
        const field = `repeating_protocols_${rowId}_protocol_name`;
        updateRepeatingProtocolRow(rowId, values[field] || "");
      });
    });
  });
};

on("sheet:opened", refreshRepeatingProtocolRows);

const WEAPON_CATALOG = {
  utility_knife:{name:"Utility Knife",skill:"close_combat",damage:"2",range:"Close",notes:"Concealable, utility blade.",weight:0.5},
  service_sword:{name:"Service Sword",skill:"close_combat",damage:"3",range:"Close",notes:"Balanced military sidearm.",weight:2},
  war_hammer:{name:"War Hammer",skill:"close_combat",damage:"4",range:"Close",notes:"Heavy, effective against hardened targets.",weight:4},
  compact_pistol:{name:"Compact Pistol",skill:"ranged_combat",damage:"3",range:"30 ft",notes:"Concealable sidearm; requires ammunition.",weight:1.5},
  service_carbine:{name:"Service Carbine",skill:"ranged_combat",damage:"4",range:"100 ft",notes:"Reliable standard-issue ranged weapon.",weight:4},
  long_rifle:{name:"Long Rifle",skill:"ranged_combat",damage:"5",range:"200 ft",notes:"Two-handed, accurate at long range.",weight:5},
  scattergun:{name:"Scattergun",skill:"ranged_combat",damage:"5",range:"20 ft",notes:"Two-handed; devastating at short range.",weight:5},
  arc_caster:{name:"Arc Caster",skill:"ranged_combat",damage:"4",range:"60 ft",notes:"Protocol-powered weapon; conspicuous arc discharge.",weight:3}
};

const ARMOR_CATALOG = {
  field_coat:{name:"Light Field Coat",armor:"5",type:"Armor",weight:3,notes:"Light Armor. Attackers suffer -5%."},
  lamellar_vest:{name:"Medium Lamellar Vest",armor:"10",type:"Armor",weight:6,notes:"Medium Armor. Attackers suffer -10%."},
  bulwark_harness:{name:"Heavy Bulwark Harness",armor:"15",type:"Armor",weight:10,notes:"Heavy Armor. Attackers suffer -15%."}
};

const EQUIPMENT_CATALOG = {
  agent_pack:{name:"Agent Pack",type:"Container",weight:2,notes:"Reinforced field pack with modular straps."},
  commlink:{name:"Encrypted Commlink",type:"Communication",weight:0.2,notes:"Secure short-range voice and coded-text communication."},
  field_rations:{name:"Field Rations (3 days)",type:"Supplies",weight:1.5,notes:"Compact preserved food and water-treatment tablets."},
  medical_kit:{name:"Medical Kit",type:"Medical",weight:2,notes:"Bandages, antiseptic, splints, stimulants, and surgical basics."},
  bypass_kit:{name:"Bypass Kit",type:"Tools",weight:1,notes:"Lock tools, wire probes, seals, and mechanical bypass instruments."},
  climbing_kit:{name:"Climbing Kit",type:"Tools",weight:3,notes:"Harness, hooks, anchors, pulleys, and gloves."},
  binoculars:{name:"Field Binoculars",type:"Optics",weight:1,notes:"Long-range optics with low-light filters."},
  lantern:{name:"Aether Lantern",type:"Utility",weight:1,notes:"Shielded, adjustable magical illumination."},
  rope:{name:"Silksteel Rope",type:"Utility",weight:2,notes:"50 feet of lightweight reinforced rope."},
  disguise_kit:{name:"Disguise Kit",type:"Social",weight:2,notes:"Cosmetics, dyes, adhesives, false insignia, and wardrobe pieces."},
  protocol_toolkit:{name:"Protocol Toolkit",type:"Arcane Tools",weight:3,notes:"Calibration tools, conduit patches, gauges, and replacement fittings."},
  map_case:{name:"Survey Map Case",type:"Navigation",weight:0.5,notes:"Weatherproof case with writing tools and measurement instruments."}
};

const addEquipmentCatalogRow = item => {
  const row = generateRowID();
  const prefix = `repeating_equipment_${row}`;
  setAttrs({
    [`${prefix}_item_name`]:item.name,
    [`${prefix}_item_type`]:item.type,
    [`${prefix}_item_quantity`]:1,
    [`${prefix}_item_weight`]:item.weight,
    [`${prefix}_item_notes`]:item.notes
  });
};

const catalogPreviewText = (catalog,key,kind) => {
  const item=catalog[key] || Object.values(catalog)[0];
  if(kind==="weapon") return `${item.name} • ${item.skill==="close_combat"?"Close Combat":"Ranged Combat"} • Damage ${item.damage} • ${item.range}`;
  if(kind==="armor") return `${item.name} • Attackers suffer -${item.armor}% • Weight ${item.weight}`;
  return `${item.name} • ${item.type} • Weight ${item.weight}`;
};

on("change:catalog_weapon",()=>{
  getAttrs(["catalog_weapon"],v=>setAttrs({catalog_weapon_preview:catalogPreviewText(WEAPON_CATALOG,v.catalog_weapon,"weapon")},{silent:true}));
});
on("change:catalog_armor",()=>{
  getAttrs(["catalog_armor"],v=>setAttrs({catalog_armor_preview:catalogPreviewText(ARMOR_CATALOG,v.catalog_armor,"armor")},{silent:true}));
});
on("change:catalog_equipment",()=>{
  getAttrs(["catalog_equipment"],v=>setAttrs({catalog_equipment_preview:catalogPreviewText(EQUIPMENT_CATALOG,v.catalog_equipment,"equipment")},{silent:true}));
});

on("clicked:add_catalog_weapon",()=>{
  getAttrs(["catalog_weapon","close_combat","ranged_combat"],v=>{
    const item=WEAPON_CATALOG[v.catalog_weapon] || WEAPON_CATALOG.utility_knife;
    const row=generateRowID();
    const prefix=`repeating_weapons_${row}`;
    setAttrs({
      [`${prefix}_weapon_name`]:item.name,
      [`${prefix}_weapon_target`]:numberValue(v[item.skill],40),
      [`${prefix}_weapon_damage`]:item.damage,
      [`${prefix}_weapon_range`]:item.range,
      [`${prefix}_weapon_notes`]:item.notes
    });
  });
});

on("clicked:equip_catalog_armor",()=>{
  getAttrs(["catalog_armor"],v=>{
    const item=ARMOR_CATALOG[v.catalog_armor] || ARMOR_CATALOG.field_coat;
    addEquipmentCatalogRow(item);
    setAttrs({armor_type:item.armor});
  });
});

on("clicked:add_catalog_equipment",()=>{
  getAttrs(["catalog_equipment"],v=>{
    const item=EQUIPMENT_CATALOG[v.catalog_equipment] || EQUIPMENT_CATALOG.agent_pack;
    addEquipmentCatalogRow(item);
  });
});

on("clicked:add_field_kit",()=>{
  ["agent_pack","commlink","field_rations","medical_kit","lantern","rope"].forEach(key=>addEquipmentCatalogRow(EQUIPMENT_CATALOG[key]));
});

on("clicked:repeating_weapons:weapon",eventInfo=>{const m=(eventInfo.sourceAttribute||"").match(/^(repeating_weapons_[^_]+)_weapon$/);if(!m)return;const p=m[1];getAttrs([`${p}_weapon_name`,`${p}_weapon_target`,`${p}_weapon_damage`,`${p}_weapon_notes`],v=>runPercentileTest({name:v[`${p}_weapon_name`]||"Weapon Attack",target:v[`${p}_weapon_target`],kind:"Weapon Attack",damage:v[`${p}_weapon_damage`]||"",description:v[`${p}_weapon_notes`]||""}));});
on("clicked:repeating_protocols:protocol",eventInfo=>{const m=(eventInfo.sourceAttribute||"").match(/^(repeating_protocols_[^_]+)_protocol$/);if(!m)return;const p=m[1];getAttrs([`${p}_protocol_name`,`${p}_protocol_rank`,`${p}_protocol_effect`,"character_name"],v=>startRoll(`&{template:voe} {{name=${escapeTemplate(v[`${p}_protocol_name`]||"Protocol")}}} {{agent=${escapeTemplate(v.character_name||"Unnamed Agent")}}} {{kind=Protocol • Rank ${escapeTemplate(v[`${p}_protocol_rank`]||"1")}}} {{description=${escapeTemplate(v[`${p}_protocol_effect`]||"Activated")}}}`,r=>finishRoll(r.rollId)));});
on("change:repeating_protocols:protocol_load change:repeating_protocols:protocol_prepared remove:repeating_protocols",()=>getSectionIDs("repeating_protocols",ids=>{if(!ids.length)return setAttrs({protocol_loaded:0});const f=ids.flatMap(id=>[`repeating_protocols_${id}_protocol_load`,`repeating_protocols_${id}_protocol_prepared`]);getAttrs(f,v=>setAttrs({protocol_loaded:ids.reduce((s,id)=>s+(v[`repeating_protocols_${id}_protocol_prepared`]==="1"?numberValue(v[`repeating_protocols_${id}_protocol_load`],0):0),0)}));}));
on("change:repeating_equipment:item_weight change:repeating_equipment:item_quantity remove:repeating_equipment",()=>getSectionIDs("repeating_equipment",ids=>{if(!ids.length)return setAttrs({carried_weight:0});const f=ids.flatMap(id=>[`repeating_equipment_${id}_item_weight`,`repeating_equipment_${id}_item_quantity`]);getAttrs(f,v=>setAttrs({carried_weight:Math.round(ids.reduce((s,id)=>s+numberValue(v[`repeating_equipment_${id}_item_weight`],0)*numberValue(v[`repeating_equipment_${id}_item_quantity`],1),0)*10)/10}));}));

