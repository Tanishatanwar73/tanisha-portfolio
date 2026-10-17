import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce application with product management, authentication, CRUD operations and a responsive user interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "English Speaking Coach",
    description:
      "A web application designed to help users practice English speaking skills through an interactive and user-friendly interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Student Management Dashboard",
    description:
      "A responsive dashboard for managing student information with CRUD functionality and a clean interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        py-24
        overflow-hidden
      "
    >

      {/* ========================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================= */}

      <div
        className="
          max-w-[1500px]
          mx-auto
          px-6
          lg:px-10
        "
      >


        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="text-center mb-14">

          <p
            className="
              text-cyan-300
              text-xs
              font-semibold
              tracking-[0.25em]
              uppercase
              mb-4
            "
          >
            WHAT I'VE BUILT
          </p>


          <h2
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              text-white
            "
          >
            My Projects
          </h2>


          {/* Cyan underline */}

          <div
            className="
              w-20
              h-1
              bg-cyan-400
              rounded-full
              mx-auto
              mt-5
            "
          />


          <p
            className="
              mt-7
              max-w-2xl
              mx-auto
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Here are some of the projects I have built while learning and
            working with modern web technologies.
          </p>

        </div>


        {/* ========================================= */}
        {/* PROJECTS */}
        {/* ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            max-w-6xl
            mx-auto
          "
        >
          {projects.map((project) => (
                <article
                  key={project.title}
                  className="
                    group
                    flex
                    flex-col
                    rounded-2xl
                    overflow-hidden
                    bg-slate-900/95
                    border border-white/10
                    transition-shadow
                    duration-500
                    shadow-xl
                    hover:border-cyan-400/60
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
                  "
                >


                  {/* ================================= */}
                  {/* PROJECT TOP */}
                  {/* ================================= */}

                  <div
                    className="
                      h-[175px]

                      flex
                      items-center
                      justify-center

                      relative

                      overflow-hidden

                      bg-gradient-to-br
                      from-indigo-900
                      via-blue-900
                      to-cyan-950

                      border-b border-white/10
                    "
                  >

                    {/* Glow */}

                    <div
                      className="
                        absolute

                        w-36
                        h-36

                        rounded-full

                        blur-3xl

                        transition-all
                        duration-500

                        bg-cyan-400/10 group-hover:bg-cyan-400/30 group-hover:scale-150
                      "
                    />


                    {/* Code icon */}

                    <span
                      className="
                        relative

                        font-mono

                        text-4xl

                        transition-all
                        duration-500

                        text-slate-300 group-hover:text-cyan-300 group-hover:scale-125
                      "
                    >
                      &lt;/&gt;
                    </span>

                  </div>


                  {/* ================================= */}
                  {/* CONTENT */}
                  {/* ================================= */}

                  <div
                    className="
                      p-5

                      flex
                      flex-col

                      min-h-[305px]
                    "
                  >


                    {/* TITLE */}

                    <h3
                      className="
                        font-bold

                        leading-snug

                        transition-colors
                        duration-300

                        text-white text-lg group-hover:text-cyan-300
                      "
                    >
                      {project.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-4

                        text-gray-400

                        text-sm

                        leading-relaxed

                        line-clamp-4
                      "
                    >
                      {project.description}
                    </p>


                    {/* ================================= */}
                    {/* TECHNOLOGIES */}
                    {/* ================================= */}

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2

                        mt-5
                      "
                    >

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                            className="
                              px-2.5
                              py-1

                              rounded-full

                              bg-slate-800

                              border
                              border-white/5

                              text-gray-300

                              text-[11px]

                              font-medium

                              whitespace-nowrap
                            "
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>


                    {/* ================================= */}
                    {/* BUTTONS */}
                    {/* ================================= */}

                    <div
                      className="
                        flex
                        gap-2

                        mt-auto
                        pt-6
                      "
                    >

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          px-3
                          py-2

                          rounded-lg

                          bg-slate-800

                          border
                          border-white/10

                          text-white

                          text-xs

                          font-semibold

                          transition-all
                          duration-300

                          hover:bg-slate-700

                          hover:border-cyan-400/40

                          hover:-translate-y-0.5
                        "
                      >
                        GitHub
                      </a>


                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2

                          px-3
                          py-2

                          rounded-lg

                          border
                          border-cyan-400/30

                          text-cyan-300

                          text-xs

                          font-semibold

                          transition-all
                          duration-300

                          hover:bg-cyan-400/10

                          hover:border-cyan-400

                          hover:-translate-y-0.5
                        "
                      >
                        <span>Live Demo</span>
                        <motion.span
                          aria-hidden="true"
                          className="inline-block"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </a>

                    </div>

                  </div>

                </article>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Projects;
