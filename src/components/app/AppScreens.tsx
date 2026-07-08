import type { ScreenName } from "../../data/content";
import logo from "../../assets/AcreX_Logo.png";

import home from "../../assets/screens/home.png";
import listings from "../../assets/screens/listings.png";
import details from "../../assets/screens/details.png";
import map from "../../assets/screens/map.png";
import favorites from "../../assets/screens/favorites.png";
import profile from "../../assets/screens/profile.png";

const screens: Partial<Record<ScreenName, string>> = {
  Home: home,
  Listings: listings,
  Details: details,
  Map: map,
  Favorites: favorites,
  Profile: profile,
};

function SplashScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-[linear-gradient(160deg,#131f38,#0b1220)] text-white">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] shadow-lift">
        <img src={logo} alt="Acre-X" className="h-16 w-16 rounded-[1.25rem] object-cover" />
        <span className="absolute -inset-2 rounded-[1.6rem] border border-gold/30" />
      </div>
      <p className="relative mt-5 font-heading text-lg font-semibold tracking-tight">Acre-X</p>
      <p className="relative mt-1 text-[9px] uppercase tracking-[0.35em] text-white/50">Infra</p>
    </div>
  );
}

export default function AppScreen({ name }: { name: ScreenName }) {
  if (name === "Splash") return <SplashScreen />;
  return (
    <img
      src={screens[name]}
      alt={name}
      className="h-full w-full object-cover"
    />
  );
}