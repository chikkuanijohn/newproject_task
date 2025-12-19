import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandLogos from "./components/BrandLogos";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

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
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;