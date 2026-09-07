export default function CertificateCard({
  image,
  title,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        group
        rounded-xl
        sm:rounded-2xl
        overflow-hidden
        bg-white/5
        border
        border-white/10
        hover:border-purple-500
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Certificate Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            w-full
            h-24
            sm:h-32
            md:h-44
            lg:h-72
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "
        />
      </div>

      {/* Certificate Content */}
      <div
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
        "
      >
        <h2
          className="
            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-lg
            font-semibold
            text-white
            truncate
          "
        >
          {title}
        </h2>

        <p
          className="
            text-[8px]
            sm:text-[10px]
            md:text-xs
            lg:text-sm
            text-gray-400
            mt-1
            sm:mt-2
          "
        >
          Certificate
        </p>
      </div>
    </div>
  );
}