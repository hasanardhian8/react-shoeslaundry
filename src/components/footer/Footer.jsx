import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const openWhatsApp = () => {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
  window.open(whatsappUrl, "_blank");
};
const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-in", {
      duration: 3000, // Animation lasts 3 seconds
      distance: "0px", // No movement
      reset: true, // Animation resets when element re-enters viewport
    });
  }, []); // Empty dependency array ensures it runs once on mount
  return (
    <footer id="Hubungi" className="fade-in text-black">
      {/* Newsletter Section */}
      <div className="py-12 text-center border-b border-blue-300"></div>

      {/* Footer Links and Info */}
      <div className="py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="w-5/6">
          <h2 className="text-3xl font-bold">AASHOESWASHJOGJA</h2>
          <p className="mt-4 text-black">Jasa perawatan sepatu yang profesional.</p>
          <div className="mt-6 flex space-x-4">
            {/* Social Media Icons */}
            <Link to="https://www.instagram.com/aashoeswashjogja/" target="_blank">
              <svg className="w-[40px] h-[40px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link onClick={openWhatsApp}>
              <svg className="w-[35px] h-[35px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <div className="flex sm:justify-start md:justify-start lg:justify-center ">
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow-500 inline-block">Quick Links</h3>
          </div>
          <div className="flex sm:justify-start md:justify-start lg:justify-center">
            <ul className="mt-4 grid grid-cols-2 gap-2 ">
              {["Utama", "Pemesanan", "Tentang", "Layanan", "Biaya", "Testimoni", "Hubungi"].map((link, idx) => (
                <li key={idx}>
                  <Link to={`#${link}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Work Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-yellow-500 inline-block">BUKA</h3>
          <p className="mt-4 text-black">
            <span className="block mb-2">
              <i className="far fa-clock"></i>Setiap Hari Pukul 08.00 - 22.00 WIB
            </span>
            Tinggen, Sendangarum, Minggir, Sleman, D.i.Yogyakarta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
