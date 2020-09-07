const express = require('express');
const routes = express.Router();

const FieldController = require("./controllers/FieldController");
const FarmController = require("./controllers/FarmController");
const HarvestController = require("./controllers/HarvestController");
const MillController = require("./controllers/MillController");

routes.get('/fields', FieldController.index);
routes.post('/fields', FieldController.create);

routes.get('/farms', FarmController.index);
routes.post('/farms', FarmController.create);

routes.get('/harvests', HarvestController.index);
routes.post('/harvests', HarvestController.create);

routes.get('/mills', MillController.index);
routes.post('/mills', MillController.create);
  
module.exports = routes;