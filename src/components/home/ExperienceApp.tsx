import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../ui/Container";
import PhoneMockup from "../ui/PhoneMockup";
import type { ScreenName } from "../../data/content";

const gallery: { screen: ScreenName; title: string; sub: string }[] = [
  { screen: "Splash", title: "Open the app", sub: "A calm, premium first impression." },
  { screen: "Home", title: "Home", sub: "Personalised picks the moment you land." },
  { screen: "Listings", title: "Verified listings", sub: "Only real, vetted properties." },
  { screen: "Details", title: "Property details", sub: "Everything you need on one screen." },
  { screen: "Map", title: "Interactive map", sub: "Discover what's around, live." },
  { screen: "Favorites", title: "Favorites", sub: "Save and compare what you love." },
  { screen: "Profile", title: "Your profile", sub: "Visits, documents and support." },
];

export default function ExperienceApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row) return;
      // total horizontal overflow to scroll through, + a little breathing room
      setDist(Math.max(0, row.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative h-[360vh] bg-[linear-gradient(180deg,#0b1220,#131f38_50%,#0b1220)]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-aurora opacity-70" />

        <Container className="relative z-10 shrink-0">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold lg:[transform:translate(-65px,55px)]">Experience the app</p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-white sm:text-5xl lg:w-[576px] lg:max-w-none lg:[transform:translate(-65px,55px)]">
            Seven screens. One seamless journey.
          </h2>
          <p className="mt-3 max-w-xl text-white/60 lg:[transform:translate(-69px,48px)]">Keep scrolling — the whole app glides past, just like you'd swipe through it.</p>
        </Container>

        {/* horizontal rail */}
        <motion.div ref={rowRef} style={{ x }} className="relative z-10 mt-12 flex w-max items-center gap-10 px-[6vw]">
          {gallery.map((g, i) => (
            <div key={g.screen} className="group flex shrink-0 flex-col items-center">
              <motion.div
                className="w-[230px] sm:w-[250px]"
                style={{ rotate: i % 2 === 0 ? -3 : 3 }}
                whileHover={{ rotate: 0, y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <PhoneMockup screen={g.screen} />
              </motion.div>
              <div className="mt-7 text-center">
                <p className="font-heading text-lg font-semibold text-white">
                  <span className="mr-2 text-gold/80">{String(i + 1).padStart(2, "0")}</span>
                  {g.title}
                </p>
                <p className="mt-1 max-w-[240px] text-sm text-white/50">{g.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* progress bar */}
        <div className="relative z-10 mx-auto mt-10 h-1 w-40 overflow-hidden rounded-full bg-white/15">
          <motion.div style={{ width: progress }} className="h-full rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
