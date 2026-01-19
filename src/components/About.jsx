import SkillCard from "./SkillCard";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0a0118] to-[#26006a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Saya merupakan mahasiswa <span className="text-white font-semibold">Teknik Informatika</span> 
            yang memiliki ketertarikan kuat di bidang <span className="text-cyan-400">rekayasa perangkat lunak</span>.
            Selama proses belajar, saya terbiasa mengembangkan aplikasi berbasis web dan sistem interaktif.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Selain kemampuan teknis, saya juga memiliki keahlian di bidang 
            <span className="text-pink-400"> desain grafis, motion graphic, dan UI/UX design</span>.
            Kombinasi antara logika dan kreativitas membuat saya mampu menghasilkan solusi yang fungsional
            sekaligus menarik secara visual.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Saya mudah beradaptasi, senang mempelajari hal baru, dan siap menghadapi tantangan
            untuk terus berkembang di dunia teknologi dan industri kreatif.
          </p>
        </div>

        {/* Skill Highlight */}
        <div className="grid sm:grid-cols-2 gap-6">
          <SkillCard
            icon={<FaCode className="text-cyan-400 text-2xl" />}
            title="Programming"
            desc="React, Laravel, JavaScript"
          />

          <SkillCard
            icon={<FaServer className="text-indigo-400 text-2xl" />}
            title="Backend Development"
            desc="Node.js, Express, REST API"
          />

          <SkillCard
            icon={<FaDatabase className="text-green-400 text-2xl" />}
            title="Database"
            desc="MySQL, MongoDB"
          />

          <SkillCard
            icon={<FaPalette className="text-pink-400 text-2xl" />}
            title="Creative Design"
            desc="UI/UX, Graphic & Motion Design"
          />
        </div>
      </div>
    </section>
  );
}
