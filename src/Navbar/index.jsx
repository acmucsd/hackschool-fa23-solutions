import Link from 'next/link';
import styles from './style.module.css';

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div id={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">HackRacer</Link>
            </div>
            <div className={styles.nav_buttons}>
                <Link href="/CreateSentence">Add Sentence</Link>
                <Link href="/TypingGame">Play Game</Link>
            </div>
        </div>
    )
}

export default NavBar;