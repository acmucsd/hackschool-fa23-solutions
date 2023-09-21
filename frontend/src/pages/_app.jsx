import '../styles/globals.css';
import NavBar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )
}