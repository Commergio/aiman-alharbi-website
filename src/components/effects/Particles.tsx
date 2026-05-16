const PARTICLE_COUNT = 12;

const dots = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 29 + 11) % 100}%`,
  top: `${(i * 31 + 7) % 100}%`,
  size: 1 + (i % 2),
  delay: `${(i % 6) * 0.45}s`,
  duration: `${4 + (i % 4)}s`,
}));

export function Particles({ className = "" }: { className?: string }) {
  return (
    <div className={`particles-layer pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="particle-dot"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}
