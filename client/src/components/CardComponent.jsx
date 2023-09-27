import React from "react";
import styles from "./CardComponent.module.css";

const CardComponent = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardheading}>Game 1</h3>
      <p className={styles.cardcontent}>
        <b>Sentence:</b> 
      </p>
      <p className={styles.cardcontent}>
        <b>Correct Characters:</b> 
      </p>
      <p className={styles.cardcontent}>
        <b>Incorrect Characters:</b> 
      </p>
      <p className={styles.cardcontent}>
        <b>Words Per Minute:</b> 
      </p>
      <p className={styles.cardcontent}>
        <b>Time (in mins):</b> 
      </p>
    </div>
  );
};

export default CardComponent;
