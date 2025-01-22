import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000, // Animation lasts 3 seconds
      distance: "0px", // No movement
      reset: true, // Animation resets when element re-enters viewport
    });
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <section id="Utama" className="fade-in bg-white relative">
      {/* Hero Content */}
      <div className="text-center py-16 px-8 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Sepatu Bersih</h1>
        <h1 className="text-2xl md:text-3xl font-normal text-gray-800">Berkilau Setiap Hari</h1>
      </div>

      {/* Image Section */}
      <div className="relative pb-16">
        <img
          src="/images/hero.png" // Replace this URL with your actual image URL
          alt="Shoe"
          className="w-full max-w-lg mx-auto -mt-16 relative z-10 rounded-lg rounded-t-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
