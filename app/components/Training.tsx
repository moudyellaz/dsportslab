const schedule = [
  {
    day: "Monday",
    sessions: [
      { time: "06:30", type: "Pool swimming", level: "All levels", emoji: "🏊" },
      { time: "18:00", type: "Running — track", level: "Intermediate / Advanced", emoji: "🏃" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:30", type: "Pool swimming", level: "All levels", emoji: "🏊" },
      { time: "17:30", type: "Cycling — road ride", level: "All levels", emoji: "🚴" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "18:00", type: "Running — easy / long", level: "All levels", emoji: "🏃" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "07:00", type: "Long ride — group", level: "All levels", emoji: "🚴" },
      { time: "09:30", type: "Brick session (bike + run)", level: "Intermediate / Advanced", emoji: "🏅" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { time: "07:30", type: "Open water swimming", level: "All levels", emoji: "🌊" },
    ],
  },
];

const principles = [
  {
    icon: "🎯",
    title: "Structured programming",
    text: "Periodised training plans tailored to your goals — whether that&apos;s completing your first sprint tri or qualifying for a championship.",
  },
  {
    icon: "📊",
    title: "Data-driven coaching",
    text: "We use heart rate, power output, and pace data to track your progress and ensure you&apos;re always training at the right intensity.",
  },
  {
    icon: "🤝",
    title: "Community training",
    text: "Training is better together. Our group sessions keep you motivated, accountable, and surrounded by people who share your passion.",
  },
  {
    icon: "🔄",
    title: "Recovery & longevity",
    text: "We build recovery into every training block. Stay healthy, stay consistent, and perform at your best when it matters most.",
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-[#0a2232] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Get Fit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Training & Schedule
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            All levels are welcome. Whether you&apos;re a complete beginner or a seasoned competitor,
            there&apos;s a session for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Schedule */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-accent">📅</span> Weekly schedule
              <span className="text-xs font-normal text-gray-500 ml-2">(subject to change — contact us for latest)</span>
            </h3>
            {schedule.map((day) => (
              <div
                key={day.day}
                className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden"
              >
                <div className="bg-primary/20 border-b border-dark-border px-5 py-2.5">
                  <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                    {day.day}
                  </span>
                </div>
                <div className="divide-y divide-dark-border">
                  {day.sessions.map((session) => (
                    <div key={session.type} className="flex items-center gap-4 px-5 py-3">
                      <span className="text-2xl">{session.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-semibold">{session.type}</div>
                        <div className="text-gray-500 text-xs">{session.level}</div>
                      </div>
                      <div className="text-accent text-sm font-mono font-bold flex-shrink-0">
                        {session.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-gray-500 text-xs text-center pt-2">
              * Schedule is indicative. Sessions may vary. Contact us for the full up-to-date programme.
            </p>
          </div>

          {/* Principles */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-accent">💡</span> Our approach
            </h3>
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-6 text-center">
              <p className="text-white font-semibold mb-3">Ready to start training?</p>
              <a
                href="#join"
                className="bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 inline-block"
              >
                Join the club
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
