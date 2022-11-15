import Navbar from './Components/Navbar';
import Router from './Router';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mainImage from './asset/image/main_bg.svg';

function App() {
  AOS.init();

  return (
    <div className="App">
      <div className="main_bg_image_container">
        <img src={mainImage} alt="Cosmonaut" className='main_bg_image' />
        <div className="app_navigation_bar">
          <Navbar />
        </div>
        <div className="routes">
          <Router />
        </div>
      </div>
      <div className="app_footer"></div>
    </div>
  );
}

export default App;
