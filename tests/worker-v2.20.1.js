const HERITAGES = {"":{"name":"None","lineage":"Choose a Heritage","attributes":{},"skills":{},"armor":0,"health":0,"special":"No Heritage selected."},"rajah":{"name":"Rajah","lineage":"Snake Lineage","attributes":{"dexterity":5,"charisma":5},"skills":{"stealth":5,"deception":5},"armor":5,"health":0,"special":"Natural Scales: counts as Light Armor, imposing -5% on attackers."},"balam":{"name":"Balam","lineage":"Jaguar Lineage","attributes":{"strength":5,"dexterity":5},"skills":{"athletics":5,"close_combat":5},"armor":0,"health":0,"special":"Pounce: Once per round, move up to 5 feet immediately before a Close Combat attack without spending an action."},"hrafn":{"name":"Hrafn","lineage":"Raven Lineage","attributes":{"intelligence":5,"wisdom":5},"skills":{"investigation":5,"perception":5},"armor":0,"health":0,"special":"Keen Eyes: Gain +10 on Perception tests made to notice distant or hidden details."},"ursa":{"name":"Ursa","lineage":"Bear Lineage","attributes":{"strength":5,"endurance":5},"skills":{"athletics":5,"survival":5},"armor":0,"health":5,"special":"Massive Frame: +5 Maximum Health and count as one size larger when lifting, carrying, or resisting forced movement."},"zephyr":{"name":"Zephyr","lineage":"Wind Lineage","attributes":{"dexterity":5,"wisdom":5},"skills":{"acrobatics":5,"stealth":5},"armor":0,"health":0,"special":"Airborne Step: Ignore ordinary difficult terrain and reduce falling harm at the Director's discretion."}};
const PROTOCOLS = {"":{"name":"None","attributes":{},"skills":{},"temporary_health":0,"special":"No Protocol prepared."},"glimpse_future":{"name":"Glimpse the Future","attributes":{},"skills":{},"temporary_health":0,"special":"Reaction: choose Forewarned to impose -5% on one attack against you, or Exploit the Opening to gain +5% on your next attack."},"ghost_step":{"name":"Ghost Step","attributes":{"wisdom":5},"skills":{"stealth":10},"temporary_health":0,"special":"Observers suffer -5 to Perception tests made to locate you."},"arcane_sight":{"name":"Arcane Sight","attributes":{"intelligence":5},"skills":{"investigation":10},"temporary_health":0,"special":"You can perceive active magic and magical residue, even through thin barriers at short range."},"iron_heart":{"name":"Iron Heart","attributes":{"endurance":5},"skills":{"survival":10},"temporary_health":0,"special":"Ignore the first fatigue or exhaustion penalty you would suffer each scene."},"titan_frame":{"name":"Titan Frame","attributes":{"strength":5},"skills":{"athletics":10},"temporary_health":5,"special":"Gain +5 Temporary Health while this Protocol is prepared."},"calm_mind":{"name":"Calm Mind","attributes":{"wisdom":5},"skills":{"insight":10},"temporary_health":0,"special":"Once per scene, clear Frightened or gain +10 to resist mental or emotional influence."},"battle_focus":{"name":"Battle Focus","attributes":{"charisma":5},"skills":{"close_combat":10},"temporary_health":0,"special":"Your second Close Combat attack each round ignores the normal -10% multiple-attack penalty."}};
const SPECIALTIES = {"":{"name":"None","tagline":"Choose an Agent Specialty","skills":{},"movement":0,"contacts":0,"health":0,"contact_types":[],"special":"No Specialty selected."},"investigator":{"name":"Investigator","tagline":"The truth has a habit of hiding behind lies.","skills":{"perception":5,"investigation":5,"deception":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Detective","Professor","Informant"],"special":"Once per mission, ask the Director one focused investigative question. The answer must be truthful, though it may be incomplete."},"infiltrator":{"name":"Infiltrator","tagline":"Some doors were never meant to open.","skills":{"stealth":5,"acrobatics":5,"sleight_of_hand":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Spy","Fence","Safehouse Keeper"],"special":"After using a Move action, you may immediately attempt to Hide when suitable cover or concealment is available."},"vanguard":{"name":"Vanguard","tagline":"When the plan breaks, the Vanguard holds.","skills":{"athletics":5,"survival":5,"intimidation":5,"close_combat":5,"ranged_combat":5},"movement":5,"contacts":1,"health":5,"contact_types":["Officer","Veteran","Quartermaster"],"special":"Hardened Operative: +5 Maximum Health."},"scholar":{"name":"Scholar","tagline":"Every ruin is a library with sharper shelves.","skills":{"investigation":5,"arcana":5,"engineering":5,"technology":5,"medicine":5},"movement":5,"contacts":1,"health":0,"contact_types":["Archivist","Researcher","Librarian"],"special":"After one minute of examination, identify the broad purpose, origin, or danger of an unknown artifact or arcane device."},"pathfinder":{"name":"Pathfinder","tagline":"The Wilds are only unmapped until you survive them.","skills":{"survival":5,"perception":5,"athletics":5,"animal_handling":5,"ranged_combat":5},"movement":5,"contacts":1,"health":0,"contact_types":["Hunter","Scout","Guide"],"special":"Ordinary difficult terrain does not reduce your movement."},"warden":{"name":"Warden","tagline":"Stand behind me.","skills":{"athletics":5,"close_combat":5,"intimidation":5,"survival":5,"ranged_combat":5},"movement":5,"contacts":1,"health":5,"contact_types":["Veteran Commander","Master Smith","Expedition Marshal"],"special":"Hold the Line: Once each round after a successful adjacent Close Combat hit, force the target to remain engaged until its next turn unless it succeeds on an Athletics test."}};

const PROTOCOLS_RANK_2 = {
  glimpse_future:{
    name:"Glimpse the Future II",
    attributes:{},
    skills:{},
    temporary_health:0,
    special:"Reaction: choose Forewarned to impose -10% on one attack against you, or Exploit the Opening to gain +10% on your next attack."
  },
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



const WEAPON_DAMAGE_DATA = Object.freeze({
  unarmed:Object.freeze({name:"Unarmed Strike",damage:"1d4",type:"Impact",traits:"Natural"}),
  knife:Object.freeze({name:"Knife",damage:"1d4+1",type:"Piercing",traits:"Concealable"}),
  sword:Object.freeze({name:"Sword",damage:"1d8",type:"Slashing",traits:"Versatile"}),
  war_hammer:Object.freeze({name:"War Hammer",damage:"1d8+1",type:"Impact",traits:"Armor Breaking"}),
  service_pistol:Object.freeze({name:"Service Pistol",damage:"1d6+2",type:"Ballistic",traits:"Concealable"}),
  revolver:Object.freeze({name:"Revolver",damage:"1d8+1",type:"Ballistic",traits:"Loud"}),
  rifle:Object.freeze({name:"Rifle",damage:"1d10+1",type:"Ballistic",traits:"Two-Handed, Long Range"}),
  shotgun:Object.freeze({name:"Shotgun",damage:"2d6",type:"Ballistic",traits:"Two-Handed, Close Range"})
});

const ARMOR_DAMAGE_REDUCTION = Object.freeze({
  0:0,
  5:1,
  10:2,
  15:3
});

const RANK_DATA = {
  1:{arcaneRank:1,protocolPoints:3},
  2:{arcaneRank:2,protocolPoints:4}
};

const protocolPointLimit = rank => (RANK_DATA[rank] || RANK_DATA[1]).protocolPoints;
const arcaneRankFor = rank => (RANK_DATA[rank] || RANK_DATA[1]).arcaneRank;

const clampProtocolRank = (requested, arcaneRank) =>
  Math.max(0, Math.min(Math.trunc(numberValue(requested,0)), arcaneRank));

const protocolForSelectedRank = (key, selectedRank) => {
  if (!key || selectedRank <= 0) return PROTOCOLS[""];
  if (selectedRank >= 3 && PROTOCOLS_RANK_3[key]) return PROTOCOLS_RANK_3[key];
  if (selectedRank >= 2 && PROTOCOLS_RANK_2[key]) return PROTOCOLS_RANK_2[key];
  return PROTOCOLS[key] || PROTOCOLS[""];
};

const collectProtocolBudgetFields = () => [
  "rank",
  "protocol_slot_1","protocol_rank_1",
  "protocol_slot_2","protocol_rank_2",
  "protocol_slot_3","protocol_rank_3"
];

const calculatePrimaryProtocolBudget = values => {
  const rank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
  const arcaneRank = arcaneRankFor(rank);
  const maxPoints = protocolPointLimit(rank);
  let used = 0;
  const normalized = {};

  [1,2,3].forEach(slot => {
    const key = values[`protocol_slot_${slot}`] || "";
    const selectedRank = key ? clampProtocolRank(values[`protocol_rank_${slot}`], arcaneRank) : 0;
    normalized[`protocol_rank_${slot}`] = selectedRank;
    used += selectedRank;
  });

  return {
    rank,
    arcaneRank,
    maxPoints,
    used,
    remaining:maxPoints-used,
    normalized
  };
};

const refreshProtocolBudget = () => {
  getAttrs(collectProtocolBudgetFields(), values => {
    const budget = calculatePrimaryProtocolBudget(values);
    let warning = "";
    if (budget.used > budget.maxPoints) {
      warning = `Protocol loadout exceeds the ${budget.maxPoints}-point budget by ${budget.used-budget.maxPoints}.`;
    }
    setAttrs({
      arcane_rank:budget.arcaneRank,
      protocol_points_max:budget.maxPoints,
      protocol_points_used:budget.used,
      protocol_points_remaining:budget.remaining,
      protocol_budget_warning:warning,
      builder_protocol_points_used:budget.used,
      builder_protocol_points_available:budget.maxPoints,
      ...budget.normalized
    }, {silent:true});
  });
};

const refreshPrimaryProtocolCards = () => {
  const fields = [
    "rank",
    "protocol_slot_1","protocol_rank_1",
    "protocol_slot_2","protocol_rank_2",
    "protocol_slot_3","protocol_rank_3"
  ];
  getAttrs(fields, values => {
    const rank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
    const arcaneRank = arcaneRankFor(rank);
    const updates = {};
    [1,2,3].forEach(slot => {
      const key = values[`protocol_slot_${slot}`] || "";
      const selectedRank = key ? clampProtocolRank(values[`protocol_rank_${slot}`],arcaneRank) : 0;
      const protocol = protocolForSelectedRank(key,selectedRank);
      updates[`protocol_slot_${slot}_display`] = key && selectedRank > 0
        ? protocol.name
        : "No Protocol";
      updates[`protocol_slot_${slot}_summary`] = key && selectedRank > 0
        ? summarizeProtocol(protocol)
        : "No Protocol prepared.";
      updates[`protocol_rank_${slot}`] = selectedRank;
    });
    setAttrs(updates,{silent:true});
  });
};


const refreshAgentProtocolLoadoutSummary = () => {
  const fields = [
    "rank",
    "protocol_slot_1","protocol_rank_1",
    "protocol_slot_2","protocol_rank_2",
    "protocol_slot_3","protocol_rank_3"
  ];

  getSectionIDs("repeating_protocols", rowIds => {
    rowIds.forEach(rowId => {
      fields.push(`repeating_protocols_${rowId}_protocol_name`);
      fields.push(`repeating_protocols_${rowId}_protocol_rank`);
    });

    getAttrs(fields, values => {
      const agentRank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
      const arcaneRank = arcaneRankFor(agentRank);
      const loaded = [];

      const addProtocol = (key, requestedRank) => {
        const normalizedRequestedRank =
          key && (requestedRank === "" || requestedRank === undefined || requestedRank === null)
            ? 1
            : requestedRank;
        const selectedRank = key
          ? clampProtocolRank(normalizedRequestedRank,arcaneRank)
          : 0;
        if (!key || selectedRank <= 0) return;

        const protocol = protocolForSelectedRank(key,selectedRank);
        if (!protocol || !protocol.name || protocol.name === "None") return;

        loaded.push(protocol.name);
      };

      [1,2,3].forEach(slot => {
        addProtocol(
          values[`protocol_slot_${slot}`] || "",
          values[`protocol_rank_${slot}`]
        );
      });

      rowIds.forEach(rowId => {
        addProtocol(
          values[`repeating_protocols_${rowId}_protocol_name`] || "",
          values[`repeating_protocols_${rowId}_protocol_rank`]
        );
      });

      const fullText = loaded.length
        ? loaded.join(" • ")
        : "No Protocols loaded.";

      setAttrs({
        agent_protocol_loadout_text:fullText,
        agent_protocol_slot_1_text:loaded[0] || "",
        agent_protocol_slot_2_text:loaded[1] || "",
        agent_protocol_slot_3_text:loaded[2] || "",
        agent_protocol_extra_text:loaded.length > 3 ? loaded.slice(3).join(" • ") : ""
      }, {silent:true});
    });
  });
};



const formatProtocolBonusSummary = protocol => {
  const parts = [];
  Object.entries(protocol.attributes || {}).forEach(([key,value])=>{
    const label =
      key === "wisdom" ? "Agility" :
      key === "intelligence" ? "Awareness" :
      key === "charisma" ? "Presence" :
      key.charAt(0).toUpperCase()+key.slice(1);
    parts.push(`${label} +${value}`);
  });
  Object.entries(protocol.skills || {}).forEach(([key,value])=>{
    const label = key.split("_").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    parts.push(`${label} +${value}%`);
  });
  if (numberValue(protocol.temporary_health,0) > 0) {
    parts.push(`Temporary Health +${protocol.temporary_health}`);
  }
  return parts.length ? parts.join(" • ") : "No direct numeric bonuses.";
};

const refreshBuilderProtocolDetails = (callback=null) => {
  getAttrs([
    "rank",
    "protocol_slot_1","protocol_rank_1",
    "protocol_slot_2","protocol_rank_2",
    "protocol_slot_3","protocol_rank_3"
  ],values=>{
    const updates = {};
    const agentRank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
    const arcaneRank = arcaneRankFor(agentRank);

    [1,2,3].forEach(slot=>{
      const key = values[`protocol_slot_${slot}`] || "";
      const currentRank = Math.trunc(numberValue(values[`protocol_rank_${slot}`],0));
      const selectedRank = key
        ? clampProtocolRank(currentRank > 0 ? currentRank : 1,arcaneRank)
        : 0;
      const protocol = protocolForSelectedRank(key,selectedRank);

      // The Builder display mirrors the selected loadout Rank. It must never
      // force an established Rank back to 1 when the sheet refreshes.
      updates[`builder_protocol_rank_${slot}`] = selectedRank;

      // Initialize a newly selected Protocol at Rank 1, or clear an empty slot.
      // Existing valid Rank selections are preserved.
      if ((!key && currentRank !== 0) || (key && currentRank <= 0)) {
        updates[`protocol_rank_${slot}`] = selectedRank;
      }

      updates[`builder_protocol_${slot}_name`] =
        key && protocol.name ? protocol.name : "No Protocol Selected";
      updates[`builder_protocol_${slot}_bonuses`] =
        key ? formatProtocolBonusSummary(protocol) : "Choose a Protocol to see its bonuses.";
      updates[`builder_protocol_${slot}_description`] =
        key && protocol.special ? protocol.special : "No Protocol selected.";
    });
    setAttrs(updates,{silent:true},()=>{
      if (callback) callback();
    });
  });
};

const refreshBuilderProtocolCounter = (callback=null) => {
  getAttrs([
    "protocol_slot_1",
    "protocol_slot_2",
    "protocol_slot_3"
  ], values => {
    const used = [1,2,3].reduce(
      (total,slot)=>total + (values[`protocol_slot_${slot}`] ? 1 : 0),
      0
    );
    setAttrs({
      builder_protocol_points_used:used,
      builder_protocol_points_available:3
    },{silent:true},()=>{
      if (callback) callback();
    });
  });
};

const refreshAllProtocolState = () => {
  refreshProtocolBudget();
  refreshPrimaryProtocolCards();
  refreshRepeatingProtocolRows();
  refreshAgentProtocolLoadoutSummary();
};

on("change:rank change:protocol_slot_1 change:protocol_rank_1 change:protocol_slot_2 change:protocol_rank_2 change:protocol_slot_3 change:protocol_rank_3", ()=>{
  refreshBuilderProtocolDetails(()=>{
    refreshBuilderProtocolCounter(()=>{
      refreshAllProtocolState();
    });
  });
});
on("sheet:opened", ()=>{
  refreshBuilderProtocolDetails(()=>{
    refreshBuilderProtocolCounter(()=>{
      refreshAllProtocolState();
    });
  });
});
on("sheet:opened", refreshAgentProtocolLoadoutSummary);
on("sheet:opened", refreshPrimaryProtocolCards);

const PROTOCOLS_RANK_3 = {
  glimpse_future:{
    name:"Glimpse the Future III",
    attributes:{},
    skills:{},
    temporary_health:0,
    special:"Reaction: choose Forewarned to impose -15% on one attack against you, or Exploit the Opening to gain +15% on your next attack."
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
  athletics: ["athletics", "strength"],
  acrobatics: ["acrobatics", "wisdom"],
  stealth: ["stealth", "wisdom"],
  investigation: ["investigation", "intelligence"],
  arcana: ["arcana", "intelligence"],
  engineering: ["engineering", "dexterity"],
  medicine: ["medicine", "dexterity"],
  survival: ["survival", "endurance"],
  perception: ["skill_perception", "intelligence"],
  insight: ["insight", "intelligence"],
  persuasion: ["persuasion", "charisma"],
  deception: ["deception", "charisma"],
  intimidation: ["intimidation", "charisma"],
  sleight_of_hand: ["sleight_of_hand", "dexterity"],
  technology: ["technology", "dexterity"],
  animal_handling: ["animal_handling", "charisma"],
  close_combat: ["close_combat", "strength"],
  ranged_combat: ["ranged_combat", "dexterity"]
};

const CONDITION_KEYS = ["blinded","charmed","deafened","exhausted","frightened","incapacitated","poisoned","restrained","shocked","stunned"];
const CONDITION_LABELS = {
  blinded:"Blinded: -10% Perception, -15% Close Combat, and -15% Ranged Combat.",
  charmed:"Charmed: -10% Insight, Persuasion, Deception, and Intimidation; cannot willingly attack the charmer.",
  deafened:"Deafened: -10% Perception and -10 to hearing-based Initiative.",
  exhausted:"Exhausted: -10% to all Attribute and Skill tests and -10 feet Movement.",
  frightened:"Frightened: -10% to all Attribute and Skill tests while the source is present.",
  incapacitated:"Incapacitated: 0 Actions and no Reaction.",
  poisoned:"Poisoned: -10% to all Attribute and Skill tests.",
  restrained:"Restrained: Movement 0; -10% Dexterity-based Skills, Close Combat, and Ranged Combat.",
  shocked:"Shocked: -10% Awareness- and Agility-based tests and no Reaction.",
  stunned:"Stunned: 0 Actions, no Reaction, and -20% to all Attribute and Skill tests."
};

const CONDITION_RULES = Object.freeze({
  blinded:Object.freeze({skillPenalties:Object.freeze({perception:-10,close_combat:-15,ranged_combat:-15})}),
  charmed:Object.freeze({skillPenalties:Object.freeze({insight:-10,persuasion:-10,deception:-10,intimidation:-10})}),
  deafened:Object.freeze({skillPenalties:Object.freeze({perception:-10}),initiative:-10}),
  exhausted:Object.freeze({allTests:-10,movement:-10}),
  frightened:Object.freeze({allTests:-10}),
  incapacitated:Object.freeze({actions:0,reaction:0}),
  poisoned:Object.freeze({allTests:-10}),
  restrained:Object.freeze({
    attributeSkills:Object.freeze({dexterity:-10}),
    skillPenalties:Object.freeze({close_combat:-10,ranged_combat:-10}),
    movementSet:0
  }),
  shocked:Object.freeze({
    attributeTests:Object.freeze({intelligence:-10,wisdom:-10}),
    reaction:0
  }),
  stunned:Object.freeze({allTests:-20,actions:0,reaction:0})
});


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

const getActiveConditions = values =>
  CONDITION_KEYS.filter(key => String(values[`condition_${key}`] || "0") === "1");

const conditionPenaltyForAttribute = (attribute, active) => {
  let penalty = 0;
  active.forEach(condition => {
    const rule = CONDITION_RULES[condition] || {};
    penalty += numberValue(rule.allTests,0);
    penalty += numberValue((rule.attributeTests || {})[attribute],0);
  });
  return penalty;
};

const conditionPenaltyForSkill = (skill, attribute, active) => {
  let penalty = 0;
  active.forEach(condition => {
    const rule = CONDITION_RULES[condition] || {};
    // Broad and Attribute-based penalties already flow through the linked Attribute total.
    penalty += numberValue((rule.skillPenalties || {})[skill],0);
    penalty += numberValue((rule.attributeSkills || {})[attribute],0);
  });
  return penalty;
};

const conditionMovement = (baseMovement, active) => {
  let movement = baseMovement;
  active.forEach(condition => {
    const rule = CONDITION_RULES[condition] || {};
    if (Object.prototype.hasOwnProperty.call(rule,"movementSet")) movement = numberValue(rule.movementSet,movement);
    else movement += numberValue(rule.movement,0);
  });
  return Math.max(0,movement);
};

const conditionInitiativePenalty = active =>
  active.reduce((total,condition)=>total + numberValue((CONDITION_RULES[condition] || {}).initiative,0),0);

const conditionRestrictions = active => ({
  actionsLocked:active.some(condition => (CONDITION_RULES[condition] || {}).actions === 0),
  reactionLocked:active.some(condition => (CONDITION_RULES[condition] || {}).reaction === 0)
});

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

const BASE_ATTRIBUTE_VALUE = 5;
const ATTRIBUTE_POINT_BUDGET = 10;
const MAX_PLAYER_ATTRIBUTE = 15;
const BASE_SKILL_VALUE = 5;
const SKILL_POINT_BUDGET = 30;
const MAX_SKILL_POINTS_PER_SKILL = 10;

const attributePlayerValue = (baseValue, heritageValue) =>
  Math.max(BASE_ATTRIBUTE_VALUE, numberValue(baseValue,BASE_ATTRIBUTE_VALUE) - numberValue(heritageValue,0));

const refreshCreationBudgets = (callback=null) => {
  const attributeFields = ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]);
  const skillFields = [...new Set(Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]))];
  getAttrs([...attributeFields,...skillFields], values => {
    const attributeUsed = ATTRIBUTE_KEYS.reduce((sum,key)=>{
      const playerValue = attributePlayerValue(
        values[`${key}_base`],
        values[`${key}_heritage_applied`]
      );
      return sum + Math.max(0,playerValue-BASE_ATTRIBUTE_VALUE);
    },0);

    const skillUsed = skillFields.reduce((sum,field)=>
      sum + Math.max(
        0,
        numberValue(values[field],BASE_SKILL_VALUE)-BASE_SKILL_VALUE
      ),0);

    const attributeRemaining = Math.max(0,ATTRIBUTE_POINT_BUDGET-attributeUsed);
    const skillRemaining = Math.max(0,SKILL_POINT_BUDGET-skillUsed);

    setAttrs({
      attribute_points_used:attributeUsed,
      attribute_points_remaining:`${attributeRemaining} remaining`,
      builder_attribute_points_remaining:attributeRemaining,
      skill_points_used:skillUsed,
      skill_points_remaining:`${skillRemaining} remaining`,
      builder_skill_points_remaining:skillRemaining
    },{silent:true},()=>{
      if (callback) callback();
    });
  });
};

const enforceAttributeBudget = eventInfo => {
  const source = eventInfo && eventInfo.sourceAttribute ? eventInfo.sourceAttribute : "";
  const match = source.match(/^([a-z_]+)_base$/);
  if (!match || !ATTRIBUTE_KEYS.includes(match[1])) return;
  const changedKey = match[1];
  const fields = ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]);
  getAttrs(fields, values => {
    const heritage = numberValue(values[`${changedKey}_heritage_applied`],0);
    const othersUsed = ATTRIBUTE_KEYS.filter(k=>k!==changedKey).reduce((sum,key)=>{
      const playerValue = attributePlayerValue(values[`${key}_base`],values[`${key}_heritage_applied`]);
      return sum + Math.max(0,playerValue-BASE_ATTRIBUTE_VALUE);
    },0);
    const allowedPoints = Math.max(0,ATTRIBUTE_POINT_BUDGET-othersUsed);
    const requestedPlayer = Math.max(BASE_ATTRIBUTE_VALUE,
      numberValue(values[`${changedKey}_base`],BASE_ATTRIBUTE_VALUE)-heritage);
    const clampedPlayer = Math.min(MAX_PLAYER_ATTRIBUTE,BASE_ATTRIBUTE_VALUE+allowedPoints,requestedPlayer);
    const corrected = clampedPlayer + heritage;
    setAttrs({[`${changedKey}_base`]:corrected},{silent:true},()=>{
      recalculateCharacter(()=>{
        refreshBuilderState();
      });
    });
  });
};

const enforceSkillBudget = eventInfo => {
  const source = eventInfo && eventInfo.sourceAttribute ? eventInfo.sourceAttribute : "";
  const skillEntry = Object.entries(SKILL_ATTRIBUTE_MAP).find(([,value])=>value[0]===source);
  if (!skillEntry) return;
  const changedField = source;
  const skillFields = Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]);
  getAttrs(skillFields, values => {
    const othersUsed = skillFields.filter(field=>field!==changedField).reduce((sum,field)=>
      sum + Math.max(0,numberValue(values[field],BASE_SKILL_VALUE)-BASE_SKILL_VALUE),0);
    const allowedPoints = Math.max(0,SKILL_POINT_BUDGET-othersUsed);
    const requested = Math.max(BASE_SKILL_VALUE,numberValue(values[changedField],BASE_SKILL_VALUE));
    const corrected = Math.min(
      BASE_SKILL_VALUE+MAX_SKILL_POINTS_PER_SKILL,
      BASE_SKILL_VALUE+allowedPoints,
      requested
    );
    setAttrs({[changedField]:corrected},{silent:true},()=>{
      recalculateCharacter();
      refreshCreationBudgets();
    });
  });
};


const refreshBuilderDisplay = (callback=null) => {
  const fields = [
    ...ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`,`${k}_bonus`,k]),
    ...Object.entries(SKILL_ATTRIBUTE_MAP).flatMap(([skill,[baseField]])=>[baseField,`${skill}_total`]),
    "builder_attribute_points_remaining","builder_skill_points_remaining"
  ];
  getAttrs([...new Set(fields)], values => {
    const updates = {};
    ATTRIBUTE_KEYS.forEach(key=>{
      const heritage = numberValue(values[`${key}_heritage_applied`],0);
      const playerValue = Math.max(
        BASE_ATTRIBUTE_VALUE,
        numberValue(values[`${key}_base`],BASE_ATTRIBUTE_VALUE)-heritage
      );
      const bonus = heritage + numberValue(values[`${key}_bonus`],0);
      updates[`builder_${key}_display`] = playerValue;
      updates[`builder_${key}_bonus_text`] = `+${bonus} bonus`;
    });
    Object.entries(SKILL_ATTRIBUTE_MAP).forEach(([skill,[baseField]])=>{
      updates[`builder_skill_${skill}_display`] = Math.max(
        BASE_SKILL_VALUE,
        numberValue(values[baseField],BASE_SKILL_VALUE)
      );
      updates[`builder_skill_${skill}_final_text`] =
        `Final ${numberValue(values[`${skill}_total`],0)}%`;
    });
    setAttrs(updates,{silent:true},()=>{
      if (callback) callback();
    });
  });
};

const refreshBuilderState = () => {
  refreshCreationBudgets(()=>{
    refreshBuilderDisplay(()=>{
      refreshBuilderProtocolDetails(()=>{
        refreshBuilderProtocolCounter(()=>{
          refreshBuilderReviewIdentity();
          validateCharacterBuilder();
        });
      });
    });
  });
};

const adjustBuilderAttribute = (key,delta) => {
  const fields = ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]);
  getAttrs(fields, values => {
    const heritage = numberValue(values[`${key}_heritage_applied`],0);
    const currentPlayer = Math.max(
      BASE_ATTRIBUTE_VALUE,
      numberValue(values[`${key}_base`],BASE_ATTRIBUTE_VALUE)-heritage
    );

    const used = ATTRIBUTE_KEYS.reduce((sum,k)=>{
      const playerValue = Math.max(
        BASE_ATTRIBUTE_VALUE,
        numberValue(values[`${k}_base`],BASE_ATTRIBUTE_VALUE) -
          numberValue(values[`${k}_heritage_applied`],0)
      );
      return sum + Math.max(0,playerValue-BASE_ATTRIBUTE_VALUE);
    },0);

    if (delta > 0 && (used >= ATTRIBUTE_POINT_BUDGET || currentPlayer >= MAX_PLAYER_ATTRIBUTE)) {
      return postNotice(
        "Attribute Points",
        used >= ATTRIBUTE_POINT_BUDGET
          ? "No Attribute points remain."
          : "That Attribute is already at the starting maximum.",
        "Builder"
      );
    }
    if (delta < 0 && currentPlayer <= BASE_ATTRIBUTE_VALUE) return;

    const nextPlayer = Math.max(
      BASE_ATTRIBUTE_VALUE,
      Math.min(MAX_PLAYER_ATTRIBUTE,currentPlayer+delta)
    );

    const nextUsed = Math.max(0,used+delta);
    const nextRemaining = Math.max(0,ATTRIBUTE_POINT_BUDGET-nextUsed);

    setAttrs({
      [`${key}_base`]:nextPlayer+heritage,
      attribute_points_used:nextUsed,
      attribute_points_remaining:`${nextRemaining} remaining`,
      builder_attribute_points_remaining:nextRemaining,
      [`builder_${key}_display`]:nextPlayer
    },{silent:true},()=>{
      recalculateCharacter(()=>{
        refreshBuilderState();
      });
    });
  });
};

const adjustBuilderSkill = (skill,delta) => {
  const mapEntry = SKILL_ATTRIBUTE_MAP[skill];
  if (!mapEntry) return;

  const baseField = mapEntry[0];
  const skillFields = [...new Set(Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]))];

  getAttrs(skillFields, values => {
    const current = Math.max(
      BASE_SKILL_VALUE,
      numberValue(values[baseField],BASE_SKILL_VALUE)
    );

    const used = skillFields.reduce((sum,field)=>
      sum + Math.max(
        0,
        numberValue(values[field],BASE_SKILL_VALUE)-BASE_SKILL_VALUE
      ),0);

    const spentInSkill = Math.max(0,current-BASE_SKILL_VALUE);

    if (delta > 0 && used >= SKILL_POINT_BUDGET) {
      return postNotice("Skill Points","No Skill points remain.","Builder");
    }
    if (delta > 0 && spentInSkill >= MAX_SKILL_POINTS_PER_SKILL) {
      return postNotice(
        "Skill Limit",
        `A starting Agent may spend no more than ${MAX_SKILL_POINTS_PER_SKILL} points in one Skill.`,
        "Builder"
      );
    }
    if (delta < 0 && current <= BASE_SKILL_VALUE) return;

    const next = Math.max(
      BASE_SKILL_VALUE,
      Math.min(BASE_SKILL_VALUE+MAX_SKILL_POINTS_PER_SKILL,current+delta)
    );

    const nextUsed = Math.max(0,used+delta);
    const nextRemaining = Math.max(0,SKILL_POINT_BUDGET-nextUsed);

    setAttrs({
      [baseField]:next,
      skill_points_used:nextUsed,
      skill_points_remaining:`${nextRemaining} remaining`,
      builder_skill_points_remaining:nextRemaining,
      [`builder_skill_${skill}_display`]:next
    },{silent:true},()=>{
      recalculateCharacter(()=>{
        refreshBuilderState();
      });
    });
  });
};


on("clicked:builder_strength_plus",()=>adjustBuilderAttribute("strength",1));
on("clicked:builder_strength_minus",()=>adjustBuilderAttribute("strength",-1));
on("clicked:builder_wisdom_plus",()=>adjustBuilderAttribute("wisdom",1));
on("clicked:builder_wisdom_minus",()=>adjustBuilderAttribute("wisdom",-1));
on("clicked:builder_dexterity_plus",()=>adjustBuilderAttribute("dexterity",1));
on("clicked:builder_dexterity_minus",()=>adjustBuilderAttribute("dexterity",-1));
on("clicked:builder_endurance_plus",()=>adjustBuilderAttribute("endurance",1));
on("clicked:builder_endurance_minus",()=>adjustBuilderAttribute("endurance",-1));
on("clicked:builder_intelligence_plus",()=>adjustBuilderAttribute("intelligence",1));
on("clicked:builder_intelligence_minus",()=>adjustBuilderAttribute("intelligence",-1));
on("clicked:builder_charisma_plus",()=>adjustBuilderAttribute("charisma",1));
on("clicked:builder_charisma_minus",()=>adjustBuilderAttribute("charisma",-1));

on("clicked:builder_skill_athletics_plus",()=>adjustBuilderSkill("athletics",1));
on("clicked:builder_skill_athletics_minus",()=>adjustBuilderSkill("athletics",-1));
on("clicked:builder_skill_acrobatics_plus",()=>adjustBuilderSkill("acrobatics",1));
on("clicked:builder_skill_acrobatics_minus",()=>adjustBuilderSkill("acrobatics",-1));
on("clicked:builder_skill_stealth_plus",()=>adjustBuilderSkill("stealth",1));
on("clicked:builder_skill_stealth_minus",()=>adjustBuilderSkill("stealth",-1));
on("clicked:builder_skill_investigation_plus",()=>adjustBuilderSkill("investigation",1));
on("clicked:builder_skill_investigation_minus",()=>adjustBuilderSkill("investigation",-1));
on("clicked:builder_skill_arcana_plus",()=>adjustBuilderSkill("arcana",1));
on("clicked:builder_skill_arcana_minus",()=>adjustBuilderSkill("arcana",-1));
on("clicked:builder_skill_engineering_plus",()=>adjustBuilderSkill("engineering",1));
on("clicked:builder_skill_engineering_minus",()=>adjustBuilderSkill("engineering",-1));
on("clicked:builder_skill_medicine_plus",()=>adjustBuilderSkill("medicine",1));
on("clicked:builder_skill_medicine_minus",()=>adjustBuilderSkill("medicine",-1));
on("clicked:builder_skill_survival_plus",()=>adjustBuilderSkill("survival",1));
on("clicked:builder_skill_survival_minus",()=>adjustBuilderSkill("survival",-1));
on("clicked:builder_skill_perception_plus",()=>adjustBuilderSkill("perception",1));
on("clicked:builder_skill_perception_minus",()=>adjustBuilderSkill("perception",-1));
on("clicked:builder_skill_insight_plus",()=>adjustBuilderSkill("insight",1));
on("clicked:builder_skill_insight_minus",()=>adjustBuilderSkill("insight",-1));
on("clicked:builder_skill_persuasion_plus",()=>adjustBuilderSkill("persuasion",1));
on("clicked:builder_skill_persuasion_minus",()=>adjustBuilderSkill("persuasion",-1));
on("clicked:builder_skill_deception_plus",()=>adjustBuilderSkill("deception",1));
on("clicked:builder_skill_deception_minus",()=>adjustBuilderSkill("deception",-1));
on("clicked:builder_skill_intimidation_plus",()=>adjustBuilderSkill("intimidation",1));
on("clicked:builder_skill_intimidation_minus",()=>adjustBuilderSkill("intimidation",-1));
on("clicked:builder_skill_sleight_of_hand_plus",()=>adjustBuilderSkill("sleight_of_hand",1));
on("clicked:builder_skill_sleight_of_hand_minus",()=>adjustBuilderSkill("sleight_of_hand",-1));
on("clicked:builder_skill_technology_plus",()=>adjustBuilderSkill("technology",1));
on("clicked:builder_skill_technology_minus",()=>adjustBuilderSkill("technology",-1));
on("clicked:builder_skill_animal_handling_plus",()=>adjustBuilderSkill("animal_handling",1));
on("clicked:builder_skill_animal_handling_minus",()=>adjustBuilderSkill("animal_handling",-1));
on("clicked:builder_skill_close_combat_plus",()=>adjustBuilderSkill("close_combat",1));
on("clicked:builder_skill_close_combat_minus",()=>adjustBuilderSkill("close_combat",-1));
on("clicked:builder_skill_ranged_combat_plus",()=>adjustBuilderSkill("ranged_combat",1));
on("clicked:builder_skill_ranged_combat_minus",()=>adjustBuilderSkill("ranged_combat",-1));




const refreshBuilderReviewIdentity = () => {
  getAttrs(["heritage","heritage_mirror","specialty"],values=>{
    const heritageKey = values.heritage_mirror || values.heritage || "";
    const specialtyKey = values.specialty || "";
    const heritage = HERITAGES[heritageKey] || HERITAGES[""];
    const specialty = SPECIALTIES[specialtyKey] || SPECIALTIES[""];

    setAttrs({
      builder_review_heritage:
        heritageKey && heritage && heritage.name
          ? heritage.name
          : "No Heritage",
      builder_review_specialty:
        specialtyKey && specialty && specialty.name
          ? specialty.name
          : "No Specialty"
    },{silent:true});
  });
};

const BUILDER_STEP_MESSAGES = {
  1:"Choose the Agent's Heritage.",
  2:"Choose the Agent's Specialty.",
  3:"Spend all available Protocol points.",
  4:"Spend all 10 Attribute points.",
  5:"Spend all 30 Skill points.",
  6:"Review the completed Agent and finish character creation."
};

const setBuilderStep = (step,message=null) => {
  const safeStep = Math.max(1,Math.min(6,Math.trunc(numberValue(step,1))));
  setAttrs({
    builder_step:safeStep,
    builder_wizard_message:message || BUILDER_STEP_MESSAGES[safeStep]
  },{silent:true},()=>{
    if (safeStep === 6) refreshBuilderReviewIdentity();
  });
};

const validateBuilderStep = (step,callback) => {
  const fields = [
    "heritage","heritage_mirror","specialty",
    "protocol_slot_1","protocol_slot_2","protocol_slot_3",
    "protocol_rank_1","protocol_rank_2","protocol_rank_3",
    "builder_protocol_points_used","builder_protocol_points_available",
    "attribute_points_used","skill_points_used"
  ];
  getAttrs(fields,values=>{
    let valid = true;
    let message = "";
    const heritage = values.heritage_mirror || values.heritage || "";
    const protocolUsed = Math.max(0,Math.trunc(numberValue(values.builder_protocol_points_used,0)));
    const protocolAvailable = Math.max(0,Math.trunc(numberValue(values.builder_protocol_points_available,3)));
    const attributeUsed = Math.max(0,Math.trunc(numberValue(values.attribute_points_used,0)));
    const skillUsed = Math.max(0,Math.trunc(numberValue(values.skill_points_used,0)));

    if (step === 1 && !heritage) {
      valid = false;
      message = "Choose a Heritage before continuing.";
    } else if (step === 2 && !values.specialty) {
      valid = false;
      message = "Choose a Specialty before continuing.";
    } else if (step === 3) {
      const selectedProtocols = [1,2,3].filter(slot =>
        Boolean(values[`protocol_slot_${slot}`])
      );
      const allRankOne = [1,2,3].every(slot =>
        values[`protocol_slot_${slot}`] &&
        Math.trunc(numberValue(values[`protocol_rank_${slot}`],0)) === 1
      );
      if (selectedProtocols.length !== 3 || !allRankOne || protocolUsed !== 3) {
        valid = false;
        message = `Choose three Rank 1 Protocols before continuing (${selectedProtocols.length}/3 selected).`;
      }
    } else if (step === 4 && attributeUsed !== ATTRIBUTE_POINT_BUDGET) {
      valid = false;
      message = `Spend all Attribute points before continuing (${attributeUsed}/${ATTRIBUTE_POINT_BUDGET}).`;
    } else if (step === 5 && skillUsed !== SKILL_POINT_BUDGET) {
      valid = false;
      message = `Spend all Skill points before continuing (${skillUsed}/${SKILL_POINT_BUDGET}).`;
    }

    if (!valid) {
      setAttrs({builder_wizard_message:message},{silent:true});
      postNotice("Builder Step Incomplete",message,"Builder");
    }
    if (callback) callback(valid,message);
  });
};

on("clicked:wizard_next",()=>{
  getAttrs(["builder_step"],values=>{
    const current = Math.max(1,Math.min(6,Math.trunc(numberValue(values.builder_step,1))));
    validateBuilderStep(current,valid=>{
      if (valid) setBuilderStep(Math.min(6,current+1));
    });
  });
});

on("clicked:wizard_back",()=>{
  getAttrs(["builder_step"],values=>{
    const current = Math.max(1,Math.min(6,Math.trunc(numberValue(values.builder_step,1))));
    setBuilderStep(Math.max(1,current-1));
  });
});

const goToBuilderStep = target => {
  getAttrs(["builder_step"],values=>{
    const current = Math.max(1,Math.min(6,Math.trunc(numberValue(values.builder_step,1))));
    if (target <= current) return setBuilderStep(target);
    const validateRange = step => {
      if (step >= target) return setBuilderStep(target);
      validateBuilderStep(step,valid=>{
        if (valid) validateRange(step+1);
      });
    };
    validateRange(current);
  });
};

on("change:heritage change:heritage_mirror change:specialty",refreshBuilderReviewIdentity);
on("sheet:opened",refreshBuilderReviewIdentity);

on("clicked:wizard_go_1",()=>goToBuilderStep(1));
on("clicked:wizard_go_2",()=>goToBuilderStep(2));
on("clicked:wizard_go_3",()=>goToBuilderStep(3));
on("clicked:wizard_go_4",()=>goToBuilderStep(4));
on("clicked:wizard_go_5",()=>goToBuilderStep(5));
on("clicked:wizard_go_6",()=>goToBuilderStep(6));

const validateCharacterBuilder = (callback=null) => {
  const fields = [
    "heritage_mirror","heritage","specialty",
    "protocol_points_used","protocol_points_available",
    "attribute_points_used","skill_points_used",
    ...ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]),
    ...Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0])
  ];

  getAttrs(fields, values => {
    const issues = [];
    const heritageKey = values.heritage_mirror || values.heritage || "";

    if (!heritageKey) issues.push("Choose a Heritage.");
    if (!values.specialty) issues.push("Choose a Specialty.");

    const protocolUsed = Math.max(0,Math.trunc(numberValue(values.protocol_points_used,0)));
    const protocolAvailable = Math.max(0,Math.trunc(numberValue(values.protocol_points_available,3)));
    if (protocolUsed !== protocolAvailable) {
      issues.push(`Spend all Protocol points (${protocolUsed}/${protocolAvailable}).`);
    }

    const attributeUsed = Math.max(0,Math.trunc(numberValue(values.attribute_points_used,0)));
    if (attributeUsed !== ATTRIBUTE_POINT_BUDGET) {
      issues.push(`Spend all Attribute points (${attributeUsed}/${ATTRIBUTE_POINT_BUDGET}).`);
    }

    const skillUsed = Math.max(0,Math.trunc(numberValue(values.skill_points_used,0)));
    if (skillUsed !== SKILL_POINT_BUDGET) {
      issues.push(`Spend all Skill points (${skillUsed}/${SKILL_POINT_BUDGET}).`);
    }

    ATTRIBUTE_KEYS.forEach(key => {
      const heritage = numberValue(values[`${key}_heritage_applied`],0);
      const playerValue = Math.max(
        BASE_ATTRIBUTE_VALUE,
        numberValue(values[`${key}_base`],BASE_ATTRIBUTE_VALUE)-heritage
      );
      const label =
        key === "wisdom" ? "Agility" :
        key === "intelligence" ? "Awareness" :
        key === "charisma" ? "Presence" :
        key.charAt(0).toUpperCase()+key.slice(1);
      if (playerValue < BASE_ATTRIBUTE_VALUE) issues.push(`${label} is below ${BASE_ATTRIBUTE_VALUE}.`);
      if (playerValue > MAX_PLAYER_ATTRIBUTE) issues.push(`${label} exceeds ${MAX_PLAYER_ATTRIBUTE} before bonuses.`);
    });

    Object.entries(SKILL_ATTRIBUTE_MAP).forEach(([skill,[field]]) => {
      const baseValue = numberValue(values[field],BASE_SKILL_VALUE);
      const label = skill.replace(/_/g," ");
      if (baseValue < BASE_SKILL_VALUE) {
        issues.push(`${label} is below ${BASE_SKILL_VALUE}%.`);
      }
      if (baseValue-BASE_SKILL_VALUE > MAX_SKILL_POINTS_PER_SKILL) {
        issues.push(`${label} has more than ${MAX_SKILL_POINTS_PER_SKILL} discretionary points.`);
      }
    });

    const valid = issues.length === 0;
    const message = valid
      ? "Character creation is complete and ready for play."
      : issues.join(" ");

    setAttrs({
      builder_validation_state:valid ? "Ready" : "Incomplete",
      builder_validation_message:message
    },{silent:true},()=>{
      if (callback) callback(valid,issues);
    });
  });
};

on("clicked:validate_character",()=>validateCharacterBuilder((valid,issues)=>{
  postNotice(
    valid ? "Character Ready" : "Character Incomplete",
    valid ? "All Builder requirements are complete." : issues.join(" "),
    "Builder"
  );
}));

on("clicked:finish_character",()=>validateCharacterBuilder((valid,issues)=>{
  if (!valid) return postNotice("Character Incomplete",issues.join(" "),"Builder");
  setAttrs({
    character_creation_complete:1,
    builder_validation_state:"Complete",
    builder_validation_message:"Character creation complete. The Agent is ready for play.",
    sheet_tab:"agent",
    builder_step:6
  },{},()=>postNotice("Character Complete","The Agent is ready for play.","Builder"));
}));

on("clicked:reopen_character_builder",()=>{
  setAttrs({
    character_creation_complete:0,
    builder_validation_state:"Editing",
    builder_validation_message:"Builder reopened. Review or adjust the Agent.",
    sheet_tab:"builder",
    builder_step:1,
    builder_wizard_message:BUILDER_STEP_MESSAGES[1]
  });
});

const migrateCharacterCreationState = () => {
  getAttrs(["character_creation_complete","voe_sheet_version","builder_step"],values=>{
    const state = values.character_creation_complete;
    const step = Math.max(1,Math.min(6,Math.trunc(numberValue(values.builder_step,1))));
    if (!values.builder_step) setAttrs({builder_step:step,builder_wizard_message:BUILDER_STEP_MESSAGES[step]},{silent:true});
    if (state === "0" || state === "1") {
      validateCharacterBuilder();
      return;
    }
    setAttrs({character_creation_complete:0},{silent:true},validateCharacterBuilder);
  });
};

const recalculateCharacter = (callback=null) => {
  const fields = ["heritage","heritage_mirror","specialty","secondary_specialty","specialty_rank","rank","rank_health_bonus","experience","experience_next","protocol_rank_1","protocol_rank_2","protocol_rank_3","protocol_slot_1","protocol_slot_2","protocol_slot_3", "armor_type", "carry_capacity_base", "health", "health_max", "temporary_health", "temporary_health_max", "temporary_health_applied","actions_current","reaction_available","condition_lock_active","condition_saved_actions","condition_saved_reaction", ...ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]), ...Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0]), ...CONDITION_KEYS.map(k=>`condition_${k}`)];
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
    const selectedProtocolRanks = [
      clampProtocolRank(values.protocol_rank_1,arcaneRankFor(agentRank)),
      clampProtocolRank(values.protocol_rank_2,arcaneRankFor(agentRank)),
      clampProtocolRank(values.protocol_rank_3,arcaneRankFor(agentRank))
    ];
    const selectedProtocols = selectedProtocolKeys.map((k,index)=>protocolForSelectedRank(k,selectedProtocolRanks[index])).filter(p=>p && p.name!=="None");
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
      protocol_slot_1_display: values.protocol_slot_1 && selectedProtocolRanks[0] > 0 ? `${protocolForSelectedRank(values.protocol_slot_1,selectedProtocolRanks[0]).name} ${selectedProtocolRanks[0] >= 2 ? "II" : "I"}` : "No Protocol",
      protocol_slot_1_summary: values.protocol_slot_1 && selectedProtocolRanks[0] > 0 ? summarizeProtocol(protocolForSelectedRank(values.protocol_slot_1,selectedProtocolRanks[0])) : "No Protocol prepared.",
      protocol_slot_2_display: values.protocol_slot_2 && selectedProtocolRanks[1] > 0 ? `${protocolForSelectedRank(values.protocol_slot_2,selectedProtocolRanks[1]).name} ${selectedProtocolRanks[1] >= 2 ? "II" : "I"}` : "No Protocol",
      protocol_slot_2_summary: values.protocol_slot_2 && selectedProtocolRanks[1] > 0 ? summarizeProtocol(protocolForSelectedRank(values.protocol_slot_2,selectedProtocolRanks[1])) : "No Protocol prepared.",
      protocol_slot_3_display: values.protocol_slot_3 && selectedProtocolRanks[2] > 0 ? `${protocolForSelectedRank(values.protocol_slot_3,selectedProtocolRanks[2]).name} ${selectedProtocolRanks[2] >= 2 ? "II" : "I"}` : "No Protocol",
      protocol_slot_3_summary: values.protocol_slot_3 && selectedProtocolRanks[2] > 0 ? summarizeProtocol(protocolForSelectedRank(values.protocol_slot_3,selectedProtocolRanks[2])) : "No Protocol prepared.",
      current_bonuses_summary: summarizeCurrentBonuses(heritage,specialty,selectedProtocols),
      heritage_armor_display: numberValue(heritage.armor,0) ? `Natural Light (-${heritage.armor}%)` : "None",
      condition_summary: activeConditions.length ? activeConditions.map(k=>CONDITION_LABELS[k]).join("\n") : "No active condition penalties."
    };
    ATTRIBUTE_KEYS.forEach(k=>{
      const currentBase = numberValue(values[`${k}_base`],BASE_ATTRIBUTE_VALUE);
      const previouslyAppliedHeritage = numberValue(values[`${k}_heritage_applied`],0);
      const newHeritageBase = numberValue((heritage.attributes || {})[k],0);
      const playerValue = Math.min(
        MAX_PLAYER_ATTRIBUTE,
        Math.max(BASE_ATTRIBUTE_VALUE,currentBase-previouslyAppliedHeritage)
      );
      const adjustedBase = playerValue + newHeritageBase;
      const protocolBonus = protocolAttrBonuses[k] || 0;
      updates[`${k}_base`] = adjustedBase;
      updates[`${k}_heritage_applied`] = newHeritageBase;
      updates[`${k}_bonus`] = protocolBonus;
      updates[k] = clampPercent(adjustedBase + protocolBonus);
    });
    // Movement is now grounded in Agility while preserving the familiar 35-foot
    // baseline for an Agent with Agility 5.
    updates.speed = conditionMovement(
      30 +
      numberValue(updates.wisdom, BASE_ATTRIBUTE_VALUE) +
      numberValue(specialty.movement,0) +
      numberValue(secondarySpecialty.movement,0),
      activeConditions
    );
    Object.entries(SKILL_ATTRIBUTE_MAP).forEach(([skill,[baseField,attribute]])=>{
      const base = Math.max(BASE_SKILL_VALUE,numberValue(values[baseField],BASE_SKILL_VALUE));
      const attrTotal = updates[attribute];
      const extra = skillBonuses[skill] || 0;
      const conditionModifier =
        conditionPenaltyForAttribute(attribute,activeConditions) +
        conditionPenaltyForSkill(skill,attribute,activeConditions);
      updates[`${skill}_bonus`] = extra;
      updates[`${skill}_condition`] = conditionModifier;
      updates[`${skill}_total`] = clampPercent(base + attrTotal + extra + conditionModifier);
    });
    const armorRaw = String(values.armor_type || "0");
    const wornArmor = numberValue(armorRaw.replace("natural_",""),0);
    const heritageArmor = numberValue(heritage.armor,0);
    updates.armor_penalty = -Math.max(wornArmor, heritageArmor);
    const currentXp = Math.max(0,numberValue(values.experience,0));
    const nextXp = Math.max(1,numberValue(values.experience_next,RANK_UP_COST));
    const currentRank = Math.max(1,Math.trunc(numberValue(values.rank,1)));
    const xpDisplayValue = currentRank >= 2 && currentXp === 0 ? nextXp : currentXp;
    const filledXp = Math.max(0,Math.min(10,Math.floor((xpDisplayValue/nextXp)*10)));
    updates.xp_progress_bar = "■".repeat(filledXp) + "□".repeat(10-filledXp);
    const healthCurrent = Math.max(0,numberValue(values.health,0));
    const healthMaximum = Math.max(1,numberValue(updates.health_max || values.health_max,1));
    const healthSteps = Math.max(0,Math.min(10,Math.round((healthCurrent/healthMaximum)*10)));
    updates.health_bar_text = "█".repeat(healthSteps) + "░".repeat(10-healthSteps);

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

    const restrictions = conditionRestrictions(activeConditions);
    const lockWasActive = String(values.condition_lock_active || "0") === "1";
    if (restrictions.actionsLocked || restrictions.reactionLocked) {
      if (!lockWasActive) {
        updates.condition_saved_actions = Math.max(0,Math.trunc(numberValue(values.actions_current,3)));
        updates.condition_saved_reaction = String(values.reaction_available || "1") === "0" ? 0 : 1;
      }
      updates.condition_lock_active = 1;
      if (restrictions.actionsLocked) updates.actions_current = 0;
      if (restrictions.reactionLocked) updates.reaction_available = 0;
    } else if (lockWasActive) {
      updates.actions_current = Math.max(0,Math.trunc(numberValue(values.condition_saved_actions,3)));
      updates.reaction_available = String(values.condition_saved_reaction || "1") === "0" ? 0 : 1;
      updates.condition_lock_active = 0;
    }

    const baseCapacity = numberValue(values.carry_capacity_base,20);
    updates.carry_capacity = baseCapacity;
    setAttrs(updates,{silent:true},()=>{ if (callback) callback(); });
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
const bindTest = (button,field,label,kind="Test") =>
  on(`clicked:${button}`,()=>getAttrs([field],values=>
    runPercentileTest({name:label,target:values[field],kind})
  ));

const bindAttributeTest = (attribute,label) =>
  on(`clicked:${attribute}`,()=>{
    const fields = [attribute,...CONDITION_KEYS.map(key=>`condition_${key}`)];
    getAttrs(fields,values=>{
      const normalTarget = clampPercent(numberValue(values[attribute],0));
      const active = getActiveConditions(values);
      const conditionModifier = conditionPenaltyForAttribute(attribute,active);
      const adjustedTarget = clampPercent(normalTarget + conditionModifier);
      runPercentileTest({
        name:label,
        target:adjustedTarget,
        kind:"Attribute Test",
        description:conditionModifier
          ? `Total ${normalTarget}% | Conditions already included (${conditionModifier}%)`
          : `Total ${normalTarget}%`
      });
    });
  });

const bindSkillTest = (skill,label) =>
  on(`clicked:${skill}`,()=>{
    const mapping = SKILL_ATTRIBUTE_MAP[skill];
    if (!mapping) return;
    const attribute = mapping[1];
    const fields = [`${skill}_total`,...CONDITION_KEYS.map(key=>`condition_${key}`)];
    getAttrs(fields,values=>{
      const normalTarget = clampPercent(numberValue(values[`${skill}_total`],0));
      const active = getActiveConditions(values);
      const conditionModifier =
        conditionPenaltyForAttribute(attribute,active) +
        conditionPenaltyForSkill(skill,attribute,active);
      const adjustedTarget = normalTarget;
      runPercentileTest({
        name:label,
        target:adjustedTarget,
        kind:"Skill Test",
        description:conditionModifier
          ? `Normal ${normalTarget}% | Conditions ${conditionModifier}% | Adjusted ${adjustedTarget}%`
          : `Normal ${normalTarget}%`
      });
    });
  });
const postNotice = (name,notice,kind="Combat") => getAttrs(["character_name"],v=>startRoll(`&{template:voe} {{name=${escapeTemplate(name)}}} {{agent=${escapeTemplate(v.character_name||"Unnamed Agent")}}} {{kind=${escapeTemplate(kind)}}} {{notice=${escapeTemplate(notice)}}}`,r=>finishRoll(r.rollId)));



const parseDamageExpression = expression => {
  const match = String(expression || "").trim().match(/^(\d+)d(\d+)([+-]\d+)?$/i);
  if (!match) return {dice:1,sides:4,modifier:0};
  return {
    dice:Math.max(1,Math.trunc(numberValue(match[1],1))),
    sides:Math.max(2,Math.trunc(numberValue(match[2],4))),
    modifier:Math.trunc(numberValue(match[3],0))
  };
};

const getActiveWeapon = key => WEAPON_DAMAGE_DATA[key] || WEAPON_DAMAGE_DATA.unarmed;

const refreshWeaponDamageDisplay = () => {
  getAttrs(["active_weapon","armor_type","target_armor_type","incoming_damage"],values=>{
    const weapon = getActiveWeapon(values.active_weapon || "unarmed");
    const armorDR = numberValue(ARMOR_DAMAGE_REDUCTION[numberValue(values.armor_type,0)],0);
    const targetArmorDR = numberValue(ARMOR_DAMAGE_REDUCTION[numberValue(values.target_armor_type,0)],0);
    const incoming = Math.max(0,Math.trunc(numberValue(values.incoming_damage,0)));
    setAttrs({
      active_weapon_damage:weapon.damage,
      active_weapon_damage_type:weapon.type,
      active_weapon_traits:weapon.traits,
      armor_damage_reduction:armorDR,
      target_armor_damage_reduction:targetArmorDR,
      final_incoming_damage:Math.max(0,incoming-armorDR)
    },{silent:true});
  });
};

const rollActiveWeaponDamage = () => {
  getAttrs(["character_name","active_weapon","target_armor_type"],values=>{
    const weapon = getActiveWeapon(values.active_weapon || "unarmed");
    const parsed = parseDamageExpression(weapon.damage);
    const expression = `${parsed.dice}d${parsed.sides}${parsed.modifier>=0?"+":""}${parsed.modifier}`;
    const targetArmorDR = numberValue(ARMOR_DAMAGE_REDUCTION[numberValue(values.target_armor_type,0)],0);
    startRoll(
      `&{template:voe} {{name=${escapeTemplate(weapon.name)}}} {{agent=${escapeTemplate(values.character_name||"Unnamed Agent")}}} {{kind=Weapon Damage}} {{showdamage=1}} {{rawdamage=[[${expression}]]}} {{damage=[[0]]}} {{damageformula=${escapeTemplate(weapon.damage)}}} {{damagetype=${escapeTemplate(weapon.type)}}} {{traits=${escapeTemplate(weapon.traits)}}} {{armordr=${targetArmorDR}}}`,
      results=>{
        const rawDamage = Math.max(0,Math.trunc(results.results.rawdamage.result));
        const damage = Math.max(0,rawDamage-targetArmorDR);
        setAttrs({last_final_damage:damage},{silent:true});
        finishRoll(results.rollId,{rawdamage:rawDamage,damage});
      }
    );
  });
};

const applyIncomingDamage = () => {
  getAttrs([
    "incoming_damage","armor_damage_reduction","reaction_pending_damage_reduction",
    "temporary_health","health"
  ],values=>{
    const incoming = Math.max(0,Math.trunc(numberValue(values.incoming_damage,0)));
    const armorDR = Math.max(0,Math.trunc(numberValue(values.armor_damage_reduction,0)));
    const reactionDR = Math.max(0,Math.trunc(numberValue(values.reaction_pending_damage_reduction,0)));
    let remaining = Math.max(0,incoming-armorDR-reactionDR);
    let temporary = Math.max(0,Math.trunc(numberValue(values.temporary_health,0)));
    let health = Math.max(0,Math.trunc(numberValue(values.health,0)));

    const absorbed = Math.min(temporary,remaining);
    temporary -= absorbed;
    remaining -= absorbed;
    health = Math.max(0,health-remaining);

    setAttrs({
      temporary_health:temporary,
      health,
      incoming_damage:0,
      final_incoming_damage:0,
      reaction_pending_damage_reduction:0
    });
  });
};

on("change:active_weapon change:armor_type change:target_armor_type change:incoming_damage", refreshWeaponDamageDisplay);
on("sheet:opened", refreshWeaponDamageDisplay);
on("clicked:roll_weapon_damage", rollActiveWeaponDamage);
on("clicked:apply_damage", applyIncomingDamage);


const REACTION_LIBRARY = Object.freeze({
  glimpse_future:Object.freeze({
    name:"Glimpse the Future",
    archetype:"dual",
    sourceType:"protocol",sourceKey:"glimpse_future",
    modes:Object.freeze({
      forewarned:Object.freeze({
        name:"Forewarned",
        timing:"reaction",
        description:"One attack against you suffers -5% per Protocol Rank."
      }),
      exploit:Object.freeze({
        name:"Exploit the Opening",
        timing:"own_turn",
        description:"Your next attack gains +5% per Protocol Rank."
      })
    })
  }),
  measured_guard:Object.freeze({
    name:"Battle Focus",
    archetype:"dual",
    sourceType:"protocol",sourceKey:"battle_focus",
    modes:Object.freeze({
      guarded:Object.freeze({
        name:"Guarded Stance",
        timing:"reaction",
        description:"One Close Combat attack against you suffers -5% per Protocol Rank."
      }),
      relentless:Object.freeze({
        name:"Relentless Assault",
        timing:"own_turn",
        description:"Your next Close Combat attack gains +5% per Protocol Rank."
      })
    })
  }),
  read_the_weave:Object.freeze({
    name:"Arcane Sight",
    archetype:"dual",
    sourceType:"protocol",sourceKey:"arcane_sight",
    modes:Object.freeze({
      disrupt:Object.freeze({
        name:"Disrupt Casting",
        timing:"reaction",
        description:"One hostile Protocol test suffers -5% per Protocol Rank."
      }),
      expose:Object.freeze({
        name:"Expose Weakness",
        timing:"own_turn",
        description:"Your next attack against a target with an active Protocol gains +5% per Protocol Rank."
      })
    })
  }),

  coiled_reflexes:Object.freeze({
    name:"Coiled Reflexes",archetype:"trigger",sourceType:"heritage",sourceKey:"rajah",
    description:"When targeted by a Close Combat attack, impose -5% on that attack."
  }),
  predators_turn:Object.freeze({
    name:"Predator's Turn",archetype:"trigger",sourceType:"heritage",sourceKey:"balam",
    description:"After an enemy misses you in Close Combat, move up to 5 feet."
  }),
  warning_cry:Object.freeze({
    name:"Warning Cry",archetype:"protective",sourceType:"heritage",sourceKey:"hrafn",
    description:"When an ally within 30 feet is targeted, impose -5% on that attack."
  }),
  stand_firm:Object.freeze({
    name:"Stand Firm",archetype:"trigger",sourceType:"heritage",sourceKey:"ursa",
    description:"Ignore one forced-movement or knockdown effect."
  }),
  slipstream:Object.freeze({
    name:"Slipstream",archetype:"trigger",sourceType:"heritage",sourceKey:"zephyr",
    description:"After an attack against you resolves, move up to 5 feet."
  }),

  read_the_tell:Object.freeze({
    name:"Read the Tell",archetype:"trigger",sourceType:"specialty",sourceKey:"investigator",
    description:"After observing an attacker, impose -5% on one attack they make."
  }),
  vanish:Object.freeze({
    name:"Vanish",archetype:"trigger",sourceType:"specialty",sourceKey:"infiltrator",
    description:"After an attack against you resolves, move up to 5 feet into available cover."
  }),
  brace:Object.freeze({
    name:"Brace",archetype:"trigger",sourceType:"specialty",sourceKey:"vanguard",
    description:"Gain +1 Damage Reduction against the next hit before your next turn.",
    damageReduction:1
  }),
  rapid_analysis:Object.freeze({
    name:"Rapid Analysis",archetype:"trigger",sourceType:"specialty",sourceKey:"scholar",
    description:"Gain +5% on your next test to resist, disable, or understand the triggering device or Protocol."
  }),
  scatter:Object.freeze({
    name:"Scatter",archetype:"trigger",sourceType:"specialty",sourceKey:"pathfinder",
    description:"When an area hazard or attack is declared, move up to 5 feet before it resolves."
  }),
  intercept:Object.freeze({
    name:"Intercept",archetype:"protective",sourceType:"specialty",sourceKey:"warden",
    description:"Become the target of an attack aimed at an adjacent ally."
  }),

  phase_step:Object.freeze({
    name:"Phase Step",archetype:"trigger",sourceType:"protocol",sourceKey:"ghost_step",
    description:"After you are targeted, move up to 10 feet after the attack resolves."
  }),
  harden:Object.freeze({
    name:"Harden",archetype:"trigger",sourceType:"protocol",sourceKey:"iron_heart",
    description:"Gain +2 Damage Reduction per Protocol Rank against the next hit.",
    damageReductionPerRank:2
  }),
  anchor:Object.freeze({
    name:"Anchor",archetype:"trigger",sourceType:"protocol",sourceKey:"titan_frame",
    description:"Ignore one forced-movement, knockdown, or displacement effect."
  }),
  center_mind:Object.freeze({
    name:"Center Mind",archetype:"trigger",sourceType:"protocol",sourceKey:"calm_mind",
    description:"Immediately clear Frightened or Charmed."
  })
});

const loadedProtocolRank = (protocolKey, values, rowIds=[]) => {
  let rank = 0;
  [1,2,3].forEach(slot=>{
    if ((values[`protocol_slot_${slot}`] || "") === protocolKey) {
      rank = Math.max(rank,Math.trunc(numberValue(values[`protocol_rank_${slot}`],1)));
    }
  });
  rowIds.forEach(rowId=>{
    if ((values[`repeating_protocols_${rowId}_protocol_name`] || "") === protocolKey) {
      rank = Math.max(rank,Math.trunc(numberValue(values[`repeating_protocols_${rowId}_protocol_rank`],1)));
    }
  });
  return rank;
};

const reactionSourceRank = (reaction, values, rowIds=[]) => {
  if (!reaction) return 0;
  if (reaction.sourceType === "heritage") {
    return (values.heritage || "") === reaction.sourceKey ? 1 : 0;
  }
  if (reaction.sourceType === "specialty") {
    return (values.specialty || "") === reaction.sourceKey ||
      (values.secondary_specialty || "") === reaction.sourceKey ? 1 : 0;
  }
  if (reaction.sourceType === "protocol") {
    return loadedProtocolRank(reaction.sourceKey,values,rowIds);
  }
  return 0;
};

const reactionEffectText = (key, rank, mode="") => {
  const reaction = REACTION_LIBRARY[key];
  if (!reaction || rank <= 0) return "Reaction unavailable for this Agent.";
  if (reaction.archetype === "dual") {
    const selectedMode = reaction.modes[mode] || Object.values(reaction.modes)[0];
    const modifier = rank*5;
    return selectedMode.description.replace("-5%",`-${modifier}%`).replace("+5%",`+${modifier}%`);
  }
  if (key === "harden") return `Gain +${rank*2} Damage Reduction against the next hit.`;
  return reaction.description;
};

const reactionModeFor = (reaction, requestedMode) => {
  if (!reaction || reaction.archetype !== "dual") return "";
  if (reaction.modes[requestedMode]) return requestedMode;
  return Object.keys(reaction.modes)[0];
};

const reactionTimingLabel = (reaction, mode="") => {
  if (!reaction) return "—";
  if (reaction.archetype !== "dual") {
    return reaction.archetype === "protective" ? "Trigger: Ally targeted" : "Trigger only";
  }
  const selectedMode = reaction.modes[mode];
  return selectedMode && selectedMode.timing === "own_turn"
    ? "Own turn allowed"
    : "Triggered response";
};

const refreshReactionState = () => {
  getSectionIDs("repeating_protocols",rowIds=>{
    const fields = [
      "reaction_available","selected_reaction","selected_reaction_mode",
      "heritage","specialty","secondary_specialty",
      "protocol_slot_1","protocol_rank_1","protocol_slot_2","protocol_rank_2",
      "protocol_slot_3","protocol_rank_3"
    ];
    rowIds.forEach(rowId=>{
      fields.push(`repeating_protocols_${rowId}_protocol_name`);
      fields.push(`repeating_protocols_${rowId}_protocol_rank`);
    });
    getAttrs(fields,values=>{
      const available = String(values.reaction_available || "1") === "1";
      const selected = values.selected_reaction || "none";
      const reaction = REACTION_LIBRARY[selected];
      const sourceRank = reactionSourceRank(reaction,values,rowIds);
      const valid = Boolean(reaction && sourceRank > 0);
      const mode = reactionModeFor(reaction,values.selected_reaction_mode || "");
      let modifier = 0;

      if (valid && reaction.archetype === "dual") modifier = sourceRank*5;
      else if (valid && selected === "harden") modifier = sourceRank*2;
      else if (valid && ["coiled_reflexes","warning_cry","read_the_tell","rapid_analysis"].includes(selected)) modifier = 5;
      else if (valid && selected === "brace") modifier = 1;

      const availabilityUpdates = {};
      Object.entries(REACTION_LIBRARY).forEach(([key,entry])=>{
        availabilityUpdates[`reaction_available_${key}`] =
          reactionSourceRank(entry,values,rowIds) > 0 ? 1 : 0;
      });

      const modeUpdates = {
        reaction_mode_forewarned_visible:selected === "glimpse_future" ? 1 : 0,
        reaction_mode_exploit_visible:selected === "glimpse_future" ? 1 : 0,
        reaction_mode_guarded_visible:selected === "measured_guard" ? 1 : 0,
        reaction_mode_relentless_visible:selected === "measured_guard" ? 1 : 0,
        reaction_mode_disrupt_visible:selected === "read_the_weave" ? 1 : 0,
        reaction_mode_expose_visible:selected === "read_the_weave" ? 1 : 0,
        reaction_mode_message:valid && reaction.archetype !== "dual"
          ? "Trigger-based Reaction"
          : (selected === "none" ? "Choose an available Reaction" : "")
      };

      setAttrs({
        reaction_status_text:available ? "Available" : "Used",
        selected_reaction:valid ? selected : "none",
        selected_reaction_mode:mode || values.selected_reaction_mode || "forewarned",
        selected_reaction_modifier:valid ? modifier : 0,
        selected_reaction_archetype:valid
          ? reaction.archetype.charAt(0).toUpperCase()+reaction.archetype.slice(1)
          : "Unavailable",
        selected_reaction_timing:valid ? reactionTimingLabel(reaction,mode) : "—",
        selected_reaction_label:valid ? reaction.name : "None",
        selected_reaction_mode_label:valid && reaction.archetype === "dual"
          ? (reaction.modes[mode] || Object.values(reaction.modes)[0]).name
          : "Trigger-based Reaction",
        selected_reaction_description:selected === "none"
          ? "No Reaction selected."
          : reactionEffectText(selected,sourceRank,mode),
        reaction_glimpse_rank:loadedProtocolRank("glimpse_future",values,rowIds),
        ...availabilityUpdates,
        ...modeUpdates
      },{silent:true});
    });
  });
};

const useSelectedReaction = () => {
  getSectionIDs("repeating_protocols",rowIds=>{
    const fields = [
      "character_name","reaction_available","selected_reaction",
      "selected_reaction_mode","selected_reaction_modifier",
      "heritage","specialty","secondary_specialty",
      "protocol_slot_1","protocol_rank_1","protocol_slot_2","protocol_rank_2",
      "protocol_slot_3","protocol_rank_3"
    ];
    rowIds.forEach(rowId=>{
      fields.push(`repeating_protocols_${rowId}_protocol_name`);
      fields.push(`repeating_protocols_${rowId}_protocol_rank`);
    });
    getAttrs(fields,values=>{
      if (String(values.reaction_available || "1") !== "1") {
        return postNotice("Reaction","Your Reaction has already been spent this round.","Reaction");
      }

      const selected = values.selected_reaction || "none";
      const reaction = REACTION_LIBRARY[selected];
      const sourceRank = reactionSourceRank(reaction,values,rowIds);
      if (!reaction || sourceRank <= 0) {
        return postNotice("Reaction","That Reaction is not available from your current Heritage, Specialty, or loaded Protocols.","Reaction");
      }

      const mode = reactionModeFor(reaction,values.selected_reaction_mode || "");
      if (reaction.archetype !== "dual" && !mode && selected === "none") {
        return postNotice("Reaction","No Reaction is selected.","Reaction");
      }

      const updates = {
        reaction_available:0,
        reaction_status_text:"Used"
      };

      let modeLabel = "";
      let effect = reactionEffectText(selected,sourceRank,mode);

      if (reaction.archetype === "dual") {
        const selectedMode = reaction.modes[mode];
        modeLabel = selectedMode.name;
        const modifier = sourceRank*5;

        if (selected === "glimpse_future") {
          if (mode === "exploit") updates.reaction_pending_attack_bonus = modifier;
          else updates.reaction_pending_defense_penalty = -modifier;
        } else if (selected === "measured_guard") {
          if (mode === "relentless") updates.reaction_pending_close_attack_bonus = modifier;
          else updates.reaction_pending_close_defense_penalty = -modifier;
        } else if (selected === "read_the_weave") {
          if (mode === "expose") updates.reaction_pending_protocol_target_bonus = modifier;
          else updates.reaction_pending_protocol_test_penalty = -modifier;
        }
      } else if (selected === "harden") {
        updates.reaction_pending_damage_reduction = sourceRank*2;
      } else if (selected === "brace") {
        updates.reaction_pending_damage_reduction = 1;
      } else if (selected === "center_mind") {
        updates.condition_frightened = 0;
        updates.condition_charmed = 0;
      }

      setAttrs(updates);
      startRoll(
        `&{template:voe} {{name=⚡ REACTION}} {{agent=${escapeTemplate(values.character_name||"Unnamed Agent")}}} {{kind=${escapeTemplate(reaction.name)}}} {{description=${escapeTemplate(modeLabel ? `${modeLabel} • ${effect}` : effect)} • Reaction Spent}}`,
        results=>finishRoll(results.rollId,{})
      );
    });
  });
};

on("clicked:use_reaction",useSelectedReaction);
on("sheet:opened",refreshReactionState);

const initializeRepeatingProtocolRows = () => {
  refreshRepeatingProtocolRows(()=>{
    refreshProtocolBudgetWithRepeating();
    refreshAgentProtocolLoadoutSummary();
    refreshReactionState();
  });
};
on("sheet:opened",initializeRepeatingProtocolRows);
on("sheet:opened",()=>{migrateCharacterCreationState();refreshBuilderState();});

on("change:reaction_available change:selected_reaction change:selected_reaction_mode change:heritage change:specialty change:secondary_specialty change:protocol_slot_1 change:protocol_rank_1 change:protocol_slot_2 change:protocol_rank_2 change:protocol_slot_3 change:protocol_rank_3",refreshReactionState);
on("change:repeating_protocols:protocol_name change:repeating_protocols:protocol_rank remove:repeating_protocols",refreshReactionState);

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
        arcane_rank:2,
        protocol_points_max:4,
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

      setAttrs(updates, {}, () => { recalculateCharacter(); refreshAllProtocolState(); });
    });
  });
});

ATTRIBUTE_KEYS.forEach(k=>bindAttributeTest(
  k,
  k==="wisdom"
    ? "Agility"
    : k==="intelligence"
      ? "Awareness"
      : k==="charisma"
        ? "Presence"
        : k.charAt(0).toUpperCase()+k.slice(1)
));
const skillLabels = {athletics:"Athletics",acrobatics:"Acrobatics",stealth:"Stealth",investigation:"Investigation",arcana:"Arcana",engineering:"Engineering",medicine:"Medicine",survival:"Survival",perception:"Perception",insight:"Insight",persuasion:"Persuasion",deception:"Deception",intimidation:"Intimidation",sleight_of_hand:"Sleight of Hand",technology:"Technology",animal_handling:"Animal Handling"};
Object.entries(skillLabels).forEach(([k,label])=>bindSkillTest(k,label));

const runInitiativeSkill = (skillKey, label) => {
  const totalField = `${skillKey}_total`;
  getAttrs([
    "character_name",totalField,
    ...CONDITION_KEYS.map(key=>`condition_${key}`)
  ],values=>{
    const baseSkill = clampPercent(numberValue(values[totalField],0));
    const active = getActiveConditions(values);
    const conditionModifier =
      conditionPenaltyForSkill(skillKey,SKILL_ATTRIBUTE_MAP[skillKey][1],active);
    const finalSkill = clampPercent(baseSkill + conditionModifier);

    setAttrs({initiative_popup_open:0},{silent:true});

    startRoll(
      `&{template:voe} {{name=Initiative}} {{agent=${escapeTemplate(values.character_name||"Unnamed Agent")}}} {{kind=Initiative}} {{showinitiativecalc=1}} {{initiativeskill=${escapeTemplate(label)}}} {{skillvalue=${finalSkill}}} {{rolled=[[1d100]]}} {{margin=[[0]]}} {{initiativescore=[[0]]}} {{success=[[0]]}} {{failure=[[0]]}}`,
      results=>{
        const roll = Math.max(1,Math.min(100,Math.trunc(results.results.rolled.result)));
        const success = roll <= finalSkill;
        const margin = success ? 0 : roll - finalSkill;
        const initiativeScore = success ? roll : roll + margin;

        finishRoll(results.rollId,{
          margin,
          initiativescore:initiativeScore,
          success:success?1:0,
          failure:success?0:1
        });

        setAttrs({
          last_initiative_skill:label,
          last_initiative_skill_value:finalSkill,
          last_initiative_roll:roll,
          last_initiative_margin:margin,
          last_initiative_score:initiativeScore,
          last_initiative_result:success ? "SUCCESS" : "FAILURE"
        },{silent:true});
      }
    );
  });
};

const runInitiative = () => {
  setAttrs({initiative_popup_open:1},{silent:true});
};
const refreshArmorDifference = () => {
  getAttrs(["armor_penalty","target_armor_type"],values=>{
    const attackerArmor = Math.abs(numberValue(values.armor_penalty,0));
    const defenderArmor = Math.max(0,numberValue(values.target_armor_type,0));
    setAttrs({armor_difference_modifier:defenderArmor-attackerArmor},{silent:true});
  });
};

on("change:armor_type change:armor_penalty change:target_armor_type", refreshArmorDifference);
on("sheet:opened", refreshArmorDifference);

const runCombatAttack = mode => {
  const field=mode==="close"?"close_combat_total":"ranged_combat_total"; const label=mode==="close"?"Close Combat Attack":"Ranged Combat Attack";
  getAttrs([field,"actions_current","attacks_made","armor_penalty","target_armor_type","attack_other_modifier","reaction_pending_attack_bonus","reaction_pending_close_attack_bonus","reaction_pending_protocol_target_bonus","protocol_slot_1","protocol_slot_2","protocol_slot_3",...CONDITION_KEYS.map(key=>`condition_${key}`)],v=>{
    const actions=Math.max(0,Math.trunc(numberValue(v.actions_current,3))); const attacks=Math.max(0,Math.trunc(numberValue(v.attacks_made,0)));
    if(actions<1) return postNotice(label,"No actions remain. Reset the round before making another attack.");
    const hasBattleFocus=[v.protocol_slot_1,v.protocol_slot_2,v.protocol_slot_3].includes("battle_focus");
    const base=numberValue(v[field],0), multi=(mode==="close" && hasBattleFocus && attacks===1 ? 0 : attacks*10), other=numberValue(v.attack_other_modifier,0);
    const attackerArmor = Math.abs(numberValue(v.armor_penalty,0));
    const defenderArmor = Math.max(0,numberValue(v.target_armor_type,0));
    const armorDifference = defenderArmor - attackerArmor;
    const active = getActiveConditions(v);
    const combatSkill = mode==="close" ? "close_combat" : "ranged_combat";
    const combatAttribute = mode==="close" ? "strength" : "dexterity";
    const conditionModifier =
      conditionPenaltyForAttribute(combatAttribute,active) +
      conditionPenaltyForSkill(combatSkill,combatAttribute,active);
    const generalReactionBonus = Math.max(0,numberValue(v.reaction_pending_attack_bonus,0));
    const closeReactionBonus = mode==="close" ? Math.max(0,numberValue(v.reaction_pending_close_attack_bonus,0)) : 0;
    const protocolTargetBonus = Math.max(0,numberValue(v.reaction_pending_protocol_target_bonus,0));
    const reactionBonus = generalReactionBonus + closeReactionBonus + protocolTargetBonus;
    const finalTarget=clampPercent(base+conditionModifier+armorDifference+reactionBonus-multi+other);
    setAttrs({armor_difference_modifier:armorDifference,reaction_pending_attack_bonus:0,reaction_pending_close_attack_bonus:0,reaction_pending_protocol_target_bonus:0},{silent:true});
    runPercentileTest({name:label,target:finalTarget,kind:"Attack",description:`Base ${Math.trunc(base)}% | Conditions ${conditionModifier>=0?"+":""}${conditionModifier}% | Armor Difference ${armorDifference>=0?"+":""}${armorDifference}% | Reaction ${reactionBonus>=0?"+":""}${reactionBonus}% | Attack ${attacks+1} penalty -${multi}% | Other ${other>=0?"+":""}${other}% | Final ${finalTarget}%`});
    setAttrs({actions_current:actions-1,attacks_made:attacks+1,attacks_remaining:Math.max(0,2-attacks)},{silent:true});
  });
};
on("clicked:initiative",runInitiative);
on("clicked:initiative_perception",()=>runInitiativeSkill("perception","Perception"));
on("clicked:initiative_stealth",()=>runInitiativeSkill("stealth","Stealth"));
on("clicked:close_initiative_popup",()=>setAttrs({initiative_popup_open:0},{silent:true}));
on("clicked:move_action",()=>getAttrs(["actions_current","speed"],v=>{const a=Math.max(0,Math.trunc(numberValue(v.actions_current,3)));if(a<1)return postNotice("Move","No actions remain.");setAttrs({actions_current:a-1},{silent:true});postNotice("Move",`Moved up to ${numberValue(v.speed,35)} feet. ${a-1} actions remain.`);}));
on("clicked:close_attack clicked:close_combat",()=>runCombatAttack("close"));
on("clicked:ranged_attack clicked:ranged_combat",()=>runCombatAttack("ranged"));
on("clicked:reset_round",()=>{setAttrs({actions_current:3,attacks_made:0,attacks_remaining:3,reaction_available:1,reaction_status_text:"Available",reaction_pending_attack_bonus:0,reaction_pending_defense_penalty:0,reaction_pending_damage_reduction:0,reaction_pending_close_attack_bonus:0,reaction_pending_close_defense_penalty:0,reaction_pending_protocol_target_bonus:0,reaction_pending_protocol_test_penalty:0,armor_difference_modifier:0},{silent:true});postNotice("New Round","Actions reset to 3, attack penalties cleared, and Reaction restored.");refreshReactionState();});
on("clicked:untrained_test",()=>runPercentileTest({name:"Untrained Test",target:0,kind:"Custom Test"}));
on("clicked:diagnostic_d100",()=>runPercentileTest({name:"Test d100",target:100,kind:"Diagnostic"}));

const usePreparedContingency = slot => {
  const nameField = `contingency_${slot}_name`;
  const textField = `contingency_${slot}_text`;
  getAttrs([
    "last_roll","last_target","last_test_name","last_test_kind","last_test_valid",
    "contingency_current","character_name",nameField,textField
  ],values=>{
    if(numberValue(values.last_test_valid,0)!==1) {
      return postNotice("Contingency","No percentile roll is stored. Make a test first.","Contingency");
    }
    const current=Math.max(0,Math.trunc(numberValue(values.contingency_current,0)));
    if(current<1) return postNotice("Contingency","No prepared Contingencies remain.","Contingency");

    const original=Math.trunc(numberValue(values.last_roll,0));
    const target=clampPercent(values.last_target);
    const flipped=flipPercentile(original);
    const success=flipped<=target;
    const margin=success?target-flipped:flipped-target;
    const planName=values[nameField] || `Contingency ${slot}`;
    const planText=values[textField] || "Prepared plan activated.";

    const rollString=`&{template:voe} {{name=${escapeTemplate(planName)}}} {{agent=${escapeTemplate(values.character_name||"Unnamed Agent")}}} {{kind=⚡ CONTINGENCY • ${escapeTemplate(values.last_test_kind||"Test")}}} {{showresult=1}} {{result=[[0]]}} {{original=${original}}} {{target=${target}}} {{success=[[0]]}} {{failure=[[0]]}} {{margin=[[0]]}} {{description=${escapeTemplate(planText)} • Digits flipped from ${original} to ${String(flipped).padStart(2,"0")}. Contingency Spent.}}`;

    startRoll(rollString,results=>{
      finishRoll(results.rollId,{
        result:flipped,
        success:success?1:0,
        failure:success?0:1,
        margin
      });
      setAttrs({
        contingency_current:current-1,
        last_roll:flipped,
        last_test_valid:1
      },{silent:true});
    });
  });
};

on("clicked:contingency_1",()=>usePreparedContingency(1));
on("clicked:contingency_2",()=>usePreparedContingency(2));
on("clicked:contingency_3",()=>usePreparedContingency(3));

on("clicked:reset_encounter",()=>getAttrs(["contingency_max"],values=>{
  const maximum=Math.max(0,Math.trunc(numberValue(values.contingency_max,3)));
  setAttrs({
    contingency_current:maximum,
    actions_current:3,
    attacks_made:0,
    attacks_remaining:3,
    reaction_available:1,
    reaction_status_text:"Available",
    reaction_pending_attack_bonus:0,
    reaction_pending_defense_penalty:0,
    reaction_pending_damage_reduction:0,
    reaction_pending_close_attack_bonus:0,
    reaction_pending_close_defense_penalty:0,
    reaction_pending_protocol_target_bonus:0,
    reaction_pending_protocol_test_penalty:0,
    armor_difference_modifier:0
  });
  postNotice("New Encounter","Round resources and prepared Contingencies restored.","Encounter");
  refreshReactionState();
}));

on("change:armor_type",recalculateCharacter);
on("change:heritage",e=>setAttrs({heritage_mirror:e.newValue},{silent:true}));
on("change:heritage_mirror",e=>setAttrs({heritage:e.newValue},{silent:true}));
const generalRecalcEvents=["heritage","heritage_mirror","specialty","protocol_slot_1","protocol_slot_2","protocol_slot_3","armor_type",...CONDITION_KEYS.map(k=>`condition_${k}`)].map(f=>`change:${f}`).join(" ");
on(generalRecalcEvents,()=>{recalculateCharacter();refreshCreationBudgets();});
on(ATTRIBUTE_KEYS.map(k=>`change:${k}_base`).join(" "),enforceAttributeBudget);
on(Object.values(SKILL_ATTRIBUTE_MAP).map(v=>`change:${v[0]}`).join(" "),enforceSkillBudget);
on("change:specialty", ()=>{recalculateCharacter();refreshCreationBudgets();});
on("sheet:opened",()=>{
  const migrationFields = [
    "sheet_version","actions_current","attacks_made","attacks_remaining","reaction_available",
    ...ATTRIBUTE_KEYS.flatMap(k=>[`${k}_base`,`${k}_heritage_applied`]),
    ...Object.values(SKILL_ATTRIBUTE_MAP).map(v=>v[0])
  ];
  getAttrs(migrationFields,v=>{
    const u={sheet_version:"2.13.0"};
    const made=Math.max(0,Math.trunc(numberValue(v.attacks_made,0)));
    if(!Number.isFinite(parseFloat(v.actions_current)))u.actions_current=3;
    if(!Number.isFinite(parseFloat(v.attacks_made)))u.attacks_made=0;
    if(!Number.isFinite(parseFloat(v.attacks_remaining)))u.attacks_remaining=Math.max(0,3-made);
    if(v.reaction_available!=="0"&&v.reaction_available!=="1")u.reaction_available=1;

    ATTRIBUTE_KEYS.forEach(k=>{
      const current = numberValue(v[`${k}_base`],0);
      const heritage = numberValue(v[`${k}_heritage_applied`],0);
      if(current-heritage < BASE_ATTRIBUTE_VALUE) u[`${k}_base`] = BASE_ATTRIBUTE_VALUE + heritage;
    });

    Object.values(SKILL_ATTRIBUTE_MAP).forEach(([field])=>{
      const current = numberValue(v[field],0);
      if(current < BASE_SKILL_VALUE || current === 15) u[field] = BASE_SKILL_VALUE;
    });

    setAttrs(u,{silent:true},()=>{
      recalculateCharacter();
      refreshCreationBudgets();
    });
  });
});

on("change:contingency_max",e=>{const m=Math.max(0,numberValue(e.newValue,3));getAttrs(["contingency_current"],v=>setAttrs({contingency_current:Math.min(m,numberValue(v.contingency_current,m))}));});






const getProtocolCardDetails = (protocolId, selectedRank, agentRank) => {
  const arcaneRank = arcaneRankFor(agentRank);
  const safeRank = protocolId ? clampProtocolRank(selectedRank,arcaneRank) : 0;
  const protocol = protocolForSelectedRank(protocolId,safeRank);
  return {
    rank:safeRank,
    display: protocolId && safeRank > 0 ? protocol.name : "No Protocol",
    summary: protocolId && safeRank > 0 ? summarizeProtocol(protocol) : "No Protocol prepared."
  };
};

const updateRepeatingProtocolRow = (rowId, selectedId, selectedRank, agentRank, callback=null) => {
  if (!rowId) {
    if (callback) callback();
    return;
  }
  const prefix = `repeating_protocols_${rowId}`;
  const normalizedRank =
    selectedId && (selectedRank === "" || selectedRank === undefined || selectedRank === null)
      ? 1
      : selectedRank;
  const selected = getProtocolCardDetails(selectedId || "", normalizedRank, agentRank);
  setAttrs({
    [`${prefix}_protocol_rank`]:selected.rank,
    [`${prefix}_protocol_display`]:selected.display,
    [`${prefix}_protocol_summary`]:selected.summary
  }, {silent:true}, ()=>{ if (callback) callback(); });
};

on("change:repeating_protocols:protocol_name change:repeating_protocols:protocol_rank", eventInfo => {
  const source = eventInfo.sourceAttribute || "";
  const match = source.match(/^repeating_protocols_([^_]+)_(protocol_name|protocol_rank)$/);
  if (!match) return;
  const rowId = match[1];
  const prefix = `repeating_protocols_${rowId}`;
  getAttrs(["rank",`${prefix}_protocol_name`,`${prefix}_protocol_rank`], values => {
    const key = values[`${prefix}_protocol_name`] || "";
    let requestedRank = values[`${prefix}_protocol_rank`];
    if (key && (requestedRank === "" || requestedRank === undefined || requestedRank === null)) {
      requestedRank = 1;
    }
    updateRepeatingProtocolRow(rowId,key,requestedRank,values.rank || 1,()=>{
      refreshProtocolBudgetWithRepeating();
      refreshAgentProtocolLoadoutSummary();
      refreshReactionState();
    });
  });
});

const refreshRepeatingProtocolRows = (callback=null) => {
  getSectionIDs("repeating_protocols", rowIds => {
    if (!rowIds || !rowIds.length) {
      if (callback) callback();
      return;
    }
    const fields = ["rank"];
    rowIds.forEach(rowId => {
      fields.push(`repeating_protocols_${rowId}_protocol_name`);
      fields.push(`repeating_protocols_${rowId}_protocol_rank`);
    });
    getAttrs(fields, values => {
      let pending = rowIds.length;
      const finishOne = () => {
        pending -= 1;
        if (pending <= 0 && callback) callback();
      };
      rowIds.forEach(rowId => {
        const key = values[`repeating_protocols_${rowId}_protocol_name`] || "";
        let rank = values[`repeating_protocols_${rowId}_protocol_rank`];
        if (key && (rank === "" || rank === undefined || rank === null)) rank = 1;
        updateRepeatingProtocolRow(rowId,key,rank,values.rank || 1,finishOne);
      });
    });
  });
};

const refreshProtocolBudgetWithRepeating = () => {
  getSectionIDs("repeating_protocols", rowIds => {
    const fields = collectProtocolBudgetFields();
    rowIds.forEach(rowId => {
      fields.push(`repeating_protocols_${rowId}_protocol_name`);
      fields.push(`repeating_protocols_${rowId}_protocol_rank`);
    });
    getAttrs(fields, values => {
      const budget = calculatePrimaryProtocolBudget(values);
      rowIds.forEach(rowId => {
        const key = values[`repeating_protocols_${rowId}_protocol_name`] || "";
        const rawRank = values[`repeating_protocols_${rowId}_protocol_rank`];
        const normalizedRank = key && (rawRank === "" || rawRank === undefined || rawRank === null)
          ? 1
          : rawRank;
        const selectedRank = key ? clampProtocolRank(normalizedRank,budget.arcaneRank) : 0;
        budget.used += selectedRank;
      });
      budget.remaining = budget.maxPoints-budget.used;
      setAttrs({
        arcane_rank:budget.arcaneRank,
        protocol_points_max:budget.maxPoints,
        protocol_points_used:budget.used,
        protocol_points_remaining:budget.remaining,
        protocol_budget_warning:budget.used > budget.maxPoints
          ? `Protocol loadout exceeds the ${budget.maxPoints}-point budget by ${budget.used-budget.maxPoints}.`
          : "",
        builder_protocol_points_used:budget.used,
        builder_protocol_points_available:budget.maxPoints
      },{silent:true});
    });
  });
};

on("remove:repeating_protocols", () => { refreshProtocolBudgetWithRepeating(); refreshRepeatingProtocolRows(); refreshAgentProtocolLoadoutSummary(); });

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
  field_coat:{name:"Light Field Coat",armor:"5",type:"Armor",weight:3,notes:"Light Armor: Mobility -5%, Damage Reduction 1."},
  lamellar_vest:{name:"Medium Lamellar Vest",armor:"10",type:"Armor",weight:6,notes:"Medium Armor: Mobility -10%, Damage Reduction 2."},
  bulwark_harness:{name:"Heavy Bulwark Harness",armor:"15",type:"Armor",weight:10,notes:"Heavy Armor: Mobility -15%, Damage Reduction 3."}
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


const refreshPlayerExport = (callback=null) => {
  const conditionFields = CONDITION_KEYS.map(key=>`condition_${key}`);
  const noteFields = [
    "mission_objective","mission_complications",
    "character_notes","background_notes","allies_contacts","secrets_notes"
  ];

  getSectionIDs("repeating_weapons", weaponIds => {
    getSectionIDs("repeating_equipment", equipmentIds => {
      const weaponFields = weaponIds.flatMap(id=>[
        `repeating_weapons_${id}_weapon_name`,
        `repeating_weapons_${id}_weapon_target`,
        `repeating_weapons_${id}_weapon_damage`,
        `repeating_weapons_${id}_weapon_range`,
        `repeating_weapons_${id}_weapon_notes`
      ]);
      const equipmentFields = equipmentIds.flatMap(id=>[
        `repeating_equipment_${id}_item_name`,
        `repeating_equipment_${id}_item_type`,
        `repeating_equipment_${id}_item_quantity`,
        `repeating_equipment_${id}_item_weight`,
        `repeating_equipment_${id}_item_notes`
      ]);

      getAttrs([
        ...conditionFields,
        ...noteFields,
        ...weaponFields,
        ...equipmentFields
      ], values => {
        const activeConditions = CONDITION_KEYS
          .filter(key=>String(values[`condition_${key}`] || "0") === "1")
          .map(key=>CONDITION_LABELS[key] || key);

        const weapons = weaponIds.map(id=>{
          const prefix=`repeating_weapons_${id}`;
          const name=values[`${prefix}_weapon_name`] || "Unnamed Weapon";
          const target=values[`${prefix}_weapon_target`] || "0";
          const damage=values[`${prefix}_weapon_damage`] || "-";
          const range=values[`${prefix}_weapon_range`] || "-";
          const notes=values[`${prefix}_weapon_notes`] || "";
          return `${name} | Target ${target}% | Damage ${damage} | Range ${range}${notes ? `\n  ${notes}` : ""}`;
        });

        const equipment = equipmentIds.map(id=>{
          const prefix=`repeating_equipment_${id}`;
          const name=values[`${prefix}_item_name`] || "Unnamed Item";
          const type=values[`${prefix}_item_type`] || "Equipment";
          const quantity=values[`${prefix}_item_quantity`] || "1";
          const weight=values[`${prefix}_item_weight`] || "0";
          const notes=values[`${prefix}_item_notes`] || "";
          return `${name} | ${type} | Qty ${quantity} | Wt ${weight}${notes ? `\n  ${notes}` : ""}`;
        });

        const notes = [
          values.mission_objective ? `Objective\n${values.mission_objective}` : "",
          values.mission_complications ? `Complications\n${values.mission_complications}` : "",
          values.character_notes ? `Character Notes\n${values.character_notes}` : "",
          values.background_notes ? `Background\n${values.background_notes}` : "",
          values.allies_contacts ? `Allies & Contacts\n${values.allies_contacts}` : "",
          values.secrets_notes ? `Secrets\n${values.secrets_notes}` : ""
        ].filter(Boolean);

        setAttrs({
          export_conditions_summary:activeConditions.length
            ? activeConditions.join("\n")
            : "No active conditions.",
          export_weapons_summary:weapons.length
            ? weapons.join("\n\n")
            : "No weapons recorded.",
          export_equipment_summary:equipment.length
            ? equipment.join("\n\n")
            : "No equipment recorded.",
          export_notes_summary:notes.length
            ? notes.join("\n\n")
            : "No dossier notes recorded.",
          export_status:`Export ready: ${weapons.length} weapon${weapons.length===1?"":"s"}, ${equipment.length} equipment item${equipment.length===1?"":"s"}, and ${activeConditions.length} active condition${activeConditions.length===1?"":"s"}. Open the sheet in Roll20's pop-out window, then print from that window.`
        },{silent:true},()=>{
          if (callback) callback();
        });
      });
    });
  });
};

on("clicked:prepare_player_export",()=>{
  setAttrs({export_status:"Refreshing export data..."},{silent:true},()=>{
    refreshPlayerExport();
  });
});

on("change:sheet_tab",eventInfo=>{
  if (eventInfo && eventInfo.newValue === "export") {
    setAttrs({export_status:"Refreshing export data..."},{silent:true},()=>{
      refreshPlayerExport();
    });
  }
});

on("sheet:opened",refreshPlayerExport);
on("change:condition_blinded change:condition_charmed change:condition_deafened change:condition_exhausted change:condition_frightened change:condition_incapacitated change:condition_poisoned change:condition_restrained change:condition_shocked change:condition_stunned",refreshPlayerExport);
on("change:repeating_weapons remove:repeating_weapons change:repeating_equipment remove:repeating_equipment",refreshPlayerExport);
