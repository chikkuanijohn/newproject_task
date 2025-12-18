import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandLogos from "./components/BrandLogos";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team"; // 👈 ADD

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandLogos />
      <Services />
      <CallToAction />
      <CaseStudies />
      <WorkingProcess />
      <Team /> {/* 👈 Team Section */}
    </>
  );
}

export default App;