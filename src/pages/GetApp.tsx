import { useEffect } from "react";
import { Download } from "lucide-react";
import Container from "../components/ui/Container";
import AppStoreBadges from "../components/ui/AppStoreBadges";
import { APP_STORE_URL, PLAY_STORE_URL } from "../data/content";

function detectStoreUrl(): string | null {
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return PLAY_STORE_URL;
  if (/iphone|ipad|ipod/i.test(ua)) return APP_STORE_URL;
  return null;
}

/** QR / smart-link landing page — redirects straight to the right app store based on device. */
export default function GetApp() {
  useEffect(() => {
    const url = detectStoreUrl();
    if (url) window.location.replace(url);
  }, []);

  return (
    <section className="flex min-h-[70vh] items-center bg-[linear-gradient(160deg,#0b1220,#131f38)] py-32 text-white">
      <Container className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy">
          <Download className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">Opening Acre-X…</h1>
        <p className="mt-3 text-white/60">
          Didn't redirect automatically? Pick your platform below.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreBadges />
        </div>
      </Container>
    </section>
  );
}
