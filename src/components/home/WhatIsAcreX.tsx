import { motion } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import PhoneMockup from "../ui/PhoneMockup";
import { capabilities } from "../../data/content";
import { iconMap } from "../../lib/icons";

export default function WhatIsAcreX() {
  return (
    <section id="what" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">What is Acre-X?</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              One app for <span className="text-gradient-navy">every kind</span> of property.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Buying land or a home usually means endless calls, unverified listings and
              agents you can't fully trust. Acre-X replaces all of that with a single,
              modern platform — where every property is verified, every dealer is rated,
              and everything you need is one tap away.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Explore homes, plots, builder floors and commercial spaces on an interactive
              map, save your favourites, and book a site visit without leaving the app.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-aurora blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float-slow"
            >
              <PhoneMockup screen="Listings" />
            </motion.div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon];
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-surface-alt/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
