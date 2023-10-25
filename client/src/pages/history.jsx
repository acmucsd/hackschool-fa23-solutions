import CardComponent from "@/components/game-history-component/gameHistory";
import styles from "../styles/History.module.css";

export default function History() {
  return (
    <div className={styles.container}>
      <h1>Previous Games</h1>

      {/* Container for Top Three Games */}
      <div className={styles.top_three}>
        <h4 className={styles.header}>Top Three Games</h4>
        <div className={styles.top_three_cards}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>

      {/* Container for All Games */}
      <div className={styles.all_games}>
        <h4 className={styles.header}> All Games</h4>
        <div className={styles.all_cards}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
