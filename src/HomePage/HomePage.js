import AboutUs from "./AboutUs";
import HomePageHeroContent from "./HomePageHeroContent";
import "../styles/HeroContent.css";
const HomePage = ({ setActiveTab }) => {
  return (
    <>
      <HomePageHeroContent setActiveTab={setActiveTab} />
      <AboutUs />
    </>
  );
};

export default HomePage;
