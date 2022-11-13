import Navbar from './Components/Navbar';
import Router from './Router';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();

  return (
    <div className="App">
      <div className="app_navigation_bar">
        <Navbar />
      </div>
      <div className="routes">
        <Router />
      </div>
      <div className="app_footer"></div>
    </div>
  );
}

export default App;
