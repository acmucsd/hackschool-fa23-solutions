import '@/styles/globals.css';
import NavBar from '@/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )
}
