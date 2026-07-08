import { APP_STORE_URL, PLAY_STORE_URL } from "../../data/content";

/** Official-style store badges — self-contained inline SVG, no external assets. */

export function AppleIcon({ className = "h-7 w-7 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-7 w-7 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gplay" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e0ff" />
          <stop offset="35%" stopColor="#00f076" />
          <stop offset="70%" stopColor="#ffce00" />
          <stop offset="100%" stopColor="#ff3a44" />
        </linearGradient>
      </defs>
      <path d="M4.8 2.3 15.3 12 4.8 21.7c-.5-.2-.8-.7-.8-1.3V3.6c0-.6.3-1.1.8-1.3z" fill="url(#gplay)" />
      <path d="M15.3 12 4.8 2.3c.3-.1.7-.1 1 .1l12.4 7.1c.9.5.9 1.8 0 2.3l-2.6 1.5L15.3 12z" fill="#fff" fillOpacity="0.12" />
    </svg>
  );
}

function AppleBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Download on the App Store"
      className="group inline-flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white shadow-soft ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <AppleIcon />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-wide text-white/70">Download on the</span>
        <span className="font-heading text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}

function PlayBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Get it on Google Play"
      className="group inline-flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white shadow-soft ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <PlayIcon />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-wide text-white/70">GET IT ON</span>
        <span className="font-heading text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export default function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AppleBadge />
      <PlayBadge />
    </div>
  );
}
