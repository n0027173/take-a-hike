import './HeroContent.css';

const HeroContent = () => {
    return (
        <section class="hero">

        <div class="hero-content">

        <h1 class="hero-title">
                Discover the World
        </h1>
            
        <h2 class="hero-subtitle">
                We offer the best adventure holidays and tailor-made trips!
        </h2>
            
        <button type="button" class="hero-button" onclick="location.href='tours.html'">
                Search for tours &raquo;
        </button>

        </div>

        </section>
 )
}
 
export default HeroContent;