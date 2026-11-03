import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, highlight, text }: Props) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="gold-line w-10" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-light/80">
          {eyebrow}
        </span>
        <span className="gold-line w-10" />
      </div>
      <h2 className="font-display text-2xl uppercase leading-snug tracking-wide sm:text-4xl">
        <span className="text-chrome">{title}</span>
        {highlight && (
          <>
            {" "}
            <span className="text-gold">{highlight}</span>
          </>
        )}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-white/60">{text}</p>}
    </Reveal>
  );
}
