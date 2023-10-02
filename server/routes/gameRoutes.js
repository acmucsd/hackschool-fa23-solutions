// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Define routes
router.get('/game', gameController.getGameStats);
router.get('/game/top3', gameController.getTop3GameStats);
router.post('/game', gameController.createGameStats);

module.exports = router;