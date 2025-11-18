"use client"

export function CTASection() {
  return (
    <section
      className="relative py-32 lg:py-40 px-4 overflow-hidden rounded-3xl m-8 glass-morphism"
      style={{
        backgroundImage: 'url("/placeholder.svg?key=cta-bg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F2de28a5d3f0748a3bbc8c94c9542a60e)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 rounded-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
          Everything you need to get attention from your audience.
        </h2>
        <p className="text-lg lg:text-xl text-white/85 font-light">
          Let us create an unforgettable experience that resonates with your guests
        </p>
        <button
          onClick={() => window.location.href = '/contact'}
          className="mt-10 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
        >
          Get Started Today
        </button>
      </div>
    </section>
  )
}
