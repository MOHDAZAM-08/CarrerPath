import './App.css';
import Explore from './component/Explore';
import LandingPage from './component/LandingPage';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Explore/>
    </div>
  );
}

export default App;
