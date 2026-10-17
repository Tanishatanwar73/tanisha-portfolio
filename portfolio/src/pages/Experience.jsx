function Experience() {
  return (
    <section
      id="experience"
      className="portfolio-section py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <p className="section-kicker mb-3 text-lg font-medium">
            My Journey
          </p>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Experience
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            My professional experience and the work I've done while
            developing my skills as a web developer.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mx-auto max-w-5xl space-y-8 pb-16">

          {/* 01 — Founder Grid */}
          <div>
            <article
              className="
                min-h-[26rem] rounded-3xl border border-gray-200
                bg-white p-8 shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-cyan-300/50
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.15)]
                sm:min-h-[28rem] sm:p-12
                lg:min-h-[30rem] lg:p-16
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                01
              </div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Freelance Web Developer
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
              The Founder Grid
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Freelance Project
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Worked as a freelance web developer for Founder Grid,
                where I developed and built the project website with a
                responsive and user-friendly interface.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Web Development",
                  "React",
                  "JavaScript",
                  "Responsive Design",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full border border-gray-200 bg-gray-50
                      px-4 py-2 text-base font-medium text-gray-600
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* 02 — Vedonyx */}
          <div>
            <article
              className="
                min-h-[26rem] rounded-3xl border border-gray-200
                bg-white p-8 shadow-2xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-cyan-300/50
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.15)]
                sm:min-h-[28rem] sm:p-12
                lg:min-h-[30rem] lg:p-16
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                02
              </div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Full Stack Developer Intern
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
                Vedonyx Development
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Internship
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Worked as a full stack developer intern, contributing
                across the frontend and backend of web applications.
                Built responsive user interfaces, implemented new
                features and improved existing functionality. I also
                shared ideas during development and helped turn them
                into practical improvements for the project.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "JavaScript", "Tailwind CSS"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full border border-gray-200 bg-gray-50
                        px-4 py-2 text-base font-medium text-gray-600
                      "
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>

          {/* 03 — KConnect */}
          <div>
            <article
              className="
                min-h-[26rem] rounded-3xl border border-gray-200
                bg-white p-8 shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-cyan-300/50
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.15)]
                sm:min-h-[28rem] sm:p-12
                lg:min-h-[30rem] lg:p-16
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                03
              </div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Web Developer Intern
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
                KConnect IT Technology
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Internship
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Worked on frontend development and web application
                features, focusing on responsive design, reusable
                components and user-friendly interfaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "JavaScript", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-gray-200 bg-gray-50
                        px-4 py-2 text-base font-medium text-gray-600
                      "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>

          {/* 04 — Student Council */}
          <div>
            <article
              className="
                min-h-[26rem] rounded-3xl border border-gray-200
                bg-white p-8 shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-cyan-300/50
                hover:shadow-[0_18px_45px_rgba(34,211,238,0.15)]
                sm:min-h-[28rem] sm:p-12
                lg:min-h-[30rem] lg:p-16
              "
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                04
              </div>

              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                English Coordinator
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
                Campus Student Council
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Student Council
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Led a student team and supported 40–60 students with
                English learning, helping them build confidence through
                guidance, practice and collaborative activities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Team Leadership",
                  "Mentoring",
                  "Communication",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full border border-gray-200 bg-gray-50
                      px-4 py-2 text-base font-medium text-gray-600
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-base text-gray-600 sm:text-lg">
            Growing through every project and experience
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
