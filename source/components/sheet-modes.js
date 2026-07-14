const VOE_SHEET_MODES = Object.freeze({
  player: {
    id: "player",
    label: "Agent",
    tabs: ["agent", "protocols", "gear", "dossier", "rules"],
    sections: ["identity", "attributes", "skills", "defenses", "conditions", "combat", "contingency"]
  },
  npc: {
    id: "npc",
    label: "NPC",
    tabs: ["overview", "actions", "abilities", "notes"],
    sections: ["identity", "threat", "defenses", "actions", "traits", "conditions"]
  },
  creature: {
    id: "creature",
    label: "Creature",
    tabs: ["overview", "actions", "instincts", "notes"],
    sections: ["identity", "threat", "defenses", "actions", "instincts", "special_rules", "conditions"]
  }
});

const getSheetMode = mode => VOE_SHEET_MODES[mode] || VOE_SHEET_MODES.player;

if (typeof module !== "undefined") {
  module.exports = { VOE_SHEET_MODES, getSheetMode };
}
