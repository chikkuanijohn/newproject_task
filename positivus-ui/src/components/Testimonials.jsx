import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: "Their team is professional, responsive, and truly cares about the success of our business.",
    name: "Sarah Johnson",
    role: "Founder at GrowthHub",
  },
  {
    text: "Highly recommended to any company looking to grow their online presence.",
    name: "Michael Lee",
    role: "CEO at BrightTech",
  },
  {
    text: "Amazing experience. Our conversions improved significantly within months.",
    name: "Emma Wilson",
    role: "Product Manager at Nova",
  },
  {
    text: "Clear strategy and excellent execution from start to finish.",
    name: "David Brown",
    role: "COO at TechFlow",
  },
  {
    text: "One of the best digital marketing teams we have worked with.",
    name: "Olivia Martin",
    role: "Founder at StartSmart",
  },
];

function Testimonials() {
  return (
    <div className="testimonials-section">

      {/* ===== Header ===== */}
      <div className="testimonials-top">
        <div className="testimonials-label">Testimonials</div>
        <p className="testimonials-text">
          Hear from our satisfied clients. Read our testimonials <br />
          to learn more about our digital marketing services
        </p>
      </div>

      {/* ===== Black Box ===== */}
      <div className="testimonials-wrapper">

        {/* Show only 3 like image */}
        {testimonials.slice(0, 3).map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="chat-bubble">
              <p>{item.text}</p>
            </div>

            <div className="user-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}

        {/* ⭐ Stars INSIDE black box */}
        <div className="testimonial-stars">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`star ${index === 0 ? "active" : ""}`}
            >
              ★
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Testimonials;