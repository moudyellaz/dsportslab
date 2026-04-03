const events = [
  {
    date: "TBC",
    title: "D Sports Lab Open Day",
    description: "Come and meet the team, try our facilities, and find out how to join.",
    type: "Club Event",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-dark-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            What&apos;s On
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Upcoming Events
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-dark border border-dark-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 border border-primary/30 rounded-xl px-4 py-2 text-center min-w-[64px]">
                  <div className="text-accent font-bold text-sm">{event.date}</div>
                </div>
                <div>
                  <span className="text-xs text-accent font-semibold uppercase tracking-widest">
                    {event.type}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1">{event.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
