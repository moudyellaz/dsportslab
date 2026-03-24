"use client";

import { useState } from "react";

// Contact form uses Formspree
// Replace 'xpwzgkqn' with your real Formspree form ID from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkqn";

const tiers = [
  {
    name: "Junior",
    price: "€25",
    period: "/month",
    description: "For athletes under 18. Full access to junior training sessions.",
    features: [
      "All junior swim sessions",
      "Coached bike sessions",
      "Running club access",
      "Club kit discount",
      "Race support",
    ],
    highlight: false,
  },
  {
    name: "Senior",
    price: "€40",
    period: "/month",
    description: "For adult athletes of all levels. Our most popular membership.",
    features: [
      "All adult training sessions",
      "Swim, bike & run coaching",
      "Personalised training plan",
      "Club kit discount",
      "Race support & strategy",
      "Member events & socials",
    ],
    highlight: true,
  },
  {
    name: "Family",
    price: "€70",
    period: "/month",
    description: "Train together as a family. 2 adults + children.",
    features: [
      "2 adult memberships",
      "All junior memberships",
      "Family training events",
      "Priority registration",
      "Club kit discount",
    ],
    highlight: false,
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Join() {
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
    <section id="join" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Become a Member
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">Join D Sports Lab</h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the membership that fits your lifestyle. All memberships include access to our
            coaching team and the full D Sports Lab community.
          </p>
        </div>

        {/* Membership tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 ${
                tier.highlight
                  ? "bg-gradient-to-b from-primary/40 to-dark-card border-2 border-primary shadow-xl shadow-primary/20"
                  : "bg-dark-card border border-dark-border hover:border-primary/40"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-dark text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black text-accent">{tier.price}</span>
                <span className="text-gray-400 text-sm mb-1">{tier.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact-form"
                className={`mt-8 block text-center font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 ${
                  tier.highlight
                    ? "bg-accent hover:bg-yellow-500 text-dark"
                    : "bg-primary/20 hover:bg-primary/40 text-white border border-primary/40"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm -mt-12 mb-16">
          * Prices are indicative. Final membership fees confirmed upon registration. Contact us for
          current rates and any available discounts.
        </p>

        {/* Contact form */}
        <div id="contact-form" className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400">
              Ready to start? Have a question? Send us a message and we&apos;ll get back to you.
            </p>
          </div>

          {formState === "success" ? (
            <div className="bg-green-900/30 border border-green-600/40 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="text-white text-xl font-bold mb-2">Message Sent!</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Thanks for reaching out! We&apos;ll get back to you as soon as possible. In the
                meantime, feel free to follow us on{" "}
                <a
                  href="https://www.facebook.com/share/1C5ti4GhBu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Facebook
                </a>
                .
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
              {/* Hidden subject field for Formspree */}
              <input type="hidden" name="subject" value="D Sports Lab Website Inquiry" />

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
                  Phone{" "}
                  <span className="text-gray-500 font-normal">(optional)</span>
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
                  placeholder="Tell us about yourself, your experience level, which sport(s) you're interested in, or any questions you have..."
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
                Or email us directly at{" "}
                <a href="mailto:Dsportslab@gmail.com" className="text-primary hover:text-accent transition-colors">
                  Dsportslab@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
