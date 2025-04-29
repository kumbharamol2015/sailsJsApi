module.exports = {
  // Get all service requests
  async find(req, res) {
    try {
      const serviceRequests = await Servicerequest.find();
      return res.json(serviceRequests);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Get single service request by ID
  async findOne(req, res) {
    try {
      const id = req.params.id;
      const serviceRequest = await Servicerequest.findOne({ id });
      if (!serviceRequest) return res.notFound();
      return res.json(serviceRequest);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // api/controllers/ServiceRequestController.js

  async createOrUpdate(req, res) {
    try {
      const values = req.body;

      // Define the unique key or condition that must be checked
      const existingRecord = await ServiceRequest.findOne({
        uniqueField: values.uniqueField, // change this to your actual unique field
      });

      if (existingRecord) {
        // If record exists, update it
        const updated = await ServiceRequest.updateOne({
          id: existingRecord.id,
        }).set(values);
        return res.ok(updated);
      } else {
        // Otherwise, create new
        const created = await ServiceRequest.create(values).fetch();
        return res.ok(created);
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Create new service request
  async create(req, res) {
    try {
      const serviceRequest = await Servicerequest.create(req.body).fetch();
      return res.json(serviceRequest);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Update existing service request
  async update(req, res) {
    try {
      const id = req.params.id;
      const serviceRequest = await Servicerequest.updateOne({ id }).set(
        req.body
      );
      if (!serviceRequest) return res.notFound();
      return res.json(serviceRequest);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Delete service request
  async destroy(req, res) {
    try {
      const id = req.params.id;
      const deleted = await Servicerequest.destroyOne({ id });
      if (!deleted) return res.notFound();
      return res.json({ message: "Deleted successfully" });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
