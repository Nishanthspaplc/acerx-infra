import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "gold" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-600",
  gold: "bg-gold text-navy hover:brightness-105",
  secondary: "bg-white text-navy border border-line hover:border-navy",
  ghost: "bg-transparent text-white border border-white/40 hover:border-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  className?: string;
}) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  function ripple(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
  }

  const classes = `relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  const rippleEls = ripples.map((r) => (
    <span
      key={r.id}
      className="pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
      style={{ left: r.x, top: r.y, width: 10, height: 10, transform: "translate(-50%,-50%)" }}
    />
  ));

  if (href) {
    // In-page anchor — same tab; Lenis intercepts the click for smooth scroll.
    if (href.startsWith("#")) {
      return (
        <a href={href} onClick={(e) => { ripple(e); onClick?.(); }} className={classes}>
          {children}
          {rippleEls}
        </a>
      );
    }
    if (href.startsWith("/")) {
      return (
        <Link to={href} onClick={(e) => { ripple(e); onClick?.(); }} className={classes}>
          {children}
          {rippleEls}
        </Link>
      );
    }
    return (
      <a href={href} onClick={ripple} className={classes} target="_blank" rel="noreferrer">
        {children}
        {rippleEls}
      </a>
    );
  }

  return (
    <button onClick={(e) => { ripple(e); onClick?.(); }} className={classes}>
      {children}
      {rippleEls}
    </button>
  );
}
