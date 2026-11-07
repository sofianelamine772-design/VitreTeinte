import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import Reveal from "./Reveal";
import { Arrow, WhatsApp } from "./Icons";

export default function CtaBand() {
  return (
    <section className="relative py-16 sm:py-24">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-coal px-6 py-12 text-center sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,166,74,0.14),transparent_60%)]" />
          <h2 className="relative font-display text-xl uppercase leading-snug sm:text-3xl">
            <span className="text-chrome">Prêt à</span> <span className="text-gold">teinter vos vitres ?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/55">
            Réservez votre créneau en ligne en 1 minute ou demandez un devis gratuit sur WhatsApp.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/reservation" className="bg-gold group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-ink transition hover:brightness-110">
              Réserver un créneau
              <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-[#25D366]/60">
              <WhatsApp className="h-5 w-5 text-[#25D366]" />
              Devis sur WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
