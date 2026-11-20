import ProjekCard from "./ProjectCard";
import projects from "../../data/Projects";

export default function Project() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#0a0118]
        via-[#170036]
        to-[#26006a]
        px-4
        pt-20
        pb-20
        text-white
        sm:px-6
        sm:pt-20
        sm:pb-20
        lg:px-8
        lg:pt-20
        lg:pb-20
        max-lg:pt-16
        max-lg:pb-16
        max-md:pt-14
        max-md:pb-14
        max-sm:pt-12
        max-sm:pb-12
        max-[374px]:pt-10
        max-[374px]:pb-10
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            mb-10
            px-1
            text-center
            sm:mb-12
            md:mb-16
            lg:mb-20
          "
        >
          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              leading-tight
              sm:mt-5
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            My Projects
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              px-1
              text-sm
              leading-7
              text-gray-300
              sm:mt-5
              sm:px-4
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Explore my IT projects, showcasing my experience in software
            development, web development, UI/UX design, Internet of Things,
            and system development
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {projects.map((project) => (
            <ProjekCard
              key={project.to}
              image={project.image}
              title={project.title}
              desc={project.desc}
              to={project.to}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}