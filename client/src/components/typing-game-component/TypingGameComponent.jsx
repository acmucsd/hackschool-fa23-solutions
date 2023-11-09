import React, {useState } from "react";
import useTypingGame, {PhaseType} from "react-typing-game-hook"; // for playing the game
import styles from "./TypingGameComponent.module.css";
// d
const sentenceData = [
  "The sun rose over the horizon, casting a warm golden glow.",
  "She sipped her coffee and watched the raindrops dance on the windowpane.",
  "The old oak tree stood tall and majestic in the middle of the field.",
  "The cat curled up on the windowsill, purring contentedly.",
  "In the quiet of the night, the stars twinkled like diamonds in the sky.",
  "The aroma of freshly baked bread wafted through the air.",
  "He gazed at the old photo, lost in memories of days gone by.",
  "The waves crashed against the rocky shore, creating a soothing melody.",
  "The laughter of children echoed through the park as they played.",
  "The detective examined the clues carefully, searching for answers.",
  "She opened the dusty book and was transported to a different world.",
  "The cityscape glittered with lights as night fell.",
  "The chef carefully seasoned the dish with a pinch of salt.",
  "The hiker reached the summit and marveled at the breathtaking view.",
  "The clock ticked relentlessly, marking the passage of time.",
];

const TypingGameComponent = () => {
  const [gameStarted, setGameStarted] = useState(false); // checks if the game has begun
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

  // triggered when start button is clicked
  // updates setGameStart
  const handleGameStart = () => {
    console.log("handleGameStart triggered");
    if (phase === PhaseType.NotStarted) {
      console.log(phase);
      resetTyping();
      setGameStarted(true); // set gameStarted to true
    }
  };

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
          <div>
            <h2>{selectedSentence}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

// exporting the typing game component here
export default TypingGameComponent;

// wooooo
