export default function CertificateCard({
  image,
  title,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View certificate: ${title}`}
      className="
        group
        w-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-left
        transition-transform
        duration-300
        hover:-translate-y-1
        hover:border-purple-500
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-purple-500
        sm:rounded-2xl
      "
    >
      {/* Certificate Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          className="
            block
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
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
            truncate
            text-[10px]
            font-semibold
            text-white
            sm:text-xs
            md:text-sm
            lg:text-lg
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-[8px]
            text-gray-400
            sm:mt-2
            sm:text-[10px]
            md:text-xs
            lg:text-sm
          "
        >
          Certificate
        </p>
      </div>
    </button>
  );
}