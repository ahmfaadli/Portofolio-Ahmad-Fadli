import { useNavigate } from "react-router-dom";

export default function SkillCard({
  image,
  title,
  desc,
  to,
  category,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to) return;

    navigate(to);

    window.scrollTo({
      top: 0,
      behavior: "auto",
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
        border
        border-purple-700/30
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-purple-500
        hover:shadow-[0_0_30px_rgba(168,85,247,.25)]
      "
    >
      {/* Cover */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#170036]
            via-transparent
            to-transparent
          "
        />

        {/* Category */}
        {category && (
          <div
            className="
              absolute
              top-4
              left-4
              z-10
              px-4
              py-1.5
              rounded-full
              bg-[#170036]/90
              border
              border-purple-400/40
              text-purple-200
              text-xs
              sm:text-sm
              font-semibold
              shadow-lg
              transition-colors
              duration-300
              group-hover:bg-purple-600/80
              group-hover:text-white
            "
          >
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="
            text-2xl
            font-bold
            mb-3
            transition-colors
            duration-300
            group-hover:text-purple-300
          "
        >
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-7">
          {desc}
        </p>

        {to && (
          <button
            type="button"
            className="
              mt-6
              text-purple-400
              font-medium
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            View Details →
          </button>
        )}
      </div>
    </div>
  );
}