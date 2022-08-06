import '../styles/app.scss';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/helloworld.scss';
import '../styles/about.scss';
import '../styles/projects.scss';
import '../styles/contact.scss';
import Navbar from '../components/navbar';


function MyApp({ Component, pageProps }) {
  return (<div>
     <Navbar />
    <Component {...pageProps} />
 
  </div>)
}

export default MyApp
