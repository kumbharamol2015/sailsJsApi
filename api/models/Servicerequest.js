module.exports = {
  attributes: {
    srNumber: {
      type: "string",
      required: true,
      unique: true,
    },
    siteId: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      defaultsTo: "",
    },
    status: {
      type: "string",
      isIn: ["New", "In Progress", "On Hold", "Completed", "Cancelled"],
      defaultsTo: "New",
    },
    priority: {
      type: "string",
      isIn: ["Low", "Medium", "High", "Critical"],
      defaultsTo: "Medium",
    },
    assignedTo: {
      type: "string",
    },
    notes: {
      type: "string",
    },
  },
};
