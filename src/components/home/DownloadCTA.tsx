import { motion } from "framer-motion";
import { ScanLine, Check } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AppStoreBadges from "../ui/AppStoreBadges";
import PhoneMockup from "../ui/PhoneMockup";
import QrCode from "../ui/QrCode";

const perks = ["Free to download", "No hidden charges", "Verified listings only"];

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-[linear-gradient(150deg,#131f38_0%,#0b1220_55%,#1a2440_100%)] py-24 text-white lg:py-32">
      {/* animated gradient wash + floating shapes */}
      <div className="pointer-events-none absolute inset-0 animate-gradient bg-[radial-gradient(60%_60%_at_15%_20%,rgba(200,169,106,0.18),transparent),radial-gradient(50%_50%_at_85%_80%,rgba(51,67,102,0.5),transparent)]" />
      <div className="pointer-events-none absolute left-[8%] top-16 h-24 w-24 rounded-3xl bg-gold/10 blur-2xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-20 right-[12%] h-32 w-32 rounded-full border border-white/10 animate-float-slower" />
      <div className="pointer-events-none absolute right-[30%] top-24 h-3 w-3 rounded-full bg-gold/60 animate-float-slow" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Get started</p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Download <span className="text-gradient-gold">Acre-X</span> today.
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/70">
                Your next property is a tap away. Join 50,000+ home seekers discovering
                verified properties the smarter way.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-navy"><Check className="h-3 w-3" /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">
                <AppStoreBadges />
                <div className="flex items-center gap-3">
                  <QrCode className="w-28" />
                  <div className="max-w-[8rem] text-sm text-white/60">
                    <ScanLine className="mb-1 h-5 w-5 text-gold" />
                    Scan to download on your phone
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* large animated phone */}
          <Reveal delay={0.1} className="relative mx-auto hidden w-full max-w-sm justify-center lg:flex">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold/20 blur-[100px]" />
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[280px] animate-float-slower"
            >
              <PhoneMockup screen="Home" />
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
