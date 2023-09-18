// controllers/gameController.js
// Note: These API requests dont actually save stuff/fetch from the database. These are stubs 
const GameStats = require('../models/gameStats');

// Controller functions

// simply get all game stats
exports.getGameStats = async (req, res) => {
  try {
    const gameStats = {
        sentence: "Hack school 2023",
        correctcharacters: 16,
        incorrectcharacters: 0,
        wpm : 1234,
        time: 25
    }
    res.json(gameStats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve game stats' });
  }
};


// get by id? 

// create a new doc 
exports.createGameStats = async (req, res) => {
  try {
    // Create a new game stats document in the database
    const newGameStats = {
        sentence: "Hack school 2023",
        correctcharacters: 0,
        incorrectcharacters: 0,
        wpm : 0,
        time:0
    }
    res.json(newGameStats);
  } catch (error) { // or throw error
    res.status(500).json({ error: 'Failed to create game stats' });
  }
};


// dont really need this rn but i have this just in case we wanna add features 
// exports.updateGameStats = async (req, res) => {
//   try {
//     // Update the game stats document in the database
//     const updatedGameStats = await GameStats.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedGameStats);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update game stats' });
//   }
// };