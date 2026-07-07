import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className={`mx-auto max-w-2xl ${center ? "" : "mx-0"}`}>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
        {desc && <p className="mt-4 text-lg text-muted">{desc}</p>}
      </div>
    </Reveal>
  );
}
