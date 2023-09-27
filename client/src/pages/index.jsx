import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import acmLogo from '../assets/acmlogo.png';
// Navigation in Next.js is slightly different from react. 
// Look at: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating


function Home() {
  return (
    // Next uses Link component for prefetching and client-side navigation
    // which extends the <a> element
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to HackRacer!!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to add a new sentence. 
              Then you can go over to <i>Play Game</i> to start playing the game.
          </p>
      </div>
      <div className={styles.image}><Image src={acmLogo} width={384} height={384} alt="acmlogo"/>
      </div>
    </div>
  );
}

export default Home;
