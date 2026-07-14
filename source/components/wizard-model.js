const VOE_WIZARD = Object.freeze({
  version: 1,
  steps: [
    {
      id: "identity",
      title: "Identity",
      required: ["character_name"],
      fields: ["character_name", "player_name", "origin"]
    },
    {
      id: "heritage",
      title: "Choose Heritage",
      required: ["heritage"],
      source: "heritages"
    },
    {
      id: "specialty",
      title: "Choose Specialty",
      required: ["specialty"],
      source: "specialties"
    },
    {
      id: "attributes",
      title: "Assign Attributes",
      required: ["attribute_points_complete"],
      source: "attributes"
    },
    {
      id: "protocols",
      title: "Choose Protocols",
      required: ["protocol_slot_1"],
      source: "protocols"
    },
    {
      id: "equipment",
      title: "Select Equipment",
      required: [],
      source: "equipment"
    },
    {
      id: "review",
      title: "Review Agent",
      required: ["wizard_confirmed"]
    }
  ]
});

const getWizardStep = stepId =>
  VOE_WIZARD.steps.find(step => step.id === stepId) || VOE_WIZARD.steps[0];

const validateWizardStep = (step, values) => ({
  valid: (step.required || []).every(field => {
    const value = values[field];
    return value !== undefined && value !== null && value !== "" && value !== "0";
  }),
  missing: (step.required || []).filter(field => {
    const value = values[field];
    return value === undefined || value === null || value === "" || value === "0";
  })
});

if (typeof module !== "undefined") {
  module.exports = { VOE_WIZARD, getWizardStep, validateWizardStep };
}
