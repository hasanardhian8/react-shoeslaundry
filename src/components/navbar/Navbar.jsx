import { useState } from "react";
import { Link } from "react-router-dom";
const openWhatsApp = () => {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
  window.open(whatsappUrl, "_blank");
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-5/6 flex items-center bg-white justify-between px-4 py-2  lg:px-16">
      {/* Logo */}
      <Link to="#Utama" className="text-2xl font-bold">
        <div className="text-2xl font-bold">
          <img
            src="/images/logo.png" // Replace this URL with your actual image URL
            alt="Logo"
            className="w-16 sm:w-20 lg:w-24 mx-auto relative z-10"
          />
        </div>
      </Link>

      {/* Hamburger Menu (for small screens) */}
      <div className="block md:hidden">
        <button className="text-gray-800 focus:outline-none" onClick={() => setMenuOpen((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 md:hidden">
          {["Utama", "Pemesanan", "Tentang", "Layanan", "Biaya", "Testimoni", "Hubungi"].map((link, idx) => (
            <li key={idx} className="py-2 text-center font-semibold border-b hover:bg-blue-400 hover:text-white transition-colors duration-300">
              <Link to={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Navigation Links for larger screens */}
      <ul className="hidden space-x-4 text-gray-800 md:flex lg:space-x-6">
        {["Utama", "Pemesanan", "Tentang", "Layanan", "Biaya", "Testimoni", "Hubungi"].map((link, idx) => (
          <li key={idx} className="font-semibold hover:text-white hover:bg-blue-400 hover:rounded-xl hover:px-3 transition-all duration-300">
            <Link to={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <button className="hidden px-6 py-2 font-semibold text-white bg-blue-400 rounded-md hover:bg-green-500 md:block" onClick={openWhatsApp}>
        Hubungi kami
      </button>
    </nav>
  );
};

export default Navbar;
