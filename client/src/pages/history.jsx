import React, { useState, useEffect } from "react";
import CardComponent from "@/components/card-component/CardComponent";
import styles from '../styles/History.module.css';
import axios from 'axios';

export default function History() {
  const [gameStats, setGameStats] = useState([]);
  const [top3GameStats, setTop3GameStats] = useState([]);

  useEffect(() => {
    // Fetch game stats data from your backend API here
    // You can use fetch or axios to make the API request to getGameStats and getTop3GameStats endpoints
    // Once you have the data, set it in the state variables gameStats and top3GameStats
    // For example:
    axios.get("http://localhost:5000/home/game")
      .then((response) => {
        setGameStats(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch game stats:", error);
      });

    axios.get("http://localhost:5000/home/game/top3")
      .then((response) => {
        setTop3GameStats(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch top 3 game stats:", error);
      });
  }, []); // Make sure to provide the appropriate dependency array

  return (
    <div className={styles.container}>
      <h1>Previous Games</h1>

      {/* Container for Top Three Games */}
      <div className={styles.top_three}>
        <h4 className={styles.header}>Top Three Games</h4>
        <div className={styles.top_three_cards}>
          {top3GameStats.map((game, index) => (
            <CardComponent
              key={index}
              sentence={game.sentence}
              correctCharacters={game.correctcharacters}
              incorrectCharacters={game.incorrectcharacters}
              wpm={game.wpm}
              time={game.time}
            />
          ))}
        </div>
      </div>

      {/* Container for Other Games */}
      <div className={styles.other_games}>
        <h4 className={styles.header}>Other Games</h4>
        <div className={styles.other_cards}>
          {gameStats.map((game, index) => (
            <CardComponent
              key={index}
              sentence={game.sentence}
              correctCharacters={game.correctcharacters}
              incorrectCharacters={game.incorrectcharacters}
              wpm={game.wpm}
              time={game.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
