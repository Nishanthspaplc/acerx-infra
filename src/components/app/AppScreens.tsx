import {
  Search, Heart, MapPin, Star, BadgeCheck, Bed, Bath, Maximize2,
  ChevronLeft, SlidersHorizontal, Home, Map as MapIcon, User, CalendarCheck,
  Bell, FileText, Headphones, ChevronRight,
} from "lucide-react";
import type { ReactNode } from "react";
import type { ScreenName } from "../../data/content";

/* ------------------------------------------------------------------ *
 * Fully mocked in-app screens. Everything is CSS/SVG — no screenshots.
 * Rendered inside <PhoneMockup>. Text is intentionally tiny (decorative).
 * ------------------------------------------------------------------ */

const thumbs = [
  "linear-gradient(135deg,#334366,#0b1220)",
  "linear-gradient(135deg,#c8a96a,#8a6d3b)",
  "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
  "linear-gradient(135deg,#10b981,#065f46)",
  "linear-gradient(135deg,#a78bfa,#4c1d95)",
];

function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M0 40V26h10v-8h8v12h6V22h12v18h8V16h10v24h9V24h11v16h8V20h12v20h9V28h8v12H0z"
        fill="rgba(255,255,255,0.16)"
      />
    </svg>
  );
}

function Thumb({ i, className = "", children }: { i: number; className?: string; children?: ReactNode }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: thumbs[i % thumbs.length] }}>
      <Skyline className="absolute inset-x-0 bottom-0 h-1/2 w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,rgba(255,255,255,0.22),transparent)]" />
      {children}
    </div>
  );
}

function Verified() {
  return (
    <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/95 px-1.5 py-0.5 text-[7px] font-semibold text-white">
      <BadgeCheck className="h-2 w-2" /> Verified
    </span>
  );
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "bg-white/80" : "bg-navy/80";
  return (
    <div className={`flex items-center justify-between px-5 pt-2 text-[9px] font-semibold ${dark ? "text-white" : "text-navy"}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className={`h-2 w-3 rounded-[2px] ${c}`} />
        <span className={`h-2 w-2 rounded-full ${c}`} />
        <span className={`h-2 w-4 rounded-[2px] ${c}`} />
      </div>
    </div>
  );
}

const tabs = [
  { name: "home", Icon: Home },
  { name: "search", Icon: Search },
  { name: "map", Icon: MapIcon },
  { name: "fav", Icon: Heart },
  { name: "me", Icon: User },
] as const;

function TabBar({ active }: { active: (typeof tabs)[number]["name"] }) {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-line bg-white/95 px-2 pb-4 pt-2.5">
      {tabs.map(({ name, Icon }) => {
        const on = name === active;
        return (
          <div key={name} className="flex flex-col items-center gap-0.5">
            <Icon className={`h-4 w-4 ${on ? "text-gold" : "text-muted/60"}`} fill={on && name === "fav" ? "currentColor" : "none"} strokeWidth={2} />
            {on && <span className="h-1 w-1 rounded-full bg-gold" />}
          </div>
        );
      })}
    </div>
  );
}

function PriceCard({ i, title, area, price, wide = false }: { i: number; title: string; area: string; price: string; wide?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_-8px_rgba(15,23,42,0.25)] ring-1 ring-line">
      <Thumb i={i} className={wide ? "h-24" : "h-20"}>
        <div className="absolute left-2 top-2"><Verified /></div>
        <button className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
          <Heart className="h-2.5 w-2.5 text-navy" />
        </button>
      </Thumb>
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-navy">{title}</p>
          <span className="flex items-center gap-0.5 text-[8px] text-gold"><Star className="h-2 w-2 fill-gold" />4.9</span>
        </div>
        <p className="mt-0.5 flex items-center gap-0.5 text-[8px] text-muted"><MapPin className="h-2 w-2" />{area}</p>
        <p className="mt-1.5 text-[11px] font-bold text-navy">{price}</p>
      </div>
    </div>
  );
}

/* ----------------------------- screens ----------------------------- */

function SplashScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-[linear-gradient(160deg,#131f38,#0b1220)] text-white">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-gold to-[#8a6d3b] shadow-lift">
        <span className="font-heading text-3xl font-bold text-white">A</span>
        <span className="absolute -inset-2 rounded-[1.6rem] border border-gold/30" />
      </div>
      <p className="relative mt-5 font-heading text-lg font-semibold tracking-tight">
        Acre-X
      </p>
      <p className="relative mt-1 text-[9px] uppercase tracking-[0.35em] text-white/50">Infra</p>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-surface-alt">
      <StatusBar />
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-muted">Good evening 👋</p>
            <p className="font-heading text-sm font-semibold text-navy">Find your home</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-navy to-[#334366]" />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-soft ring-1 ring-line">
          <Search className="h-3.5 w-3.5 text-muted" />
          <span className="text-[9px] text-muted">Search Rohini, plots, floors…</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-gold"><SlidersHorizontal className="h-2.5 w-2.5 text-white" /></span>
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Homes", "Plots", "Floors", "Commercial"].map((c, k) => (
            <span key={c} className={`rounded-full px-2.5 py-1 text-[8px] font-medium ${k === 0 ? "bg-navy text-white" : "bg-white text-muted ring-1 ring-line"}`}>{c}</span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-4">
        <p className="text-[10px] font-semibold text-navy">Featured</p>
        <p className="text-[8px] text-gold">See all</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2.5 overflow-hidden px-4">
        <PriceCard i={0} title="3 BHK · Sec 24" area="Rohini" price="₹ 1.2 Cr" />
        <PriceCard i={1} title="Builder Floor" area="Sec 11" price="₹ 88 L" />
      </div>
      <TabBar active="home" />
    </div>
  );
}

function ListingsScreen() {
  return (
    <div className="flex h-full flex-col bg-surface-alt">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pt-3">
        <ChevronLeft className="h-4 w-4 text-navy" />
        <p className="font-heading text-sm font-semibold text-navy">Verified Homes</p>
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-line"><SlidersHorizontal className="h-3 w-3 text-navy" /></span>
      </div>
      <div className="mt-2.5 flex gap-1.5 px-4">
        {["₹ < 1 Cr", "3 BHK", "Ready", "Sec 24"].map((c) => (
          <span key={c} className="rounded-full bg-white px-2 py-1 text-[8px] font-medium text-muted ring-1 ring-line">{c}</span>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-2.5 px-4">
        {[
          { i: 2, t: "Sky Residency", a: "Sector 24, Rohini", p: "₹ 1.20 Cr" },
          { i: 3, t: "Green Acres Plot", a: "Sector 3, Rohini", p: "₹ 64 L" },
          { i: 4, t: "Corporate Suite", a: "Sector 17, Rohini", p: "₹ 2.4 Cr" },
        ].map((r) => (
          <div key={r.t} className="flex gap-2.5 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-line">
            <Thumb i={r.i} className="h-14 w-16 shrink-0 rounded-xl">
              <div className="absolute left-1 top-1"><Verified /></div>
            </Thumb>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-[10px] font-semibold text-navy">{r.t}</p>
              <p className="flex items-center gap-0.5 text-[8px] text-muted"><MapPin className="h-2 w-2" />{r.a}</p>
              <p className="mt-1 text-[11px] font-bold text-navy">{r.p}</p>
            </div>
            <Heart className="h-3 w-3 text-muted/50" />
          </div>
        ))}
      </div>
      <TabBar active="search" />
    </div>
  );
}

function DetailsScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <Thumb i={0} className="h-40 w-full">
        <StatusBar dark />
        <div className="flex items-center justify-between px-4 pt-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90"><ChevronLeft className="h-3 w-3 text-navy" /></span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90"><Heart className="h-3 w-3 text-navy" /></span>
        </div>
        <div className="absolute bottom-2 left-3"><Verified /></div>
      </Thumb>
      <div className="flex flex-1 flex-col px-4 pt-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-navy">Acre-X Sky Residency</p>
            <p className="mt-0.5 flex items-center gap-0.5 text-[9px] text-muted"><MapPin className="h-2.5 w-2.5" />Sector 24, Rohini</p>
          </div>
          <p className="font-heading text-sm font-bold text-navy">₹ 1.2 Cr</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { Icon: Bed, l: "3 Beds" },
            { Icon: Bath, l: "2 Baths" },
            { Icon: Maximize2, l: "1450 ft²" },
          ].map(({ Icon, l }) => (
            <div key={l} className="flex flex-col items-center gap-1 rounded-xl bg-surface-alt py-2">
              <Icon className="h-3.5 w-3.5 text-gold" />
              <span className="text-[8px] font-medium text-navy">{l}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-surface-alt p-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-gold to-[#8a6d3b]" />
          <div className="leading-tight">
            <p className="text-[9px] font-semibold text-navy">Rahul Mehta</p>
            <p className="text-[7px] text-muted">Verified dealer · 4.9★</p>
          </div>
          <span className="ml-auto text-[8px] font-semibold text-gold">Chat</span>
        </div>
        <button className="mt-auto mb-4 flex items-center justify-center gap-1 rounded-full bg-navy py-2.5 text-[10px] font-semibold text-white">
          <CalendarCheck className="h-3 w-3" /> Book Site Visit
        </button>
      </div>
    </div>
  );
}

function MapScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#eef1f5]">
      {/* stylised map */}
      <svg viewBox="0 0 200 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="200" height="400" fill="#e7ecf2" />
        <path d="M-20 120 H220 M-20 260 H220 M60 -20 V420 M140 -20 V420" stroke="#d3dae3" strokeWidth="10" fill="none" />
        <path d="M-20 60 L220 200 M-20 300 L120 420" stroke="#dfe5ec" strokeWidth="16" fill="none" />
        <rect x="14" y="150" width="34" height="34" rx="4" fill="#dbe2ea" />
        <rect x="150" y="285" width="36" height="40" rx="4" fill="#dbe2ea" />
        <rect x="152" y="70" width="34" height="34" rx="4" fill="#dbe2ea" />
        <path d="M20 200 q40 -30 80 -6 q40 24 90 -10" stroke="#cfe6d6" strokeWidth="8" fill="none" opacity="0.7" />
      </svg>

      <StatusBar />
      <div className="relative mx-4 mt-2 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-soft">
        <Search className="h-3.5 w-3.5 text-muted" />
        <span className="text-[9px] text-muted">Rohini, New Delhi</span>
      </div>

      {/* pins */}
      {[
        { x: "22%", y: "34%", on: false },
        { x: "68%", y: "26%", on: false },
        { x: "44%", y: "52%", on: true },
        { x: "78%", y: "62%", on: false },
      ].map((p, k) => (
        <div key={k} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: p.x, top: p.y }}>
          <div className={`flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[8px] font-bold shadow ${p.on ? "bg-navy text-white" : "bg-white text-navy"}`}>
            <MapPin className={`h-2.5 w-2.5 ${p.on ? "text-gold" : "text-gold"}`} />₹{p.on ? "1.2Cr" : "88L"}
          </div>
        </div>
      ))}

      {/* selected card */}
      <div className="relative mx-4 mt-auto mb-3 flex gap-2.5 rounded-2xl bg-white p-2 shadow-lift">
        <Thumb i={2} className="h-14 w-16 shrink-0 rounded-xl">
          <div className="absolute left-1 top-1"><Verified /></div>
        </Thumb>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[10px] font-semibold text-navy">Sky Residency</p>
          <p className="flex items-center gap-0.5 text-[8px] text-muted"><MapPin className="h-2 w-2" />Sector 24 · 3 BHK</p>
          <p className="mt-1 text-[11px] font-bold text-navy">₹ 1.2 Cr</p>
        </div>
      </div>
      <TabBar active="map" />
    </div>
  );
}

function FavoritesScreen() {
  return (
    <div className="flex h-full flex-col bg-surface-alt">
      <StatusBar />
      <div className="flex items-center gap-1.5 px-4 pt-3">
        <Heart className="h-4 w-4 fill-gold text-gold" />
        <p className="font-heading text-sm font-semibold text-navy">Favorites</p>
        <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[8px] text-muted ring-1 ring-line">4 saved</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5 px-4">
        <PriceCard i={1} title="Villa Grande" area="Sector 22" price="₹ 3.1 Cr" />
        <PriceCard i={2} title="Sky Residency" area="Sector 24" price="₹ 1.2 Cr" />
        <PriceCard i={3} title="Green Acres" area="Sector 3" price="₹ 64 L" />
        <PriceCard i={4} title="Biz Hub" area="Sector 9" price="₹ 2.4 Cr" />
      </div>
      <TabBar active="fav" />
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-surface-alt">
      <div className="bg-[linear-gradient(160deg,#131f38,#0b1220)] px-4 pb-5">
        <StatusBar dark />
        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#8a6d3b] font-heading text-lg font-bold text-white">A</div>
          <div>
            <p className="font-heading text-sm font-semibold text-white">Aarav Sharma</p>
            <p className="flex items-center gap-1 text-[9px] text-gold"><Star className="h-2.5 w-2.5 fill-gold" />Premium member</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-xl bg-white/10 text-center">
          {[["12", "Saved"], ["4", "Visits"], ["2", "Deals"]].map(([n, l]) => (
            <div key={l} className="py-2">
              <p className="font-heading text-sm font-bold text-white">{n}</p>
              <p className="text-[7px] uppercase tracking-wide text-white/60">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1.5 px-4">
        {[
          { Icon: Heart, l: "Saved properties" },
          { Icon: CalendarCheck, l: "Site visits" },
          { Icon: FileText, l: "My documents" },
          { Icon: Bell, l: "Alerts" },
          { Icon: Headphones, l: "Support" },
        ].map(({ Icon, l }) => (
          <div key={l} className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-soft ring-1 ring-line">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-surface-alt"><Icon className="h-3 w-3 text-gold" /></span>
            <span className="text-[10px] font-medium text-navy">{l}</span>
            <ChevronRight className="ml-auto h-3 w-3 text-muted/50" />
          </div>
        ))}
      </div>
      <TabBar active="me" />
    </div>
  );
}

const registry: Record<ScreenName, () => ReactNode> = {
  Splash: SplashScreen,
  Home: HomeScreen,
  Listings: ListingsScreen,
  Details: DetailsScreen,
  Map: MapScreen,
  Favorites: FavoritesScreen,
  Profile: ProfileScreen,
};

export default function AppScreen({ name }: { name: ScreenName }) {
  return <>{registry[name]()}</>;
}
