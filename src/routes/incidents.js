const express = require("express");
const IncidentControllers = require("../controllers/incidents");


const api = express.Router();
api.post('/createIncident', IncidentControllers.createIncident)
api.get('/holaMundo', IncidentControllers.holaMundo);
api.get('/getIncidents', IncidentControllers.getIncidents);
api.get('/getIncidentsBySeverity', IncidentControllers.getIncidentsBySeverity);
api.get('/getIncidentsByStatus', IncidentControllers.getIncidentsByState);
api.get('/updateIncident', IncidentControllers.updateIncident);
api.delete('/deleteIncident', IncidentControllers.deleteIncident);
 

module.exports = api;