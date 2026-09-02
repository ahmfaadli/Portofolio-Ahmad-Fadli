import { useNavigate } from "react-router-dom";

export default function SkillCard({
  image,
  title,
  desc,
  to,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to) return;

    navigate(to);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className="
      group
      cursor-pointer
      overflow-hidden
      rounded-3xl
      bg-[#170036]/70
      border border-purple-700/30
      backdrop-blur-md
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-purple-500
      hover:shadow-[0_0_40px_rgba(168,85,247,.35)]
      "
    >
      {/* Cover */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#170036] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-7">
          {desc}
        </p>

        {to && (
          <button
            className="
            mt-6
            text-purple-400
            font-medium
            group-hover:translate-x-2
            transition-transform
            duration-300
            "
          >
            View Details →
          </button>
        )}
      </div>
    </div>
  );
}