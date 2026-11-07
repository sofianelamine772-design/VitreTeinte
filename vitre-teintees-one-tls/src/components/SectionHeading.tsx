import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, highlight, text }: Props) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-[1.2rem] uppercase leading-snug sm:text-3xl">
        <span className="text-chrome">{title}</span>
        {highlight && (
          <>
            {" "}
            <span className="text-gold">{highlight}</span>
          </>
        )}
      </h2>
      {text && <p className="mt-4 text-[15px] leading-relaxed text-white/55 sm:text-base">{text}</p>}
    </Reveal>
  );
}
