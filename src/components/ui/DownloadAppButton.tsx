import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../data/content";
import { AppleIcon, PlayIcon } from "./AppStoreBadges";

type Variant = "primary" | "gold" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-600",
  gold: "bg-gold text-navy hover:brightness-105",
  secondary: "bg-white text-navy border border-line hover:border-navy",
  ghost: "bg-transparent text-white border border-white/40 hover:border-white",
};

/** "Download App" trigger — opens a small picker so the user chooses their platform. */
export default function DownloadAppButton({
  variant = "primary",
  className = "",
  full = false,
}: {
  variant?: Variant;
  className?: string;
  full?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${full ? "w-full" : "inline-block"}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${full ? "w-full" : ""} ${className}`}
      >
        <Download className="h-4 w-4" /> Download App
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-line bg-white p-1.5 text-left shadow-lift"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-alt"
          >
            <AppleIcon className="h-6 w-6 shrink-0 text-navy" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-navy">App Store</span>
              <span className="text-xs text-muted">iPhone &amp; iPad</span>
            </span>
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-alt"
          >
            <PlayIcon className="h-6 w-6 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-navy">Google Play</span>
              <span className="text-xs text-muted">Android</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
