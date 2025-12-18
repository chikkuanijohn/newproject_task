import "../styles/Team.css";

import john from "../assets/john.jpg";
import jane from "../assets/jane.jpg";
import michael from "../assets/michael.jpg";
import emily from "../assets/emily.jpg";
import brian from "../assets/brian.jpg";
import sarah from "../assets/sarah.jpg";

const teamData = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    exp: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    img: john,
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    exp: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    img: jane,
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    exp: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    img: michael,
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    exp: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    img: emily,
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    exp: "4+ years of experience in social media marketing. Proficient in content creation, analytics, and engagement.",
    img: brian,
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    exp: "2+ years of experience in writing and editing. Skilled in SEO-optimized content creation.",
    img: sarah,
  },
];

function Team() {
  return (
    <section className="team-section">
      {/* Header */}
      <div className="team-header">
        <span className="team-badge">Team</span>
        <p>
  Meet the skilled and experienced team behind our <br />
  successful digital marketing strategies
</p>
      </div>

      {/* Cards */}
      <div className="team-grid">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-top">
              <div className="avatar">
                <span className="shape"></span>
                <img src={member.img} alt={member.name} />
              </div>

              <span className="linkedin">in</span>
            </div>

            <h3>{member.name}</h3>
            <h4>{member.role}</h4>

            <hr />

            <p>{member.exp}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="team-btn">
        <button>See all team</button>
      </div>
    </section>
  );
}

export default Team;