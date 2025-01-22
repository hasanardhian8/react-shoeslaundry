import services from "../../datas/ServiceData";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000, // Animation lasts 3 seconds
      distance: "0px", // No movement
      reset: true, // Animation resets when element re-enters viewport
    });
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <section id="Layanan" className="fade-in py-16 bg-gray-100 pt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Layanan</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={service.image} alt={service.title} className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold inline-block px-4 py-2 bg-gray-800 bg-opacity-70 rounded-full">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
