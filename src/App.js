
import './App.css';
import NavBar from './NavBar/NavBar';
import MountainDetails from './MountainDetails';
import NationalParks from './NationalParks';

function App() {
  return (
    <div>
      <header>
        <NavBar /> 

      </header>
      <MountainDetails />
      <NationalParks />
    </div>
  );
}

export default App;
