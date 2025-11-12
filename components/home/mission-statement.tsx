"use client"

export function MissionStatement() {
  return (
    <section className="bg-premium-gradient py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Learn More Link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground max-w-2xl leading-tight">
            Transforming Ideas into Stunning Layouts.
          </h2>
          <a href="/about" className="text-secondary font-semibold hover:text-accent transition-all duration-300 mt-6 md:mt-0 flex items-center gap-2 group">
            <span>Learn More About Us</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-96 lg:h-full min-h-96">
            <img src="/mall-exhibition-hall-event-space.jpg" alt="Event space" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Right Column - Text Blocks */}
          <div className="space-y-8 lg:space-y-10">
            {/* Vision */}
            <div className="premium-card p-8 lg:p-10 group hover:scale-105">
              <h3 className="text-2xl lg:text-3xl text-foreground mb-4 leading-snug">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed text-base lg:text-lg">
                To be the leading event management company in Kerala, known for creating extraordinary experiences that
                leave lasting impressions on every attendee.
              </p>
            </div>

            {/* Mission */}
            <div className="premium-card p-8 lg:p-10 group hover:scale-105">
              <h3 className="text-2xl lg:text-3xl text-foreground mb-4 leading-snug">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed text-base lg:text-lg">
                To deliver exceptional event management services that exceed expectations, combining creativity,
                professionalism, and attention to detail in every project.
              </p>
            </div>

            {/* Values */}
            <div className="premium-card p-8 lg:p-10 group hover:scale-105">
              <h3 className="text-2xl lg:text-3xl text-foreground mb-4 leading-snug">Our Values</h3>
              <p className="text-foreground/70 leading-relaxed text-base lg:text-lg">
                We believe in integrity, innovation, and customer satisfaction. Every event is an opportunity to create
                magic and build lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
