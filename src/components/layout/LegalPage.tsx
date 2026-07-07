import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";

/** Shared shell for the tiny legal routes. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-[linear-gradient(160deg,#0b1220,#131f38)] pb-16 pt-32 text-white">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          <p className="mt-2 text-sm text-white/50">Last updated {updated}</p>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted [&>h2]:mt-8 [&>h2]:font-heading [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-navy">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
