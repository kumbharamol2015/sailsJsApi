/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

// config/routes.js
module.exports.routes = {
  "GET /api/servicerequests": "ServicerequestController.find",
  "GET /api/servicerequests/:id": "ServicerequestController.findOne",
  "POST /api/servicerequests": "ServicerequestController.create",
  "PUT /api/servicerequests/:id": "ServicerequestController.update",
  "DELETE /api/servicerequests/:id": "ServicerequestController.destroy",
  "POST /api/notes": "NoteController.create",
  "GET /api/notes/:srId": "NoteController.findBySrId",
  "GET /api/notes": "NoteController.find",
  "GET /api/notes/search": "NoteController.search",
};
