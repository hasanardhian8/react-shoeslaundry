import { useState, useEffect } from "react";
import plans from "../../datas/PriceData";
import feedback from "../../datas/FeedbackData";

import ScrollReveal from "scrollreveal";
const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage < feedback.length ? prevIndex + itemsPerPage : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : feedback.length - itemsPerPage));
  };

  const visibleFeedback = feedback.slice(currentIndex, currentIndex + itemsPerPage);

  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000, // Animation lasts 3 seconds
      distance: "0px", // No movement
      reset: true, // Animation resets when element re-enters viewport
    });
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <div>
      {/* Pricing Section */}
      <section id="Biaya" className="fade-in py-16  pt-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Biaya Perawatan</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
              <h2 className="text-2xl font-semibold text-yellow-500 mb-4">{plan.price}</h2>
              <ul className="text-gray-600 text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M7.629 14.571a1.5 1.5 0 002.121 0l7.75-7.75a1.5 1.5 0 00-2.121-2.121L8.5 11.879 4.621 8a1.5 1.5 0 00-2.121 2.121l4.129 4.45z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section id="Testimoni" className="fade-in py-16 pt-28 bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">Testimoni Pelanggan</h1>
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            &larr;
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {visibleFeedback.map((client, index) => (
              <div key={index} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 w-full">
                <img src={client.image} alt={client.name} className="absolute inset-0 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{client.name}</h3>

                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{client.feedback}</div>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
