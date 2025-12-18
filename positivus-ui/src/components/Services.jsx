import "../styles/Services.css";

export default function Services() {
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
        <div className="card light">
          <div>
            <h3>Search engine optimization</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic1.LmmlwL7__223Xo8.webp" />
        </div>

        <div className="card green">
          <div>
            <h3>Pay-per-click advertising</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic2.BeQ4x_k2_Z1BwdVT.webp" />
        </div>

        <div className="card dark">
          <div>
            <h3>Social Media Marketing</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic3.D4d3JTsx_Z24EeW2.webp" />
        </div>

        <div className="card light">
          <div>
            <h3>Email Marketing</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic4.CPZGvqT8_Z1yOHDC.webp" />
        </div>

        <div className="card green">
          <div>
            <h3>Content Creation</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic5.CqK5dBMJ_19aYSm.webp" />
        </div>

        <div className="card dark">
          <div>
            <h3>Analytics and Tracking</h3>
            <a href="#">Learn more</a>
          </div>
          <img src="https://master--kreatif-software.netlify.app/_astro/card-pic6.CXJkFMY0_20JiD4.webp" />
        </div>
      </div>
    </section>
  );
}