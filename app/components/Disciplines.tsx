const disciplines = [
  {
    emoji: "🏊",
    title: "Swimming",
    color: "from-blue-900/40 to-primary/20",
    border: "border-blue-700/30 hover:border-blue-500/50",
    badge: "bg-blue-900/60 text-blue-300",
    description:
      "Master the water with technique-focused sessions for all levels. From stroke correction to open-water confidence, our swimming programme builds the foundation of every great triathlete.",
    highlights: [
      "Pool & open-water training",
      "Technique & efficiency focus",
      "All levels welcome",
      "Endurance sets & drills",
    ],
  },
  {
    emoji: "🚴",
    title: "Cycling",
    color: "from-amber-900/40 to-accent/20",
    border: "border-amber-700/30 hover:border-accent/50",
    badge: "bg-amber-900/60 text-amber-300",
    description:
      "Hit the roads of Gozo with group rides and structured cycling sessions. Improve your power, climbing strength, and race-day strategy in one of Malta's most scenic riding environments.",
    highlights: [
      "Road & turbo trainer sessions",
      "Power & cadence training",
      "Group rides on Gozo roads",
      "Bike fitting guidance",
    ],
  },
  {
    emoji: "🏃",
    title: "Running",
    color: "from-green-900/40 to-emerald-800/20",
    border: "border-green-700/30 hover:border-green-500/50",
    badge: "bg-green-900/60 text-green-300",
    description:
      "Build a strong, injury-resistant run with coached sessions that blend speed work, threshold training, and long runs. Whether you're chasing a 5K personal best or preparing for a longer race, we'll help you get there.",
    highlights: [
      "Track, trail & road sessions",
      "Speed & tempo workouts",
      "Gait & form coaching",
      "Race-specific preparation",
    ],
  },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-24 bg-gradient-to-b from-dark to-[#0a2232] relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Our Disciplines
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Train in one sport or build your multisport foundation with the support of our coaching team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className={`bg-gradient-to-b ${d.color} border ${d.border} rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl">{d.emoji}</span>
                <div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${d.badge} uppercase tracking-widest`}>
                    Discipline
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{d.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{d.description}</p>

              <ul className="space-y-2 mt-auto">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-accent flex-shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Triathlon banner */}
        <div className="mt-12 bg-gradient-to-r from-primary/30 via-dark-card to-accent/20 border border-primary/30 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-4">🏅</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Triathlon
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            For triathlon information, coaching details, and upcoming opportunities, please contact us directly.
          </p>
          <div className="mt-6">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              Contact Us for Triathlon Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
