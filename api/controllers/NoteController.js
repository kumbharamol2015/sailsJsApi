module.exports = {
  // Add a new note to a service request
  async create(req, res) {
    try {
      const { srId, note, createdBy } = req.body;

      if (!note) {
        return res.badRequest({ message: "Note is required." });
      }

      // Optional: validate srId if provided
      if (srId) {
        const srExists = await Servicerequest.findOne({ id: srId });
        if (!srExists) {
          return res.notFound({ message: "Service Request not found." });
        }
      }

      const newNote = await Note.create({
        srId: srId || null,
        note,
        createdBy,
      }).fetch();

      return res.ok(newNote);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // GET /api/notes - Get all notes for all service requests
  async find(req, res) {
    try {
      const notes = await Note.find().sort("createdAt DESC");
      return res.ok(notes);
    } catch (err) {
      return res.serverError(err);
    }
  },
  // GET /api/notes/search?keyword=yourText
  async search(req, res) {
    try {
      const keyword = req.query.keyword;

      let notes = [];

      if (keyword && keyword.trim() !== "") {
        notes = await Note.find({
          note: { contains: keyword.trim() },
        }).sort("createdAt DESC");
      } else {
        // If no keyword provided, return all
        notes = await Note.find().sort("createdAt DESC");
      }

      return res.ok(notes);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Get all notes for a specific service request
  async findBySrId(req, res) {
    try {
      const { srId } = req.params;

      const notes = await Note.find({ srId }).sort("createdAt DESC");
      return res.ok(notes);
    } catch (err) {
      return res.serverError(err);
    }
  },
};
