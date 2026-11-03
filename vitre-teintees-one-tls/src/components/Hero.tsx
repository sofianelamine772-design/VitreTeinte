import Image from "next/image";
import { site } from "@/lib/site";
import { Arrow, Snapchat, Star } from "./Icons";

const stats = [
  { value: "99%", label: "des UV bloqués" },
  { value: "-60%", label: "de chaleur en moins" },
  { value: "2h", label: "pose moyenne" },
  { value: "100%", label: "sur mesure" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* Halos lumineux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-silver/5 blur-[120px]" />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Spécialiste teinte de vitres · {site.city}
          </div>

          <h1 className="font-display text-[2rem] uppercase leading-[1.15] tracking-wide sm:text-5xl lg:text-[3.6rem]">
            <span className="text-chrome block">Vos vitres,</span>
            <span className="text-gold animate-shine block">votre style.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65 lg:mx-0">
            Pose de films teintés haut de gamme pour véhicules et bâtiments. Moins de chaleur,
            plus d&apos;intimité, une protection UV maximale — et une finition qui fait la
            différence.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/60 lg:justify-start">
            <Star className="h-4 w-4 text-gold" />
            Films garantis · Pose soignée · Devis gratuit
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#reservation"
              className="bg-gold group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-ink shadow-[0_10px_40px_-10px_rgba(212,166,74,0.9)] transition hover:brightness-110 sm:w-auto"
            >
              Réserver un créneau
              <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={site.snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-gold/50 hover:text-gold-light sm:w-auto"
            >
              <Snapchat className="h-5 w-5 text-[#FFFC00]" />
              {site.snapchat}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-[8%] rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-gold/20" />
          <div className="absolute inset-[6%] rounded-full border border-white/5" />
          <div className="animate-float relative">
            <Image
              src="/images/logo.png"
              alt={`Logo ${site.name}`}
              width={912}
              height={894}
              priority
              className="relative w-full rounded-full [mask-image:radial-gradient(circle,black_55%,transparent_71%)]"
            />
          </div>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="border-y border-white/5 bg-coal/60 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 text-center ${i % 2 === 1 ? "border-l border-white/5" : ""} ${
                i >= 2 ? "border-t border-white/5 md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl text-gold sm:text-3xl">{s.value}</dd>
              <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
