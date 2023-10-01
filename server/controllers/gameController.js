// controllers/gameController.js
// Note: These API requests dont actually save stuff/fetch from the database. These are stubs
const GameStats = require("../models/gameStats");

// Controller functions
// simply get all game stats
const getGameStats = async (req, res) => {
  try {
    // for now, we will be returning an array of game stats objects  
    const gameStats = [
      {
        sentence: "This is sentence 1!",
        correctcharacters: 10,
        incorrectcharacters: 2,
        wpm: 45.23,
        time: 25,
      },
      {
        sentence: "This is sentence 2!",
        correctcharacters: 11,
        incorrectcharacters: 3,
        wpm: 55.01,
        time: 25,
      },
      {
        sentence: "This is sentence 3!",
        correctcharacters: 12,
        incorrectcharacters: 4,
        wpm: 22.87,
        time: 25,
      },
      {
        sentence: "This is sentence 4!",
        correctcharacters: 13,
        incorrectcharacters: 5,
        wpm: 1999.2,
        time: 25,
      },
    ];
    
    // console.log(res.json(gameStats)); // print the array of gamestats 
    res.status(200).json({ gameStats });
  } catch (error) {
    // if there is an error, we print an error message with error code 500
    res.status(500).json({ error: "Failed to retrieve game stats" });
  }
};


// Creating/Posting a new gamestats object 
const createGameStats = async (req, res) => {

  try {
    const {gamestat} = {}
    res.json(newGameStats);
  } catch (error) {
    // or throw error
    res.status(500).json({ error: "Failed to create a new gamestat object " });
  }
};


module.exports = { getGameStats, createGameStats }