"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#disciplines", label: "Disciplines" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <Logo size={40} />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-wide group-hover:text-accent transition-colors">
                D Sports Lab
              </span>
              <span className="text-primary text-xs font-medium tracking-widest uppercase">
                Gozo, Malta
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#events"
              className="bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Events
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-dark-card/98 backdrop-blur-md border-t border-dark-border rounded-b-2xl pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-gray-300 hover:text-accent hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-2">
              <a
                href="#events"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-accent hover:bg-yellow-500 text-dark font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Events
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
