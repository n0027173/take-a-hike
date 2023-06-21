
import './App.css';
import NavBar from './NavBar/NavBar';
import MountainDetails from './MountainDetails';
import NationalParks from './NationalParks';
import HeroContent from './HeroContent';

function App() {
  return (
    <div>
      <header>
        <NavBar /> 
        <HeroContent />
      </header>
      {/* <MountainDetails /> */}
      {/* <NationalParks /> */}
    </div>
  );
}

export default App;
