import { useNavigate } from "react-router-dom";

export default function SkillCard({ icon, title, desc, to }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => to && navigate(to)}
      className="
        cursor-pointer
        bg-[#1b0040]/60 
        p-6 
        rounded-2xl 
        border border-purple-700/40
        backdrop-blur
        transition-all duration-300
        hover:scale-105 
        hover:border-purple-500
        hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
      "
    >
      <div className="text-3xl mb-4 text-purple-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
