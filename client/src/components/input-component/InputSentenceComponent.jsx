import React, {useState} from "react";
import axios from "axios";

// update 
// delete 

import styles from './InputSentenceComponent.module.css';

const InputSentenceComponent =  () =>  {
    const [sentence, setSentence] = useState(""); // make a default empty string state to avoid getting undefined objs 

    const handleInputChange = (event) => {
        setSentence(event.target.value);
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:5000/sentenceBank/sentence", {
            sentence,
          });
          console.log("Sentence successfully submitted!");
          // Optionally, you can reset the input field after successful submission
          setSentence("");
        } catch (error) {
          console.error("Failed to submit sentence:", error);
        }
    };


  return (
    <form class={styles.create_sentence} onSubmit={handleSubmit}>
      <div class={styles.sentence_form}>
          <h1>Create a Sentence</h1>
          <div class={styles.form_row}>
              <p><label for="text">Sentence:</label></p>
              <textarea
                class={styles.sentence_input}
                value={sentence}
                onChange={handleInputChange}
                placeholder="Enter your sentence"
                rows="4" cols="50"
              />
          </div>
          <button id={styles.sentence_submission} type="submit">Submit</button>
      </div>
    </form>
  );
};


export default InputSentenceComponent;


