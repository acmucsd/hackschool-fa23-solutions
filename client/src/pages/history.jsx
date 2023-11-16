import React, { useState, useEffect } from "react";
import CardComponent from "@/components/card-component/CardComponent";
import styles from "../styles/History.module.css";
import axios from "axios";

export default function History() {
  const [gameStats, setGameStats] = useState([]);
  // const [top3GameStats, setTop3GameStats] = useState([]);

  // Fetch game stats data from your backend API here
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/game");
      setGameStats(response.data);
    }
    catch(error) {
        console.error("Failed to fetch game stats:", error);
    };
  }

  useEffect(() => {

    fetchData();

    // API.getTopThreeGameStats().then((response) => {
    //     setTop3GameStats(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Failed to fetch top 3 game stats:", error);
    //   });
  }, []); // Make sure to provide the appropriate dependency array

  return (
    <div className={styles.container}>
      <h1>Previous Games</h1>

      {/* Container for Top Three Games */}
      {/* <div className={styles.top_three}>
        <h4 className={styles.header}>Top Three Games</h4>
        <div className={styles.top_three_cards}>
          {top3GameStats.map((game, index) => (
            <CardComponent
              key={index}
              sentence={game.sentence}
              correctCharacters={game.correctCharacters}
              incorrectCharacters={game.incorrectCharacters}
              wpm={game.wpm}
              time={game.time}
            />
          ))}
        </div>
      </div> */}

      {/* Container for Other Games */}
      <div className={styles.all_games}>
        <h4 className={styles.header}>All Games</h4>
        <div className={styles.all_cards}>
          {gameStats.map((game, index) => (
            <CardComponent
              key={index} {...game}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
