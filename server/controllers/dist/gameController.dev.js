"use strict";

// controllers/gameController.js
// Note: These API requests dont actually save stuff/fetch from the database. These are stubs
var GameStats = require("../models/gameStats"); // Controller functions
// simply get all game stats


exports.getGameStats = function _callee(req, res) {
  var gameStats;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            // for now, we will be returning an array of game stats objects  
            gameStats = [{
              sentence: "This is sentence 1!",
              correctcharacters: 10,
              incorrectcharacters: 2,
              wpm: 45.23,
              time: 25
            }, {
              sentence: "This is sentence 2!",
              correctcharacters: 11,
              incorrectcharacters: 3,
              wpm: 55.01,
              time: 25
            }, {
              sentence: "This is sentence 3!",
              correctcharacters: 12,
              incorrectcharacters: 4,
              wpm: 22.87,
              time: 25
            }, {
              sentence: "This is sentence 4!",
              correctcharacters: 13,
              incorrectcharacters: 5,
              wpm: 1999.2,
              time: 25
            }];
            console.log(res.json(gameStats)); // print the array of gamestats 
          } catch (error) {
            // if there is an error, we print an error message with error code 500
            res.status(500).json({
              error: "Failed to retrieve game stats"
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Creating/Posting a new gamestats object 


exports.createGameStats = function _callee2(req, res) {
  var _ref, gamestat;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            _ref = {}, gamestat = _ref.gamestat;
            res.json(newGameStats);
          } catch (error) {
            // or throw error
            res.status(500).json({
              error: "Failed to create a new gamestat object "
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};