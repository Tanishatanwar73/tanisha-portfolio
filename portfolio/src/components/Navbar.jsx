import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="site-nav sticky top-0 z-50 w-full px-4 py-3 lg:px-6">

      <div
        className={`
          mx-auto relative rounded-3xl md:rounded-full border
          px-5 lg:px-7 nav-glass
          transition-[max-width,padding] duration-500 ease-in-out
          ${isScrolled ? "max-w-5xl py-1.5" : "max-w-7xl py-2.5 lg:py-3"}
        `}
      >

        {/* ================= TOP NAVBAR ================= */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="
              text-2xl
              lg:text-3xl
              font-bold
              nav-brand
            "
          >
            Tanisha<span>.</span>
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:gap-10 md:flex">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="
                  text-base
                  lg:text-lg
                  nav-link
                  font-medium
                  hover:text-blue-600
                  transition-colors
                  duration-300
                "
              >
                {item.name}
              </button>
            ))}

          </div>

          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="nav-cta hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
          >
            Contact Me
          </button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-2xl
              text-white
              p-2
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-4 pb-4">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="
                  text-left
                  nav-link
                  font-medium
                  hover:text-blue-600
                  transition-colors
                  duration-300
                  py-1o
                  
                "
              >
                {item.name}
              </button>
            ))}

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
