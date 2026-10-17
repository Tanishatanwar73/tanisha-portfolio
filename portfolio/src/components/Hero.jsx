import { useEffect, useState } from "react";
import { motion } from "motion/react";
import profilePhoto from "../assets/profile-photo.png";

function TypewriterText({ text, startAt = 0 }) {
  return Array.from(text).map((character, index) => (
    <motion.span
      key={`${startAt}-${index}`}
      aria-hidden="true"
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: (startAt + index) * 0.055,
        duration: 0.01,
      }}
    >
      {character === " " ? "\u00a0" : character}
    </motion.span>
  ));
}

function Hero() {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setShowCode((previous) => !previous);
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, []);

  const handleProfileClick = () => {
    setShowCode((previous) => !previous);
  };

  return (
    <section id="home" className="hero-section flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="eyebrow mb-5">
              Available for opportunities
            </p>

            <h1
              aria-label="Building digital experiences that matter."
              className="hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[.98]"
            >
              <TypewriterText text="Building digital" />
              <br />
              <em>
                <TypewriterText text="experiences" startAt={16} />
              </em>
              <TypewriterText text=" that matter." startAt={27} />
            </h1>

            <p className="hero-copy mt-7 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Hi, I’m Tanisha — a BCA student and web developer who creates
              thoughtful, responsive applications with React, JavaScript and
              Node.js.
            </p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              className="mt-9 flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >

              <a
                href="#projects"
                className="primary-cta px-6 py-3.5 rounded-xl text-white font-bold transition duration-300 hover:-translate-y-1"
              >
                Explore my work{" "}
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="secondary-cta px-6 py-3.5 rounded-xl border font-bold transition duration-300"
              >
                Download résumé
              </a>

            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}

            <div className="mt-8 flex justify-center md:justify-start gap-6 text-sm font-semibold">

              <a
                className="hero-social transition"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="hero-social transition"
                href="https://www.linkedin.com/in/tanisha73/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="hero-social transition"
                href="mailto:tanishatanwar24@navgurukul.org"
              >
                Email
              </a>

            </div>

          </motion.div>


          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <div className="flex flex-col items-center">

              {/* ================= 3D FLIP CONTAINER ================= */}

              <div
                className="
                  relative
                  w-[320px]
                  h-[420px]
                  cursor-pointer
                "
                style={{
                  perspective: "1200px",
                }}
                onClick={handleProfileClick}
              >

                {/* ================= FLIPPING CARD ================= */}

                <motion.div
                  className="
                    relative
                    w-full
                    h-full
                  "
                  animate={{
                    rotateY: showCode ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* ================================================= */}
                  {/* FRONT — PROFILE PHOTO */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >

                    <div className="profile-wrap">

                      <div className="profile-avatar">

                        <img
                          src={profilePhoto}
                          alt="Tanisha Tanwar"
                        />

                      </div>

                      <div className="profile-badge">
                        REACT • NODE • UI/UX
                      </div>

                    </div>

                  </div>


                  {/* ================================================= */}
                  {/* BACK — CODE CARD */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-3xl
                      bg-slate-900
                      border
                      border-cyan-400/30
                      shadow-2xl
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-8
                      text-center
                    "
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >

                    {/* Code Icon */}

                    <div
                      className="
                        w-20
                        h-20
                        rounded-2xl
                        border
                        border-cyan-400/30
                        bg-cyan-400/10
                        flex
                        items-center
                        justify-center
                        mb-7
                      "
                    >

                      <span className="text-3xl text-cyan-400 font-mono">
                        {"</>"}
                      </span>

                    </div>


                    {/* Small Heading */}

                    <p className="text-cyan-400 text-xs font-mono tracking-widest mb-4">
                      // CODE INSPIRATION
                    </p>


                    {/* Main Message */}

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Code.
                      <br />
                      Learn.
                      <br />
                      Build.
                      <br />
                      Repeat.
                    </h3>


                    {/* Description */}

                    <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-xs">
                      Every bug is another thing you learned.
                      Keep building, keep experimenting, and keep improving.
                    </p>


                    {/* Code */}

                    <div
                      className="
                        mt-7
                        px-5
                        py-3
                        rounded-xl
                        border
                        border-cyan-400/30
                        bg-black/20
                        text-cyan-300
                        text-xs
                        font-mono
                      "
                    >
                      const success = keepCoding();
                    </div>

                  </div>

                </motion.div>

              </div>


              {/* ================= HINT ================= */}

              <motion.p
                key={showCode ? "code" : "photo"}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-5 text-sm text-gray-400"
              >

                {showCode
                  ? "Click to see my photo ↩"
                  : "Click me for a surprise ✨"}

              </motion.p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
