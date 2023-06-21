import "./HeroContent.css";
import "./MountainDetails";

const MountainDetailsHeroContent = () => {
  const handleClick = () => {};

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore Mountains</h1>
        <h2 className="hero-subtitle">
          We offer the best adventure holidays and tailor-made trips!
        </h2>
        <button type="button" className="hero-button" onClick={handleClick()}>
          Explore Mountains &raquo;
        </button>
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="hero-button" onClick={handleClick()}>
          Explore National Parks &raquo;
        </button>
      </div>
    </section>
  );
};

export default MountainDetailsHeroContent;
