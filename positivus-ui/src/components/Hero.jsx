import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Navigating the <br />
          digital landscape <br />
          for success
        </h1>

        <p>
          Our digital marketing agency helps businesses grow and succeed
          online through SEO, PPC, social media marketing, and content
          creation.
        </p>

        <button>Book a consultation</button>
      </div>

      <div className="hero-right">
        <img
          src="https://master--kreatif-software.netlify.app/_astro/hero-pic.Cf7ZIw9T_LTlHA.webp"
          alt="Megaphone"
        />
      </div>
    </section>
  );
}

export default Hero;