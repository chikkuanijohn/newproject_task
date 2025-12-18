import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrap">
        <span className="star"></span>
        <h2 className="logo">Positivus</h2>
      </div>

      <ul className="nav-links">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="nav-btn">Request a quote</button>
    </nav>
  );
}

export default Navbar;