import './HeroContent.css';
import './MountainDetails';

const HeroContent = () => {
    return (
        <section className="hero">
        <div className="hero-content">
                <h1 className="hero-title">Take a Hike and Discover the World!</h1>
                        
                <h2 className="hero-subtitle">We offer the best adventure holidays and tailor-made trips!</h2>
                        
                <button type="button" className="hero-button" onClick="">
                Explore Mountains &raquo;
                </button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="hero-button" onClick="">
                Explore National Parks &raquo;
                </button>

        </div>
        </section>
 )
}
 
export default HeroContent;