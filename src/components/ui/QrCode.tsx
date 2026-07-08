import { useEffect, useState } from "react";
import QRCode from "qrcode";
import logo from "../../assets/AcreX_Logo.png";

/** Absolute smart-link — resolves to the right app store based on the scanning device. */
function getAppUrl() {
  return `${window.location.origin}/get-app`;
}

/** Real, scannable QR code (high error-correction so the centered logo doesn't break the scan). */
export default function QrCode({ className = "" }: { className?: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(getAppUrl(), {
      errorCorrectionLevel: "H",
      margin: 1,
      width: 320,
      color: { dark: "#0b1220", light: "#ffffff" },
    }).then((url) => {
      if (!cancelled) setSrc(url);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`relative rounded-2xl bg-white p-3 shadow-lift ${className}`}>
      <div className="aspect-square w-full">
        {src && <img src={src} alt="Scan to download Acre-X" className="h-full w-full" />}
      </div>
      <img
        src={logo}
        alt="Acre-X"
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-lg object-cover ring-2 ring-white"
      />
    </div>
  );
}
