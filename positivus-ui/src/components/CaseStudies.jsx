import "../styles/CaseStudies.css";

function CaseStudies() {
  return (
    <section className="case-section" id="use-cases">
      {/* Header */}
      <div className="case-header">
        <span className="case-badge">Case Studies</span>
        <p>
          Explore real-life examples of our proven digital marketing success
          through our case studies.
        </p>
      </div>

      {/* Big Box */}
      <div className="case-box">
        <div className="case-item">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="#">Learn more ↗</a>
        </div>

        <div className="divider"></div>

        <div className="case-item">
          <p>
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in
            organic traffic.
          </p>
          <a href="#">Learn more ↗</a>
        </div>

        <div className="divider"></div>

        <div className="case-item">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a href="#">Learn more ↗</a>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;