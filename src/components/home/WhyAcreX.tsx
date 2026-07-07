import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { whyAcreX } from "../../data/content";
import { iconMap } from "../../lib/icons";

export default function WhyAcreX() {
  return (
    <section id="why" className="relative bg-surface-alt py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Acre-X"
          title="Everything you'd want, minus the guesswork."
          desc="We rebuilt property discovery around trust, speed and a genuinely delightful mobile experience."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyAcreX.map((f, i) => {
            const Icon = iconMap[f.icon];
            const highlight = i === 0;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    highlight
                      ? "bg-[linear-gradient(160deg,#131f38,#0b1220)] text-white shadow-lift"
                      : "border border-line bg-white text-navy shadow-soft hover:shadow-lift"
                  }`}
                >
                  {/* corner glow on hover */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? "bg-gold text-navy" : "bg-navy text-gold"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className={`mt-6 font-heading text-xl font-semibold ${highlight ? "text-white" : "text-navy"}`}>
                    {f.title}
                  </h3>
                  <p className={`mt-3 text-[15px] leading-relaxed ${highlight ? "text-white/70" : "text-muted"}`}>
                    {f.desc}
                  </p>

                  {highlight && (
                    <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gold-soft ring-1 ring-white/15">
                      Zero fake listings
                    </span>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
