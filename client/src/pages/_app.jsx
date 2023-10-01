import '../styles/globals.css';
import NavBar from '../components/navbar/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )
}