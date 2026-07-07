import { motion } from "framer-motion";
import { Search, MapPin, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { interactive } from "../../data/content";
import { iconMap } from "../../lib/icons";

const pins = [
  { x: "24%", y: "30%", price: "88L" },
  { x: "62%", y: "22%", price: "1.2Cr" },
  { x: "78%", y: "58%", price: "64L" },
  { x: "40%", y: "66%", price: "2.4Cr", active: true },
];

function MapCanvas() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-[#e7ecf2] shadow-lift ring-1 ring-line sm:h-[480px]">
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="400" height="400" fill="#e9eef4" />
        <path d="M-20 110 H420 M-20 250 H420 M120 -20 V420 M270 -20 V420" stroke="#d5dce5" strokeWidth="14" fill="none" />
        <path d="M-20 40 L420 260 M-20 340 L220 460" stroke="#dde4ec" strokeWidth="22" fill="none" />
        <rect x="30" y="130" width="70" height="70" rx="8" fill="#dde4ec" />
        <rect x="300" y="270" width="74" height="80" rx="8" fill="#dde4ec" />
        <rect x="300" y="60" width="70" height="60" rx="8" fill="#dde4ec" />
        <rect x="150" y="290" width="90" height="70" rx="8" fill="#dde4ec" />
        <path d="M60 220 q60 -40 130 -8 q70 32 150 -16" stroke="#c9e6d1" strokeWidth="16" fill="none" opacity="0.7" />
        <path d="M120 250 C 160 200, 240 200, 270 250" stroke="#c8a96a" strokeWidth="3" strokeDasharray="7 7" fill="none" />
      </svg>

      {/* search */}
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm shadow-soft">
        <Search className="h-4 w-4 text-muted" />
        <span className="text-muted">Rohini, New Delhi</span>
      </div>

      {/* pins */}
      {pins.map((p, i) => (
        <div key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: p.x, top: p.y }}>
          {p.active && <span className="absolute left-1/2 top-full h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/50 [animation:pulse-ring_2s_ease-out_infinite]" />}
          <div className={`relative flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold shadow-lift ${p.active ? "bg-navy text-white" : "bg-white text-navy"}`}>
            <MapPin className="h-3.5 w-3.5 text-gold" />₹{p.price}
          </div>
        </div>
      ))}

      {/* floating property card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-5 left-5 flex w-[240px] gap-3 rounded-2xl bg-white/90 p-3 shadow-lift backdrop-blur"
      >
        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg,#334366,#0b1220)" }}>
          <span className="absolute left-1 top-1 inline-flex items-center gap-0.5 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[8px] font-semibold text-white">
            <BadgeCheck className="h-2 w-2" /> Verified
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-navy">Sky Residency</p>
          <p className="text-xs text-muted">Sector 24 · 3 BHK</p>
          <p className="mt-1 text-sm font-bold text-navy">₹ 2.4 Cr</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function InteractiveExperience() {
  return (
    <section id="interactive" className="bg-surface-alt py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Interactive experience</p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Discovery that feels like <span className="text-gradient-navy">exploring.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted">
                Pan the map, tap a pin, save a favourite. Acre-X turns property hunting into
                something you'll actually enjoy.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {interactive.map((it, i) => {
                const Icon = iconMap[it.icon];
                return (
                  <Reveal key={it.title} delay={i * 0.05}>
                    <div className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gold shadow-soft ring-1 ring-line">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-heading text-[15px] font-semibold text-navy">{it.title}</h3>
                        <p className="mt-0.5 text-sm leading-snug text-muted">{it.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <MapCanvas />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
