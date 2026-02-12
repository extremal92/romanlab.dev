export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="fx-grid" />
      <div className="fx-aurora" />
      <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-accent-cyan/30 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent-purple/30 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-96 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-full border border-white/5 bg-white/5 blur-3xl" />
    </div>
  );
}
