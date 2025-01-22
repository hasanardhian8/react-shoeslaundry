import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const openWhatsApp = () => {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
  window.open(whatsappUrl, "_blank");
};
const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000, // Animation lasts 3 seconds
      distance: "0px", // No movement
      reset: true, // Animation resets when element re-enters viewport
    });
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <section id="Tentang" className="fade-in py-10 pt-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-10">
        {/* Left Section */}
        <div className="lg:w-1/2 flex justify-center mb-6 mr-12 lg:mb-0">
          <img
            src="/images/whasing.jpg" // Replace with the actual image path
            alt="Man holding shoes"
            className="rounded-lg shadow-md w-full lg:w-auto"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 ml-8">
          {/* About Us Heading */}
          <h3 className="text-blue-600 font-bold text-lg mb-2 ">Tentang Kami</h3>
          <h1 className="text-3xl font-extrabold mb-4 leading-snug">Tetap di Rumah, Kami Selesaikan untuk Anda.</h1>
          <p className="text-gray-600 mb-4">Kami merupakan jasa perawatan sepatu yang memiliki tim profesional yang siap membantu Anda dalam memperbaiki dan merawat sepatu Anda.</p>

          {/* Features List */}
          <ul className="mb-6 space-y-2">
            {["Cuci Sepatu", "Repair Sepatu", "Repaint Sepatu", "Antar Jemput Sepatu"].map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 text-xl mr-2">✔</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 border bg-blue-400 text-white rounded-md shadow-md hover:bg-green-500 hover:text-white" onClick={openWhatsApp}>
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
