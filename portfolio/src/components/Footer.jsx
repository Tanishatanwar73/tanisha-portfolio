function Footer() {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <footer className="site-footer text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ================= MAIN FOOTER ================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-10
          "
        >

          {/* ================= ABOUT ================= */}
          <div>
            <h2 className="text-2xl font-bold">
              Tanisha
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              Web Developer and BCA student passionate about
              building modern, responsive and user-friendly
              web applications.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-gray-400
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>
          </div>

          {/* ================= CONNECT ================= */}
          <div>
            <h3 className="text-lg font-semibold">
              Connect With Me
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-blue-400
                  transition-colors
                  duration-300
                "
              >
                LinkedIn
              </a>

              <a
                href="mailto:tanishatanwar24@navgurukul.org"
                className="
                  text-gray-400
                  hover:text-red-400
                  transition-colors
                  duration-300
                "
              >
                Email
              </a>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-gray-800
            text-center
          "
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tanisha. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
