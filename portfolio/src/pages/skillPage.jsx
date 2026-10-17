import { motion } from "motion/react";

function SkillPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "React Router",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      title: "Programming & Tools",
      skills: [
        "Python",
        "Git",
        "GitHub",
        "VS Code",
        "NPM",
        "Vite",
      ],
    },
    {
      title: "Cloud & Other Technologies",
      skills: [
        "AWS",
        "S3",
        "EC2",
        "CloudFront",
        "Firebase",
        "Redis",
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="portfolio-section py-20 lg:py-28"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          <p className="section-kicker font-medium text-lg mb-3">
            What I Work With
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            My Skills
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-base sm:text-lg">
            Technologies and tools I use to build modern, responsive
            and scalable web applications.
          </p>

        </div>

        {/* ================= SKILL CATEGORIES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                portfolio-card
                skill-category-card
                rounded-2xl
                p-6
                sm:p-8
                shadow-sm
                border
                border-gray-100
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
              "
            >

              {/* Category Title */}
              <h3 className="skill-category-title text-2xl font-bold text-gray-900">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-6">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-gray-100
                      text-gray-700
                      font-medium
                      text-sm
                      sm:text-base
                      hover:bg-blue-600
                      hover:text-white
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:scale-105
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="mt-14 text-center">

          <p className="text-gray-600 text-base sm:text-lg">
            Always learning, building and improving 
          </p>

        </div>

      </div>
    </motion.section>
  );
}

export default SkillPage;
