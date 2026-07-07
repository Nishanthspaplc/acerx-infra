import { Star, Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/content";

type T = (typeof testimonials)[number];

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

function Card({ t }: { t: T }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-line bg-white/80 p-7 shadow-soft backdrop-blur">
      <Quote className="h-7 w-7 text-gold/40" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">"{t.review}"</blockquote>
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full font-heading text-sm font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
        >
          {initials(t.name)}
        </div>
        <div>
          <figcaption className="font-heading text-sm font-semibold text-navy">{t.name}</figcaption>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="relative overflow-hidden bg-surface-alt py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Property Dealers everywhere."
          desc="Real stories from people who found their place with Acre-X."
        />
      </Container>

      {/* auto-scrolling marquee, pauses on hover, faded edges */}
      <div className="group relative mt-16 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max gap-6 px-6 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
