export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0a2232] to-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Find Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">Contact</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:Dsportslab@gmail.com"
            className="bg-dark-card border border-dark-border hover:border-primary/50 rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</div>
              <div className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                Dsportslab@gmail.com
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+35679619650"
            className="bg-dark-card border border-dark-border hover:border-accent/50 rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</div>
              <div className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                +356 7961 9650
              </div>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1C5ti4GhBu/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border border-dark-border hover:border-blue-500/50 rounded-3xl p-8 text-center flex flex-col items-center gap-4 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
              <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Facebook</div>
              <div className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                D Sports Lab
              </div>
            </div>
          </a>
        </div>

        <div className="max-w-4xl mx-auto mt-10 mb-6">
          <div className="bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-2">Join the Club</div>
              <h3 className="text-white font-bold text-2xl mb-2">Become part of D Sports Lab</h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                If you would like to join the club, complete our membership form and we will get back to you with the next steps.
              </p>
            </div>
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAFhIIjIF-RUMUU4Wk9HSVY1UTgyTVRPWE05WThLNlg1Ny4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              Open Join Form
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-dark-card border border-dark-border rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</div>
              <div className="text-white font-bold text-lg">Gozo, Malta</div>
              <p className="text-gray-400 text-sm mt-1">
                Training sessions take place at various venues across Gozo. Contact us for exact
                session locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
