'use client'
import React, {useState} from "react";
import useTypingGame, {PhaseType} from "react-typing-game-hook"; // for playing the game
import styles from './style.module.css';

const TypingGameComponent = () => {
  // here, we render the game
    const sentenceData = ["Joining the ACM club was the best decision I made in college!",
"ACM club members collaborated on a challenging software development project",
"ACM Hack is hosting a React workshop :O", "ChatGPT helped me write these sentences, possibly :)"];

    const [selectedSentence, setSelectedSentence] = useState(sentenceData[0]);
    const [startGame, setStartGame] = useState(false);
    const [statsObject, setStatsObject] = useState(null);
    const {
      states: { chars, charsState, phase, correctChar, errorChar},
      actions: { insertTyping, resetTyping, deleteTyping, getDuration }
    } = useTypingGame(selectedSentence, {
      skipCurrentWordOnSpace: true,
      pauseOnError: false,
      countErrors: "everytime",
    });

    const handleKey = (key) => {
      if (key === "Escape") {
        resetTyping();
        return;
      }
      if (key === "Backspace") {
        deleteTyping(false);
        return;
      }
      if (key.length === 1) {
        insertTyping(key);
      }
    };

    const calculateWPM = () => {
      let numWords = selectedSentence.split(" ").length;
      let time = (getDuration()/ 1000)/60;
      return numWords / time; 
    }

    const handleGameStart = () => {
        if (statsObject){
            setStatsObject(null);
        }
        setStartGame(true);
    }

    const handleGameEnd = () => {
      if (phase === PhaseType.Ended) {
        console.log(getDuration());
        let stats = { 
          sentence: chars, 
          correctcharacters: correctChar, // number of correct words 
          incorrectcharacters: errorChar,
          wpm: calculateWPM(),
          time: (getDuration()/ 1000)/60, // miliseconds --> mins 
        }
        console.log(stats);
        setStatsObject(stats);
      }
    }

  return (
    <div className={styles.typing_game}>
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
        <div className={styles.start_game}>
          <button className={styles.start_button} onClick={handleGameStart}>Start Game</button>
        </div>
        {startGame && (
          // Only loads component when startGame is true
        <div className={styles.typing_component}>
            <h2
            onKeyDown={(e) => {
              // call different functions based on the key clicked
              handleKey(e.key);
              // preventDefault makes sure that the keys dont do what they normally do, and instead
              // execute the functions that we have specified above
              e.preventDefault();
            }}
            tabIndex={0}
            onBlur={handleGameEnd} // when the user clicks away from the component
          >
            {selectedSentence.split("").map((char, index) => {
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
          <h3>Stats:</h3>
          <p>Sentence: {statsObject.sentence}</p>
          <p>Correct Characters: {statsObject.correctcharacters}</p>
          <p>Incorrect Characters: {statsObject.incorrectcharacters}</p>
          <p>Words Per Minute: {statsObject.wpm}</p>
          <p>Time (in mins): {statsObject.time}</p>
        </div>
      )}
    </div>
  );
};

// exporting the typing game component here
export default TypingGameComponent;