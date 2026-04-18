import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div>
                <div className="text-white font-bold text-lg">D Sports Lab</div>
                <div className="text-primary text-xs tracking-widest uppercase">Gozo, Malta</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our qualified coaches are there to help each and every athlete reach their full
              potential, as every athlete matters.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-gray-600 text-xs">Est.</span>
              <span className="text-accent text-sm font-bold">2022</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["About", "/#about"],
                ["Disciplines", "/#disciplines"],
                ["Events", "/events"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Dsportslab@gmail.com"
                  className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">✉</span>
                  Dsportslab@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+35679619650"
                  className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">📞</span>
                  +356 7961 9650
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1C5ti4GhBu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-400">f</span>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} D Sports Lab. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>🏊 🚴 🏃 🏅</span>
            <span>Gozo, Malta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
