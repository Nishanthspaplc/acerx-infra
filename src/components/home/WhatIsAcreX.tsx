import { motion } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import PhoneMockup from "../ui/PhoneMockup";

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
              Acre-X is a technology-driven property platform built exclusively for Rohini, Delhi. We connect
              Owners, Brokers, Dealers, Builders, and Property Buyers through a trusted ecosystem where every
              listing is admin verified before it goes live.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              Explore properties using interactive Sector, Block, and Pocket layout maps, compare listings from
              verified professionals, and access complete property details with Google Maps integration—all from
              one seamless mobile experience.
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
              <PhoneMockup screen="Splash" />
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
