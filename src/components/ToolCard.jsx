export default function ToolCard({ icon, title }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        gap-4 p-6
        rounded-2xl
        bg-white/5 border border-white/10
        backdrop-blur-sm
        transition-transform duration-300
        hover:scale-105
      "
    >
      <div className="text-4xl text-purple-400">
        {icon}
      </div>

      <p className="text-sm font-medium text-gray-200 text-center">
        {title}
      </p>
    </div>
  );
}
