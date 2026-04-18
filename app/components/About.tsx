const stats = [
  { value: "2022", label: "Founded" },
  { value: "3+", label: "Disciplines" },
  { value: "Gozo", label: "Based In" },
  { value: "∞", label: "Potential" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            About D Sports Lab
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              D Sports Lab was founded in <span className="text-accent font-semibold">2022</span>{" "}
              in Gozo, Malta. We are a multisport and triathlon club helping athletes of all levels
              train with confidence and consistency.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From swimming and cycling to running and triathlon, our{" "}
              <span className="text-white font-semibold">qualified coaches</span> are here to guide
              every athlete with the attention and support they deserve.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our philosophy is simple, <span className="text-accent font-medium italic">every athlete matters</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#events"
                className="bg-primary hover:bg-[#1e7fa0] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 text-center"
              >
                Upcoming Event
              </a>
              <a
                href="#contact"
                className="border border-dark-border hover:border-primary/60 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="text-4xl font-black text-accent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium mt-2 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Mission card spanning full width */}
            <div className="col-span-2 bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Our Mission</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    To help each and every athlete in Gozo reach their full potential through
                    expert coaching, community spirit, and a passion for multisport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
