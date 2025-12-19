import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Top row */}
      <div className="footer-top">

        {/* Logo */}
        <div className="footer-logo">
          <span className="logo-star">★</span>
          <span className="logo-text">Positivus</span>
        </div>

        {/* Nav links */}
        <nav className="footer-nav">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>

        {/* Social icons */}
        <div className="footer-social">
          <span>in</span>
          <span>f</span>
          <span>🐦</span>
        </div>
      </div>

      {/* Middle section */}
      <div className="footer-middle">

        {/* Contact details */}
        <div className="footer-contact">
          <span className="contact-tag">Contact us:</span>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <input type="email" placeholder="Email" />
          <button>Subscribe to news</button>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>

    </footer>
  );
}

export default Footer;