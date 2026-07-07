import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight, Star, BadgeCheck, MapPin } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import AppStoreBadges from "../ui/AppStoreBadges";
import PhoneMockup from "../ui/PhoneMockup";

const words = ["Building", "Tomorrow's", "Communities"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const phoneRot = useTransform(scrollYProgress, [0, 1], [-4, -10]);
  const backY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blobA = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const blobB = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(165deg,#0b1220_0%,#131f38_60%,#0b1220_100%)] pb-20 pt-32 text-white">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-90" />
      <motion.div style={{ y: blobA }} className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-[120px]" />
      <motion.div style={{ y: blobB }} className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#334366]/40 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-gold" />
              The Acre-X property ecosystem
            </motion.div>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {words.map((w, i) => (
                <span key={w} className="mr-3 inline-block overflow-hidden align-bottom">
                  <motion.span
                    className={`inline-block ${i === 2 ? "text-gradient-gold" : "text-white"}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Acre-X is a modern property discovery platform. Find verified homes, plots,
              builder floors and commercial spaces — and connect with trusted dealers, all
              from one beautifully simple app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button href="#download" variant="gold" className="!px-8">
                  <Download className="h-4 w-4" /> Download App
                </Button>
              </Magnetic>
              <Button href="#what" variant="ghost">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-8"
            >
              <AppStoreBadges />
              <div className="mt-5 flex items-center gap-3 text-sm text-white/60">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span><span className="font-semibold text-white">4.9</span> · loved by 50,000+ home seekers</span>
              </div>
            </motion.div>
          </div>

          {/* phones */}
          <motion.div style={{ opacity: fade }} className="relative mx-auto hidden h-[560px] w-full max-w-md lg:block">
            <motion.div style={{ y: backY, rotate: 8 }} className="absolute right-2 top-16 w-[210px] opacity-90">
              <PhoneMockup screen="Map" glare={false} />
            </motion.div>

            <motion.div style={{ y: phoneY, rotate: phoneRot }} className="absolute left-2 top-0 w-[248px] animate-float-slower">
              <PhoneMockup screen="Home" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute left-0 top-24 flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 text-navy shadow-lift backdrop-blur"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white"><BadgeCheck className="h-4 w-4" /></span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold">Verified listing</p>
                <p className="text-[9px] text-muted">Checked & legal-clear</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-16 right-0 flex items-center gap-2 rounded-2xl bg-navy/80 px-3 py-2 text-white shadow-lift ring-1 ring-white/10 backdrop-blur"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy"><MapPin className="h-4 w-4" /></span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold">Sector 24, Rohini</p>
                <p className="text-[9px] text-white/60">₹ 1.2 Cr · 3 BHK</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* scroll hint */}
      <motion.div style={{ opacity: fade }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="h-1.5 w-1 rounded-full bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
