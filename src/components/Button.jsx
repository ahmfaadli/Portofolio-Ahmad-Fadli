export default function Button({ href, children, variant = "primary" }) {
  const base =
    "px-7 py-3 sm:px-9 sm:py-3.5 rounded-full font-semibold text-base transition-all duration-300 text-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 shadow-md",
    outline:
      "bg-black/80 border-2 border-transparent hover:bg-white hover:text-purple-700",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
