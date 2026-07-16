import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/content";
import DownloadAppButton from "../ui/DownloadAppButton";
import logo from "../../assets/AcreX_Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const transparent = onHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent py-5" : "border-b border-line/70 bg-white/80 py-3 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Acre-X" className="h-8 w-8 rounded-lg object-cover" />
          <span className={`font-heading text-lg font-bold tracking-tight ${transparent ? "text-white" : "text-navy"}`}>
            Acre-X
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={onHome ? link.href : `/${link.href}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  transparent ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-navy"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <DownloadAppButton variant={transparent ? "gold" : "primary"} className="!px-6 !py-2.5" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${transparent ? "text-white" : "text-navy"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={onHome ? link.href : `/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface-alt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <DownloadAppButton full />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
