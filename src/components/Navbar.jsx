import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const menu = [
    { name: "Beranda", link: "#hero" },
    { name: "Tentang Saya", link: "#about" },
    { name: "Portofolio", link: "#skills" },
    { name: "Pendidikan", link: "#education" },
    { name: "Pengalaman", link: "#experience" },
  ];

  // =========================
  // SMOOTH SCROLL
  // =========================
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
      className={`
        fixed
        top-0
        left-0
        right-0
        w-full
        max-w-full
        z-50
        overflow-visible
        transition-all
        duration-300
        ${
          active
            ? "bg-white/90 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }
      `}
    >
      {/* =========================
          NAVBAR CONTAINER
      ========================== */}
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          box-border
          px-6
          sm:px-10
          lg:px-20
          xl:px-32
          lg:max-w-[15000px]
          lg:px-0
          h-14
          sm:h-16
          md:h-20
          flex
          items-center
          justify-between
        "
      >
        {/* =========================
            LOGO
        ========================== */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className={`
            text-base
            sm:text-lg
            md:text-2xl
            font-bold
            leading-none
            whitespace-nowrap
            flex-shrink-0
            transition-colors
            duration-300
            ${
              active
                ? "text-black"
                : "text-white"
            }
          `}
        >
          Portofolio
        </a>

        {/* =========================
            DESKTOP MENU
        ========================== */}
        <ul
          className={`
            hidden
            md:flex
            items-center
            gap-5
            lg:gap-7
            xl:gap-8
            font-medium
            text-sm
            lg:text-base
            ${
              active
                ? "text-gray-800"
                : "text-white"
            }
          `}
        >
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={(e) =>
                  handleScroll(e, item.link)
                }
                className="
                  hover:text-purple-500
                  transition-colors
                  duration-300
                  whitespace-nowrap
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* =========================
            MOBILE BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          className={`
            md:hidden
            flex-shrink-0
            w-9
            h-9
            p-0
            m-0
            rounded-lg
            flex
            items-center
            justify-center
            transition-all
            duration-300
            ${
              active
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }
          `}
        >
          {open ? (
            <X
              className="w-6 h-6"
              strokeWidth={2}
            />
          ) : (
            <Menu
              className="w-6 h-6"
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`
          md:hidden
          w-full
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            bg-white
            shadow-lg
            border-t
            border-gray-100
            px-6
            sm:px-10
            py-2
          "
        >
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) =>
                handleScroll(e, item.link)
              }
              className="
                block
                px-3
                py-2.5
                sm:py-3
                text-sm
                sm:text-base
                text-gray-700
                rounded-lg
                hover:bg-purple-50
                hover:text-purple-600
                transition
                duration-200
              "
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