"use strict";

// routes/gameRoutes.js
var express = require('express');

var router = express.Router();

var gameController = require('../controllers/gameController'); // Define routes


router.get('/game', gameController.getGameStats);
router.post('/game', gameController.createGameStats);
module.exports = router;