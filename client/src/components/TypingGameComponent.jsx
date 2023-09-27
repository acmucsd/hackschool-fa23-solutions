/**
 * useEffect : (i) lets you synchronize a component with an external system (lmao)
 *             (ii) we will be using it to check game completion conditions
 * useCallback : (i) prevents component from re-rendering unless props have changed
 *              (ii) used to calculate score
 */
import React, { useEffect, useCallback, useState } from "react";
import useTypingGame, {PhaseType} from "react-typing-game-hook"; // for playing the game
import axios from "axios"; // to make HTTP requests to the backend
import styles from "./TypingGameComponent.module.css";
console.log("Rendering the Typing Game component...");

const sentenceData = ["Joining the ACM club was the best decision I made in college!",
"ACM club members collaborated on a challenging software development project",
"ACM Hack is hosting a React workshop :O", "ChatGPT helped me write these sentences, possibly :)"];

const TypingGameComponent = () => {
  const [gameStarted, setGameStarted] = useState(false); // checks if the game has begun
  const [statsObject, setStatsObject] = useState(null); // ensures object is not undefined
  const [selectedSentence, setSelectedSentence] = useState(sentenceData[0]); // sentence for typing game
 
  // useTypingGame to keep track of, and modify chars being typed and other stuff
  const {
    states: { chars, charsState, phase, correctChar, errorChar},
    actions: { insertTyping, resetTyping, deleteTyping, getDuration },
  } = useTypingGame(selectedSentence, {
    skipCurrentWordOnSpace: true,
    pauseOnError: false,
    countErrors: "everytime",
  });

  // Axios for communicating with the backend (i.e. sending game stats)
  // Endpoint: 'http://localhost:5000/home/game'
  const sendGameStats = async (stats) => {
    try {
      console.log("sending game stats to the backend");
      // Make a POST request to create/update the game stats document
      await axios.post("http://localhost:5000/home/game", stats);
      console.log("Game stats created/updated:", stats);
    } catch (error) {
      console.error("Failed to create/update game stats:", error);
    }
  };

  // triggered when start button is clicked
  // updates setGameStart
  const handleGameStart = () => {
    console.log("handleGameStart triggered");
    if (phase === PhaseType.NotStarted) {
      console.log(phase)
      resetTyping();
      setGameStarted(true); // game started == trye 
    }
  };


  const calculateWPM = useCallback(() => {
    console.log("calculating words per min...");
    let numWords = selectedSentence.split(" ").length;
    let time = (getDuration()/ 1000)/60;
    console.log("number of words: " + numWords);
    console.log("duration in mins: " + time)
    return numWords / time; // i think this is wrong lol 
  }, [getDuration, selectedSentence])

  // if the game has ended, we send the game stats to the DB 
  const handleGameEnd = useCallback(() => {
    if (phase === PhaseType.Ended) {
      console.log(getDuration());
      let stats = { 
        sentence: chars, 
        correctcharacters: correctChar, // number of correct words 
        incorrectcharacters: errorChar,
        wpm: calculateWPM(),
        time: (getDuration()/ 1000)/60, // miliseconds --> mins 
      }
      sendGameStats(stats); // the axios request 
      setStatsObject(stats); // this will be used to print the object on the screen
    }
  }, [chars, correctChar, errorChar, calculateWPM ,getDuration, phase]);

  /**
   * Checking for game completion conditions:
   * Complete iff:
   *        - Currently, gameStarted  === true
   *        - on the n+1th character
   */
  useEffect(() => {
    if (phase === PhaseType.Started && charsState.length === chars.length + 1) {
      handleGameEnd();
    }
  }, [phase, chars.length, handleGameEnd, charsState.length]);

  // here, we render the game
  return (
    <div className={styles.typing_game}>
      { !gameStarted ?  (
        <div className={styles.start_game}>
          <div className={styles.sentence_dropdown}>
            <h3 className={styles.sentence_label}>Select a sentence</h3>
            <select name="sentence-select" 
            id={styles.sentence_selector}
            onChange={(e) => setSelectedSentence(e.target.value)}>
                {sentenceData.map((sentence, index) => (
                    <option key={index}>{sentence}</option>
                ))}
            </select>
        </div>
          <button className={styles.start_button} onClick={handleGameStart}>Start</button>
        </div>
      ) : (
        <div className={styles.typing_component}>
        <h2 
          onKeyDown={(e) => {
            // call different functions based on the key clicked
            const key = e.key;
            if (key === "Escape") {
              // we can potentially change it from escape char to a button lmk tho
              resetTyping();
            } else if (key === "Backspace") {
              deleteTyping(false);
            } else if (key.length === 1) {
              insertTyping(key);
            }
            // preventDefault makes sure that the keys dont do what they normally do, and instead
            // execute the functions that we have specified above
            e.preventDefault();
          }}
          tabIndex={0}
          onBlur={handleGameEnd} // when the user clicks away from the component (which is in <h1> rn)
        >
          {chars.split("").map((char, index) => {
            let state = charsState[index]; // check state at curr pos
            // if not done -> black
            // if correct -> green
            // else red
            // **lmk if it wud be better to do a regular if statement instead... this is just short **
            let color = state === 0 ? "#292F36" : state === 1 ? "#417B5A" : "#FF6B6B";
            return (
              <span key={char + index} style={{ color }}>
                {char}
              </span>
            );
          })}
        </h2>
        </div>
      )}
      {statsObject && ( // Check if statsObject is not null before displaying it
        <div className={styles.stats}>
          <h3 className={styles.stat_header}>Stats:</h3>
          <p><b>Sentence:</b> {statsObject.sentence}</p>
          <p><b>Correct Characters:</b> {statsObject.correctcharacters}</p>
          <p><b>Incorrect Characters:</b> {statsObject.incorrectcharacters}</p>
          <p><b>Words Per Minute:</b> {statsObject.wpm}</p>
          <p><b>Time (in mins):</b> {statsObject.time}</p>
        </div>
      )}
    </div>
  );
};

// exporting the typing game component here
export default TypingGameComponent;

// wooooo
