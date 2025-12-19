import "../styles/Services.css";

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <span className="badge">Services</span>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="services-grid">
        <ServiceCard
          title="Search engine optimization"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic1.LmmlwL7__223Xo8.webp"
          variant="light"
        />

        <ServiceCard
          title="Pay-per-click advertising"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic2.BeQ4x_k2_Z1BwdVT.webp"
          variant="green"
        />

        <ServiceCard
          title="Social Media Marketing"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic3.D4d3JTsx_Z24EeW2.webp"
          variant="dark"
        />

        <ServiceCard
          title="Email Marketing"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic4.CPZGvqT8_Z1yOHDC.webp"
          variant="light"
        />

        <ServiceCard
          title="Content Creation"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic5.CqK5dBMJ_19aYSm.webp"
          variant="green"
        />

        <ServiceCard
          title="Analytics and Tracking"
          img="https://master--kreatif-software.netlify.app/_astro/card-pic6.CXJkFMY0_20JiD4.webp"
          variant="dark"
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, img, variant }) {
  return (
    <div className={`service-card ${variant}`}>
      <div className="service-content">
        <h3>{title}</h3>
        <a href="#">↗ Learn more</a>
      </div>
      <img src={img} alt={title} />
    </div>
  );
}

export default Services;