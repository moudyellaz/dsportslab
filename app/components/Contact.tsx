"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkqn";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          (json as { error?: string }).error ||
            "Something went wrong. Please try again or email us directly at Dsportslab@gmail.com"
        );
        setFormState("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Please check your connection or email us at Dsportslab@gmail.com"
      );
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0a2232] to-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Find Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">Contact</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                Training sessions take place at various venues across Gozo. Contact us for exact session locations.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-gray-400">
              Use the form below and your message will be forwarded to the club email.
            </p>
          </div>

          {formState === "success" ? (
            <div className="bg-green-900/30 border border-green-600/40 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="text-white text-xl font-bold mb-2">Message Sent!</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Thanks for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 text-sm text-gray-400 hover:text-white underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 space-y-6"
            >
              <input type="hidden" name="subject" value="D Sports Lab Website Contact" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-dark border border-dark-border focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-dark border border-dark-border focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="phone">
                  Phone <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+356 ..."
                  className="w-full bg-dark border border-dark-border focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help, what you are interested in, or any questions you have..."
                  className="w-full bg-dark border border-dark-border focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {formState === "error" && (
                <div className="bg-red-900/30 border border-red-600/40 rounded-xl p-4 text-sm text-red-300">
                  ⚠️ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full bg-accent hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed text-dark font-bold py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                {formState === "loading" ? "Sending…" : "Send Message"}
              </button>

              <p className="text-center text-gray-600 text-xs">
                Or email us directly at <a href="mailto:Dsportslab@gmail.com" className="text-primary hover:text-accent transition-colors">Dsportslab@gmail.com</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
