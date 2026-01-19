export default function ExperienceCard({
  logo,
  title,
  location,
  date,
  points,
}) {
  return (
    <div className="bg-[#1b0040]/60 p-8 rounded-2xl border border-purple-700/40">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Logo */}
        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
          <img
            src={logo}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>

      <p className="text-gray-400 mb-4">{date}</p>

      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
