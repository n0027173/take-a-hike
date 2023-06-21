import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import MountainDetails from "./MountainDetails";
import NationalParks from "./NationalParks";
import HeroContent from "./HeroContent";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  function renderContent(activeTab) {
    switch (activeTab) {
      case "Home":
        return (
          <HeroContent setActiveTab={setActiveTab} activeTab={activeTab} />
        );
      case "Mountains":
        return (
          <MountainDetails setActiveTab={setActiveTab} activeTab={activeTab} />
        );
      case "National Parks":
        return (
          <NationalParks setActiveTab={setActiveTab} activeTab={activeTab} />
        );
      default:
        return (
          <HeroContent setActiveTab={setActiveTab} activeTab={activeTab} />
        );
    }
  }

  return (
    <div>
      <header>
        <NavBar setActiveTab={setActiveTab} />
        {/* <HeroContent /> */}
      </header>
      {/* <MountainDetails />
      <NationalParks /> */}
      {renderContent(activeTab)}
    </div>
  );
}

export default App;
