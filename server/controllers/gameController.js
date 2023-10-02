// controllers/gameController.js
// Note: These API requests dont actually save stuff/fetch from the database. These are stubs
const GameStats = require("../models/gameStats");

// GET all gameStats 
const getGameStats = async (req, res) => {
  try {
    const gameStats = await GameStats.find();
    res.json(gameStats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve game stats' });
  }
};


const getTop3GameStats = async (req, res) => {
  try {
    const top3GameStats = await GameStats.find().sort({wpm: -1}).limit(3);
    res.json(top3GameStats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve top 3 game stats' });
  }
};

// CREATES a new gameStats object in the MongoDB database 
const createGameStats = async (req, res) => {
  try {
    // Create a new game stats document in the database
    const newGameStats = await GameStats.create(req.body);
    res.json(newGameStats);
  } catch (error) { // or throw weeor 
    res.status(500).json({ error: 'Failed to create game stats' });
  }
};


module.exports = { getGameStats, createGameStats, getTop3GameStats }