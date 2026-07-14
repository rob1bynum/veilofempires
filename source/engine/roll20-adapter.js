/*
 * Roll20 boundary layer.
 *
 * During the next milestone, this adapter will replace direct references to
 * HERITAGES, SPECIALTIES, PROTOCOLS, and CONDITIONS in the legacy worker.
 */

const VOE_ROLL20_FIELDS = Object.freeze({
  heritage: "heritage",
  specialty: "specialty",
  protocols: ["protocol_slot_1", "protocol_slot_2", "protocol_slot_3"],
  conditionPrefix: "condition_",
  movementBase: "speed_base",
  healthBase: "health_base"
});

const collectSelectionFields = data => [
  VOE_ROLL20_FIELDS.heritage,
  VOE_ROLL20_FIELDS.specialty,
  ...VOE_ROLL20_FIELDS.protocols,
  ...data.conditions.map(condition => `${VOE_ROLL20_FIELDS.conditionPrefix}${condition.id}`)
];

const valuesToSelections = (data, values) => ({
  heritage: values[VOE_ROLL20_FIELDS.heritage] || "",
  specialty: values[VOE_ROLL20_FIELDS.specialty] || "",
  protocols: VOE_ROLL20_FIELDS.protocols.map(key => values[key]).filter(Boolean),
  conditions: data.conditions
    .filter(condition => String(values[`${VOE_ROLL20_FIELDS.conditionPrefix}${condition.id}`]) === "1")
    .map(condition => condition.id)
});

const buildRoll20Updates = result => {
  const updates = {
    speed: result.movement,
    health_max: result.healthMax,
    actions_current: result.actions,
    reaction_available: result.reactionAvailable ? 1 : 0,
    engine_diagnostics: result.diagnostics.join("\n")
  };

  Object.entries(result.attributes).forEach(([id, value]) => {
    updates[id] = value;
  });

  Object.entries(result.skills).forEach(([id, value]) => {
    updates[`${id}_total`] = value;
  });

  return updates;
};

if (typeof module !== "undefined") {
  module.exports = {
    VOE_ROLL20_FIELDS,
    collectSelectionFields,
    valuesToSelections,
    buildRoll20Updates
  };
}
