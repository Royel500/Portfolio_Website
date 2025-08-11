export default function GradientBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden subtle-red-glow">
      {/* Content Container */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
