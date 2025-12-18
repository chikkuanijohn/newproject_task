import "../styles/CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <div className="cta-left">
          <h2>Let’s make things happen</h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>

        <div className="cta-right">
          <img
            src="https://master--kreatif-software.netlify.app/_astro/proposal-pic.DC7YnBHg_1vwSh4.webp"
            alt="CTA Graphic"
          />
        </div>
      </div>
    </section>
  );
}