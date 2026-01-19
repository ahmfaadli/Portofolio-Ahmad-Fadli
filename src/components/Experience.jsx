import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center">
          Professional Experience
        </h2>

        <ExperienceCard
          logo="/logos/freelance.png"
          title="Steering committee ASTRO 7.0"
          location="Remote"
          date="2025"
          points={[
            "Developing custom web applications",
            "Building scalable frontend",
            "Creating REST APIs",
          ]}
        />

        <ExperienceCard
          logo="/logos/salaba.png"
          title="Salaba Fasteners"
          location="Saudi Arabia"
          date="2024 – Present"
          points={[
            "Built ERP system (MERN)",
            "Implemented authentication",
            "WebSocket real-time features",
          ]}
        />
      </div>
    </section>
  );
}
