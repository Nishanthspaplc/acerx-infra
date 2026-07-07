import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import SocialIcon from "../ui/SocialIcon";
import AppStoreBadges from "../ui/AppStoreBadges";
import { footerLinks } from "../../data/content";

function FootLink({ href, label }: { href: string; label: string }) {
  const cls = "text-sm text-white/60 transition-colors hover:text-gold";
  return href.startsWith("#") ? (
    <a href={href} className={cls}>{label}</a>
  ) : (
    <Link to={href} className={cls}>{label}</Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-[#8a6d3b] font-heading text-lg font-bold text-white">A</span>
              <span className="font-heading text-xl font-bold">Acre-X <span className="text-gold">Infra</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building tomorrow's communities. A modern property discovery platform — verified
              listings, trusted dealers, one beautiful app.
            </p>
            <div className="mt-6 flex gap-3">
              {(["facebook", "instagram", "twitter", "linkedin"] as const).map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon name={name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Product</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((l) => (
                <li key={l.href}><FootLink href={l.href} label={l.label} /></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> hello@acre-x.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 98765 43210</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Sector 24, Rohini, New Delhi</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Get the app</h4>
            <AppStoreBadges className="flex-col !items-stretch" />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Acre-X Infra. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((l) => (
              <FootLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
