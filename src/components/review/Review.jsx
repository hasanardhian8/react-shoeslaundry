const Review = () => {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        {/* Header Section */}
        <h3 className="text-yellow-400 text-lg font-bold mb-2">Request Order</h3>
        <h1 className="text-4xl font-extrabold mb-4">Get Special Offer Now</h1>
        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="bg-yellow-400 text-blue-500 px-6 py-3 rounded-md font-bold shadow-md hover:bg-yellow-300 transition duration-200">Request Order</button>
      </div>

      {/* Stats Section */}
      <div className="bg-white text-gray-800 py-10 mt-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card */}
          {[
            { count: "4,452", label: "Successful Project", icon: "🌟" },
            { count: "52", label: "Expert Staff", icon: "👩‍💼" },
            { count: "2,241", label: "Happy Clients", icon: "🌍" },
            { count: "20", label: "City Store", icon: "🛒" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-gray-50">
              <div className="text-yellow-400 text-5xl mb-4">{stat.icon}</div>
              <h2 className="text-3xl font-bold mb-2">{stat.count}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
