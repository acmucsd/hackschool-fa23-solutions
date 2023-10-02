import React from "react";
import styles from "./CardComponent.module.css";

const CardComponent = ({ sentence, correctCharacters, incorrectCharacters, wpm, time }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardheading}>Game 1</h3>
      <p className={styles.cardcontent}>
        <b>Sentence: </b> {sentence}
      </p>
      <p className={styles.cardcontent}>
        <b>Correct Characters:</b> {correctCharacters}
      </p>
      <p className={styles.cardcontent}>
        <b>Incorrect Characters:</b> {incorrectCharacters}
      </p>
      <p className={styles.cardcontent}>
        <b>Words Per Minute:</b> {wpm}
      </p>
      <p className={styles.cardcontent}>
        <b>Time (in mins):</b> {time}
      </p>
    </div>
  );
};

export default CardComponent;
