import React, { useState } from "react";
import "./styles/App.css";
import NavBar from "./NavBar/NavBar";
import MountainPage from "./MountainPage";
import NationalParksPage from "./NationalParksPage";
import HomePageHeroContent from "./HomePageHeroContent";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  function renderContent(activeTab) {
    switch (activeTab) {
      case "Home":
        return <HomePageHeroContent setActiveTab={setActiveTab} />;
      case "Mountains":
        return <MountainPage setActiveTab={setActiveTab} />;
      case "National Parks":
        return <NationalParksPage setActiveTab={setActiveTab} />;
      default:
        return <HomePageHeroContent setActiveTab={setActiveTab} />;
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
