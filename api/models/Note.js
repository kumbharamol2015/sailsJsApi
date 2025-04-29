module.exports = {
  attributes: {
    srId: {
      model: "servicerequest",
      required: false, // <-- Make it optional
    },
    note: {
      type: "string",
      required: true,
    },
    createdBy: {
      type: "string",
    },
  },
};
