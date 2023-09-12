import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
          <h2>Welcome to HackRacer!!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to log a new purchase. 
              Then you can go over to <i>Play Game</i> to view the purchases.
          </p>
      </div>
      <div className={styles.image}><Image src={"/acmlogo.png"} width={384} height={384} alt="acmlogo"/>
      </div>
    </main>
  )
}