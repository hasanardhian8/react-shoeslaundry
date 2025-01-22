import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Pricing from "../components/pricing/Pricing";
import Process from "../components/process/Process";
import Services from "../components/service/Service";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-white justify-items-center">
      <div className="w-5/6">
        <Navbar />
        <Hero />
        <Process />
        <About />
        {/* <Review /> */}
        <Services />
        <Pricing />
        <Footer />
      </div>
      {/* Footer Bottom */}
      <div className="w-full py-4 text-center text-black text-sm bg-blue-400">AASHOESWASHJOGJA | &copy; 2025. All rights reserved.</div>
    </div>
  );
};

export default LandingPage;
