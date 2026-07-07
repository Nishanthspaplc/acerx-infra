// ponytail: decorative QR only (not scannable). Swap for a generated data-URI
// or the `qrcode` package if a real scan target is ever needed.
const N = 21;

function isFinder(r: number, c: number): boolean | null {
  const inTL = r < 7 && c < 7;
  const inTR = r < 7 && c >= N - 7;
  const inBL = r >= N - 7 && c < 7;
  if (!(inTL || inTR || inBL)) return null;
  const lr = inBL ? r - (N - 7) : r;
  const lc = inTR ? c - (N - 7) : c;
  const ring = lr === 0 || lr === 6 || lc === 0 || lc === 6;
  const core = lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4;
  return ring || core;
}

function isSeparator(r: number, c: number): boolean {
  const near = (a: number, b: number) => a >= b - 1 && a <= b + 7;
  const tl = near(r, 0) && near(c, 0);
  const tr = near(r, 0) && c >= N - 8;
  const bl = r >= N - 8 && near(c, 0);
  return (tl || tr || bl) && isFinder(r, c) === null;
}

export default function QrCode({ className = "" }: { className?: string }) {
  const cells = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const f = isFinder(r, c);
      const on = f !== null ? f : isSeparator(r, c) ? false : (r * 31 + c * 17 + r * c * 7) % 10 < 4;
      cells.push(on);
    }
  }
  return (
    <div className={`relative rounded-2xl bg-white p-3 shadow-lift ${className}`}>
      <div className="grid aspect-square gap-[2px]" style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}>
        {cells.map((on, i) => (
          <span key={i} className={`aspect-square rounded-[1px] ${on ? "bg-navy" : "bg-transparent"}`} />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-[#8a6d3b] font-heading text-sm font-bold text-white ring-2 ring-white">
        A
      </div>
    </div>
  );
}
