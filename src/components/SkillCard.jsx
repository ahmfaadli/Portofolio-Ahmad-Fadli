import { Link } from "react-router-dom";

export default function SkillCard({
  image,
  title,
  desc,
  to,
  category,
}) {
  return (
    <Link
      to={to || "#"}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        bg-[#170036]/70
        border
        border-purple-700/30
        transition-transform
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
          width="800"
          height="450"
          className="
            block
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
            pointer-events-none
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
            mb-3
            text-2xl
            font-bold
            transition-colors
            duration-300
            group-hover:text-purple-300
          "
        >
          {title}
        </h3>

        <p className="text-sm leading-7 text-gray-300">
          {desc}
        </p>

        {to && (
          <span
            className="
              mt-6
              inline-block
              font-medium
              text-purple-400
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            View Details →
          </span>
        )}
      </div>
    </Link>
  );
}