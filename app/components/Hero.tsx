import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0e3347] to-dark" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      {/* Animated wave lines */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,400 C360,300 720,500 1440,400"
            fill="none"
            stroke="#1a6e8a"
            strokeWidth="1.5"
          />
          <path
            d="M0,500 C360,400 720,600 1440,500"
            fill="none"
            stroke="#c9991a"
            strokeWidth="1"
          />
          <path
            d="M0,300 C360,200 720,400 1440,300"
            fill="none"
            stroke="#1a6e8a"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo emblem */}
        <div className="flex justify-center mb-8">
          <div className="ring-2 ring-accent/40 ring-offset-4 ring-offset-dark rounded-full shadow-2xl shadow-primary/40">
            <Logo size={96} />
          </div>
        </div>

        {/* Club name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="text-white">D </span>
          <span className="text-accent">Sports</span>
          <span className="text-white"> Lab</span>
        </h1>

        {/* Location badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-primary/60" />
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Gozo, Malta
          </span>
          <div className="h-px w-12 bg-primary/60" />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-6">
          Our qualified coaches are there to help{" "}
          <span className="text-accent font-medium">each and every athlete</span>{" "}
          reach his/her full potential, as{" "}
          <span className="text-white font-semibold">every athlete matters</span>.
        </p>

        <div className="max-w-2xl mx-auto mb-10 rounded-2xl border border-accent/30 bg-white/5 backdrop-blur-sm px-6 py-4">
          <div className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Upcoming event
          </div>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-2">
            Race registration opening soon
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A new D Sports Lab race is on the way. More details will be announced soon.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAFhIIjIF-RUMUU4Wk9HSVY1UTgyTVRPWE05WThLNlg1Ny4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-yellow-500 text-dark font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 min-w-[160px]"
          >
            Join the club
          </a>
          <a
            href="/events"
            className="border-2 border-primary/60 hover:border-primary text-gray-200 hover:text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 min-w-[160px]"
          >
            View events
          </a>
        </div>

        {/* Sports pills */}
        <div className="flex flex-wrap gap-3 justify-center mt-12">
          {["🏊 Swimming", "🚴 Cycling", "🏃 Running", "🏅 Triathlon"].map((s) => (
            <span
              key={s}
              className="bg-dark-card/80 border border-dark-border text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
