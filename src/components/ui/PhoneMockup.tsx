import AppScreen from "../app/AppScreens";
import type { ScreenName } from "../../data/content";

/** An iPhone-style frame with a mocked app screen inside. Scales to its width. */
export default function PhoneMockup({
  screen,
  className = "",
  glare = true,
}: {
  screen: ScreenName;
  className?: string;
  glare?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[300/620] rounded-[2.6rem] bg-[linear-gradient(145deg,#20293b,#0b1220)] p-[10px] shadow-lift ring-1 ring-white/10 ${className}`}
    >
      {/* titanium side buttons */}
      <span className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l bg-navy-600" />
      <span className="absolute -left-[3px] top-[160px] h-12 w-[3px] rounded-l bg-navy-600" />
      <span className="absolute -right-[3px] top-[140px] h-16 w-[3px] rounded-r bg-navy-600" />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
        {/* dynamic island */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-4 w-[30%] -translate-x-1/2 rounded-full bg-black" />
        <AppScreen name={screen} />
        {glare && (
          <div className="pointer-events-none absolute inset-0 z-30 rounded-[2rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.28)_0%,transparent_28%,transparent_70%,rgba(255,255,255,0.08)_100%)]" />
        )}
      </div>
    </div>
  );
}
