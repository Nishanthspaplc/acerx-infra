import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { howItWorks } from "../../data/content";
import { iconMap } from "../../lib/icons";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="how" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From Layout Map to Your Next Property"
          desc="Experience property discovery through Rohini's interactive layout maps in just six simple steps."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          {/* timeline track */}
          <div className="absolute left-8 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-8 top-0 h-full w-px origin-top bg-gradient-to-b from-gold to-[#8a6d3b] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {howItWorks.map((s, i) => {
              const Icon = iconMap[s.icon];
              const left = i % 2 === 0;
              return (
                <div key={s.step} className="relative md:grid md:grid-cols-2 md:items-center md:gap-16">
                  {/* node */}
                  <span className="absolute left-8 top-2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-navy text-gold shadow-soft md:left-1/2">
                    <Icon className="h-5 w-5" />
                  </span>

                  <Reveal
                    delay={0.05}
                    className={`pl-20 md:pl-0 ${left ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div className="rounded-3xl border border-line bg-surface-alt/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                      <span className="font-heading text-sm font-bold tracking-widest text-gold">STEP {s.step}</span>
                      <h3 className="mt-1.5 font-heading text-xl font-semibold text-navy">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.desc}</p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
