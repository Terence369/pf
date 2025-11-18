export function AboutHero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url("/luxury-event-venue-with-elegant-decorations.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-32">
        <div className="mb-8 inline-block">
          <div className="border-2 border-white/50 rounded-full px-6 py-2 text-white text-sm font-semibold uppercase tracking-wider">
            We are event management group
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Crafting unforgettable events with creativity and style.
        </h1>
      </div>
    </section>
  )
}
