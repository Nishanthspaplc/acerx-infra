import { motion } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";
import { trust, stats } from "../../data/content";
import { iconMap } from "../../lib/icons";

/** Dark "trust band" — premium cards + animated statistics in one cohesive section. */
export default function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1220,#131f38)] py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Built on trust</p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            Why people feel safe with Acre-X.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trust.map((t, i) => {
            const Icon = iconMap[t.icon];
            return (
              <Reveal key={t.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* statistics */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-heading text-4xl font-bold text-gradient-gold sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
