import { useState } from "react";
import "../styles/WorkingProcess.css";

const steps = [
  {
    id: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    content:
      "We analyze your market, competitors, and audience to build a data-driven strategy aligned with your goals.",
  },
  {
    id: "03",
    title: "Implementation",
    content:
      "Our team executes the strategy using best-in-class tools and proven methodologies.",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    content:
      "Campaigns are monitored continuously and optimized for maximum performance.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    content:
      "We provide transparent reports and maintain constant communication.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    content:
      "Insights from results are used to refine and improve future strategies.",
  },
];

function WorkingProcess() {
  const [openId, setOpenId] = useState("01");

  return (
    <section className="process-section">
      {/* Header */}
      <div className="process-header">
        <span className="process-badge">Our Working Process</span>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      {/* Accordion */}
      <div className="process-list">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`process-item ${
              openId === step.id ? "active" : ""
            }`}
            onClick={() =>
              setOpenId(openId === step.id ? null : step.id)
            }
          >
            <div className="process-top">
              <div className="left">
                <span className="number">{step.id}</span>
                <h3>{step.title}</h3>
              </div>

              <div className="icon">
                {openId === step.id ? "−" : "+"}
              </div>
            </div>

            {openId === step.id && (
              <div className="process-content">
                <hr />
                <p>{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkingProcess;