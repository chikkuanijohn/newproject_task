import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-badge">Contact Us</span>
        <p>
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Main Card */}
      <div className="contact-card">
        {/* LEFT SIDE - FORM */}
        <div className="contact-form">
          {/* Radio Buttons */}
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="contactType" defaultChecked />
              <span className="custom-radio"></span>
              Say Hi
            </label>

            <label className="radio-item">
              <input type="radio" name="contactType" />
              <span className="custom-radio"></span>
              Get a Quote
            </label>
          </div>

          {/* Name */}
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          {/* Email */}
          <div className="form-field">
            <label>Email*</label>
            <input type="email" placeholder="Email" />
          </div>

          {/* Message */}
          <div className="form-field">
            <label>Message*</label>
            <textarea placeholder="Message"></textarea>
          </div>

          {/* Button */}
          <button className="send-btn">Send Message</button>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="contact-image">
          <img
            src="https://positivus-theta.vercel.app/_next/image?url=%2Fcontact-illustration.png&w=750&q=75"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;