import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1
          className={`text-3xl font-bold ${
            active ? "text-black" : "text-white"
          }`}
        >
          Portofolio
        </h1>

        {/* Menu */}
        <ul
          className={`flex items-center gap-6 px-6 py-3 rounded-b-2xl backdrop-blur-md transition-all ${
            active
              ? "bg-white/80 text-black"
              : "bg-white/20 text-white"
          }`}
        >
          <li>
            <a href="/#hero" className="hover:text-purple-500 transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="/#about" className="hover:text-purple-500 transition">
              Tentang
            </a>
          </li>
          <li>
            <a href="/#skills" className="hover:text-purple-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="/#tools" className="hover:text-purple-500 transition">
              Tools
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-purple-500 transition">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
