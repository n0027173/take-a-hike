import React, { useState } from "react";
import "./styles/App.css";
import NavBar from "./NavBar/NavBar";
import MountainPage from "./MountainsPage/MountainPage";
import NationalParksPage from "./NationalParksPage/NationalParksPage";
import HomePage from "./HomePage/HomePage";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  function renderContent(activeTab) {
    switch (activeTab) {
      case "Home":
        return <HomePage setActiveTab={setActiveTab} />;
      case "Mountains":
        return <MountainPage setActiveTab={setActiveTab} />;
      case "National Parks":
        return <NationalParksPage setActiveTab={setActiveTab} />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  }

  return (
    <div>
      <header>
        <NavBar setActiveTab={setActiveTab} />
      </header>
      {renderContent(activeTab)}
    </div>
  );
}

export default App;
