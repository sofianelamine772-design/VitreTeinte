import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; highlight?: string; text?: string };

export default function PageHeader({ eyebrow, title, highlight, text }: Props) {
  return (
    <header className="relative isolate overflow-hidden border-b border-white/[0.06] pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[44rem] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(212,166,74,0.12)_0%,transparent_65%)]" />
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        <h1 className="font-display text-[1.7rem] uppercase leading-tight tracking-wide sm:text-5xl">
          <span className="text-chrome">{title}</span>
          {highlight && (
            <>
              {" "}
              <span className="text-gold">{highlight}</span>
            </>
          )}
        </h1>
        {text && <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">{text}</p>}
      </Reveal>
    </header>
  );
}
