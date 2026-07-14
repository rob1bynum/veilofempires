/*
 * Veil of Empires Roll20 v3.0
 * Structured game-data layer.
 *
 * Roll20 cannot fetch local JSON at runtime, so production data is stored
 * as a plain JavaScript object inside the sheet worker. This file can still
 * be generated from JSON during development.
 */

const VOE_DATA = Object.freeze({
  meta: {
    schemaVersion: 1,
    gameVersion: "3.0-alpha.1",
    baselineVersion: "2.3.3"
  },

  attributes: [
    { id: "strength", label: "Strength", abbreviation: "STR" },
    { id: "dexterity", label: "Dexterity", abbreviation: "DEX" },
    { id: "endurance", label: "Endurance", abbreviation: "END" },
    { id: "intelligence", label: "Intelligence", abbreviation: "INT" },
    { id: "wisdom", label: "Wisdom", abbreviation: "WIS" },
    { id: "charisma", label: "Charisma", abbreviation: "CHA" }
  ],

  skills: [
    { id: "athletics", label: "Athletics", attribute: "strength" },
    { id: "acrobatics", label: "Acrobatics", attribute: "dexterity" },
    { id: "stealth", label: "Stealth", attribute: "dexterity" },
    { id: "investigation", label: "Investigation", attribute: "intelligence" },
    { id: "arcana", label: "Arcana", attribute: "intelligence" },
    { id: "engineering", label: "Engineering", attribute: "intelligence" },
    { id: "medicine", label: "Medicine", attribute: "wisdom" },
    { id: "survival", label: "Survival", attribute: "wisdom" },
    { id: "perception", label: "Perception", attribute: "wisdom" },
    { id: "insight", label: "Insight", attribute: "wisdom" },
    { id: "persuasion", label: "Persuasion", attribute: "charisma" },
    { id: "deception", label: "Deception", attribute: "charisma" },
    { id: "intimidation", label: "Intimidation", attribute: "charisma" },
    { id: "close_combat", label: "Close Combat", attribute: "strength" },
    { id: "ranged_combat", label: "Ranged Combat", attribute: "dexterity" }
  ],

  heritages: [
    { id: "", name: "None", summary: "No Heritage selected.", modifiers: [] },
    {
      id: "rajah",
      name: "Rajah",
      summary: "A proud feline Heritage shaped by poise, presence, and decisive action.",
      modifiers: []
    },
    {
      id: "balam",
      name: "Balam",
      summary: "A jaguar Heritage associated with stealth, agility, and predatory awareness.",
      modifiers: []
    },
    {
      id: "hrafn",
      name: "Hrafn",
      summary: "A raven Heritage associated with perception, intellect, and uncanny mobility.",
      modifiers: []
    },
    {
      id: "ursa",
      name: "Ursa",
      summary: "Powerfully built protectors whose long service may physically reshape them.",
      modifiers: []
    },
    {
      id: "zephyr",
      name: "Zephyr",
      summary: "An air-touched Heritage known for speed, grace, and elusive movement.",
      modifiers: []
    }
  ],

  specialties: [
    { id: "", name: "None", summary: "No Specialty selected.", modifiers: [] },
    { id: "investigator", name: "Investigator", modifiers: [] },
    { id: "infiltrator", name: "Infiltrator", modifiers: [] },
    { id: "vanguard", name: "Vanguard", modifiers: [] },
    { id: "scholar", name: "Scholar", modifiers: [] },
    { id: "pathfinder", name: "Pathfinder", modifiers: [] },
    {
      id: "warden",
      name: "Warden",
      summary: "A frontline protector who controls space and shields allies.",
      modifiers: [
        { target: "skill.athletics", operation: "add", value: 5 },
        { target: "skill.close_combat", operation: "add", value: 5 },
        { target: "skill.intimidation", operation: "add", value: 5 },
        { target: "skill.survival", operation: "add", value: 5 },
        { target: "skill.ranged_combat", operation: "add", value: 5 },
        { target: "derived.movement", operation: "add", value: 5 },
        { target: "resource.health_max", operation: "add", value: 5 },
        { target: "resource.contacts", operation: "add", value: 1 }
      ],
      ability: {
        id: "hold_the_line",
        name: "Hold the Line",
        text: "The Warden specializes in protecting allies and controlling the immediate battlefield."
      }
    }
  ],

  protocols: [
    { id: "", name: "None", modifiers: [] },
    {
      id: "titan_frame",
      name: "Titan Frame",
      tags: ["physical", "ursa"],
      modifiers: []
    },
    {
      id: "iron_heart",
      name: "Iron Heart",
      tags: ["defense", "ursa"],
      modifiers: []
    },
    {
      id: "battle_focus",
      name: "Battle Focus",
      tags: ["combat", "warden"],
      modifiers: []
    },
    {
      id: "arcane_sight",
      name: "Arcane Sight",
      tags: ["perception", "arcane"],
      modifiers: []
    },
    {
      id: "ghost_step",
      name: "Ghost Step",
      tags: ["movement", "stealth"],
      modifiers: []
    },
    {
      id: "calm_mind",
      name: "Calm Mind",
      tags: ["mental", "defense"],
      modifiers: []
    }
  ],

  conditions: [
    {
      id: "blinded",
      name: "Blinded",
      summary: "-20% to Perception, Close Combat, and Ranged Combat tests.",
      modifiers: [
        { target: "skill.perception", operation: "add", value: -20 },
        { target: "skill.close_combat", operation: "add", value: -20 },
        { target: "skill.ranged_combat", operation: "add", value: -20 }
      ]
    },
    {
      id: "charmed",
      name: "Charmed",
      summary: "-10% to Insight, Persuasion, Deception, and Intimidation tests.",
      modifiers: [
        { target: "skill.insight", operation: "add", value: -10 },
        { target: "skill.persuasion", operation: "add", value: -10 },
        { target: "skill.deception", operation: "add", value: -10 },
        { target: "skill.intimidation", operation: "add", value: -10 }
      ]
    },
    {
      id: "deafened",
      name: "Deafened",
      summary: "-10% to Perception and hearing-based Initiative tests.",
      modifiers: [
        { target: "skill.perception", operation: "add", value: -10 }
      ]
    },
    {
      id: "exhausted",
      name: "Exhausted",
      summary: "-10% to all tests; movement reduced by 10 feet.",
      modifiers: [
        { target: "all_tests", operation: "add", value: -10 },
        { target: "derived.movement", operation: "add", value: -10 }
      ]
    },
    {
      id: "frightened",
      name: "Frightened",
      summary: "-10% to all tests while the source of fear is present.",
      modifiers: [
        { target: "all_tests", operation: "add", value: -10 }
      ]
    },
    {
      id: "incapacitated",
      name: "Incapacitated",
      summary: "Actions become 0 and Reaction becomes unavailable.",
      modifiers: [
        { target: "resource.actions", operation: "set", value: 0 },
        { target: "resource.reaction_available", operation: "set", value: 0 }
      ]
    },
    {
      id: "poisoned",
      name: "Poisoned",
      summary: "-10% to all tests.",
      modifiers: [
        { target: "all_tests", operation: "add", value: -10 }
      ]
    },
    {
      id: "restrained",
      name: "Restrained",
      summary: "Movement becomes 0; -10% to Dexterity-based skills and combat tests.",
      modifiers: [
        { target: "derived.movement", operation: "set", value: 0 },
        { target: "attribute_skill_group.dexterity", operation: "add", value: -10 },
        { target: "skill.close_combat", operation: "add", value: -10 },
        { target: "skill.ranged_combat", operation: "add", value: -10 }
      ]
    },
    {
      id: "shocked",
      name: "Shocked",
      summary: "-10% to Intelligence- and Wisdom-based tests; Reaction unavailable.",
      modifiers: [
        { target: "attribute_skill_group.intelligence", operation: "add", value: -10 },
        { target: "attribute_skill_group.wisdom", operation: "add", value: -10 },
        { target: "resource.reaction_available", operation: "set", value: 0 }
      ]
    },
    {
      id: "stunned",
      name: "Stunned",
      summary: "Actions become 0, Reaction unavailable, and -20% to all tests.",
      modifiers: [
        { target: "resource.actions", operation: "set", value: 0 },
        { target: "resource.reaction_available", operation: "set", value: 0 },
        { target: "all_tests", operation: "add", value: -20 }
      ]
    }
  ]
});

if (typeof module !== "undefined") {
  module.exports = { VOE_DATA };
}
