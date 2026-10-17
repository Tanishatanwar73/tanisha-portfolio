import { motion } from "motion/react";

const headingCharacterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function About() {
  return (
    <section
      id="about"
      className="portfolio-section py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          <p className="section-kicker font-medium text-lg mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >

            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-gray-900"
              aria-label="I'm a Web Developer who loves building things for the web."
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.045,
                  },
                },
              }}
            >
              {Array.from(
                "I'm a Web Developer who loves building things for the web."
              ).map((character, index) => (
                <motion.span
                  key={index}
                  aria-hidden="true"
                  className="inline-block"
                  variants={headingCharacterVariants}
                  transition={{ duration: 0.01 }}
                >
                  {character === " " ? "\u00a0" : character}
                </motion.span>
              ))}
            </motion.h3>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              I'm a BCA student and Web Developer passionate about creating
              modern, responsive and user-friendly web applications. I enjoy
              turning ideas into real-world digital experiences and constantly
              learning new technologies.
            </p>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              My main focus is frontend development with React and JavaScript,
              while I also work with backend technologies such as Node.js,
              Express and MongoDB.
            </p>

            {/* ================= EDUCATION ================= */}
            <div className="mt-8">

              <h4 className="text-xl font-semibold text-gray-900">
                Education
              </h4>

              <div className="mt-4 border-l-4 border-blue-600 pl-5">

                <h5 className="font-semibold text-gray-900 text-lg">
                  Bachelor of Computer Applications (BCA)
                </h5>

                <p className="text-gray-600 mt-1">
                  Computer Applications
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Currently Pursuing
                </p>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >

            <div className="portfolio-card rounded-2xl p-8 shadow-sm border">

              <h3 className="text-2xl font-bold text-gray-900">
                What I Do
              </h3>

              <div className="mt-6 space-y-6">

                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Frontend Development
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Building responsive and interactive interfaces using
                    React, JavaScript and Tailwind CSS.
                  </p>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Backend Development
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Creating REST APIs and backend services using Node.js,
                    Express and MongoDB.
                  </p>
                </div>

                {/* Problem Solving */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Problem Solving
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Practicing data structures, algorithms and system design
                    to improve my problem-solving skills.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ================= STATS ================= */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >

          <div className="portfolio-card text-center p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-blue-600">
              10+
            </h3>

            <p className="mt-2 text-gray-600">
              Projects
            </p>
          </div>

          <div className="portfolio-card text-center p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-blue-600">
              5+
            </h3>

            <p className="mt-2 text-gray-600">
              Technologies
            </p>
          </div>

          <div className="portfolio-card text-center p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-blue-600">
              2+
            </h3>

            <p className="mt-2 text-gray-600">
              Internships
            </p>
          </div>

          <div className="portfolio-card text-center p-6 rounded-xl border">
            <h3 className="text-3xl font-bold text-blue-600">
              1+
            </h3>

            <p className="mt-2 text-gray-600">
              Years Learning
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
