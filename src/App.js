
import './App.css';
import NavBar from './NavBar/NavBar';
import MountainDetails from './MountainDetails';
import NationalParks from './NationalParks';

function App() {
  return (
    <div>
      <header>
      <NavBar />  

      {/** Main - Image */}

        <MountainDetails />
        <NationalParks />
      </header>
    </div>
  );
}

export default App;
