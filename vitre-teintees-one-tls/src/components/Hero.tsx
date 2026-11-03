import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";
import { Arrow, WhatsApp } from "./Icons";

const stats = [
  { value: "99 %", label: "des UV bloqués" },
  { value: "-60 %", label: "de chaleur" },
  { value: "2 h", label: "de pose en moyenne" },
  { value: "Sur mesure", label: "pour chaque véhicule" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28">
        <div className="text-center lg:text-left">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/45">
            Teinte de vitres · {site.city}
          </p>

          <h1 className="font-display text-[1.9rem] uppercase leading-[1.15] tracking-wide sm:text-5xl lg:text-[3.5rem]">
            <span className="text-chrome block">Vos vitres,</span>
            <span className="text-gold block">votre style.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0">
            Pose de films teintés haut de gamme pour véhicules et bâtiments. Moins de chaleur,
            plus d&apos;intimité et une protection UV maximale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#reservation"
              className="bg-gold group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-ink transition hover:brightness-110"
            >
              Réserver un créneau
              <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.06]"
            >
              <WhatsApp className="h-5 w-5 text-[#25D366]" />
              Devis sur WhatsApp
            </a>
          </div>
        </div>

        <div className="relative order-first mx-auto w-56 sm:w-72 lg:order-none lg:w-full lg:max-w-[30rem]">
          <Image
            src="/images/logo.png"
            alt={`Logo ${site.name}`}
            width={912}
            height={894}
            priority
            sizes="(min-width: 1024px) 480px, 288px"
            className="w-full [mask-image:radial-gradient(circle,black_58%,transparent_72%)]"
          />
        </div>
      </div>

      <div className="border-y border-white/[0.06] bg-coal">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse px-4 py-6 text-center sm:py-8 ${
                i % 2 === 1 ? "border-l border-white/[0.06]" : ""
              } ${i >= 2 ? "border-t border-white/[0.06] md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-white/45 sm:text-xs">{s.label}</dt>
              <dd className="font-display text-lg text-gold sm:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
