import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, type LucideIcon } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

/** Shared shell for the tiny legal routes. */
export default function LegalPage({
  title,
  updated,
  icon: Icon = ShieldCheck,
  children,
}: {
  title: string;
  updated: string;
  icon?: LucideIcon;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0b1220,#131f38)] pb-20 pt-32 text-white">
        <div className="pointer-events-none absolute inset-0 bg-aurora opacity-70" />
        <Container className="relative z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-white/50">
              <Link to="/" className="hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{title}</span>
            </nav>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
              <Icon className="h-7 w-7" />
            </div>

            <h1 className="mt-5 font-heading text-4xl font-bold text-white sm:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-white/50">Last updated {updated}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-alt py-20">
        <Container>
          <Reveal>
            <div
              className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-12
                space-y-4 text-[15px] leading-relaxed text-muted
                [&>h2]:mt-8 [&>h2]:font-heading [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-navy [&>h2]:first:mt-0
                [&>h2]:border-b [&>h2]:border-line [&>h2]:pb-3
                [&_ul]:space-y-2 [&_ul]:marker:text-gold"
            >
              {children}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
