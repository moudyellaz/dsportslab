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
          <div className="h-1 w-16 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are preparing our next D Sports Lab race. Registration details will be announced soon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <div className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Race Coming Soon
                </div>
                <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">
                  D Sports Lab Race Event
                </h3>
                <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                  A new race event is on the way. Tomorrow we can add the Google Form registration link,
                  race details, and the full call to action here.
                </p>
              </div>
              <div className="bg-dark/60 border border-dark-border rounded-2xl px-5 py-4 min-w-[140px] text-center">
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Status</div>
                <div className="text-accent font-bold text-sm">Coming Soon</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAFhIIjIF-RUMUU4Wk9HSVY1UTgyTVRPWE05WThLNlg1Ny4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                Join the Club
              </a>
              <a
                href="#hero"
                className="inline-flex items-center justify-center border border-dark-border hover:border-primary/60 text-gray-300 hover:text-white font-semibold text-sm px-6 py-3 rounded-full transition-all"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
