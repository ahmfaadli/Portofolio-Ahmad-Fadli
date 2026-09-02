import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Beranda", link: "#hero" },
    { name: "Tentang Saya", link: "#about" },
    { name: "Portofolio", link: "#skills" },
    { name: "Pendidikan", link: "#education" },
    { name: "Pengalaman", link: "#experience" },
  ];

  // Smooth scroll
  const handleScroll = (e, link) => {
    e.preventDefault();

    const target = document.querySelector(link);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className={`text-2xl font-bold transition ${
            active ? "text-black" : "text-white"
          }`}
        >
          Portofolio
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 font-medium ${
            active ? "text-gray-800" : "text-white"
          }`}
        >
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={(e) => handleScroll(e, item.link)}
                className="hover:text-purple-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className={`md:hidden ${
            active ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleScroll(e, item.link)}
              className="block px-6 py-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;