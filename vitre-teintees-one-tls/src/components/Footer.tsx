import Image from "next/image";
import { nav, site, whatsappUrl } from "@/lib/site";
import { Snapchat, WhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-coal">
      <div className="gold-line absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt={site.name} width={64} height={64} className="h-16 w-16 rounded-full" />
            <div className="font-display uppercase leading-tight tracking-wider">
              <span className="text-chrome">Vitre </span>
              <span className="text-gold">Teintées</span>
              <span className="block text-xs tracking-[0.4em] text-white/50">One TLS</span>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
            Pose de films teintés et solaires pour véhicules et bâtiments à {site.city}.
            {" "}{site.tagline}.
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light/80">Navigation</p>
          <ul className="space-y-3 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/60 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light/80">Suivez-nous</p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#25D366]/50"
            >
              <WhatsApp className="h-5 w-5 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={site.snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#FFFC00]/50"
            >
              <Snapchat className="h-5 w-5 text-[#FFFC00]" />
              {site.snapchat}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">{site.area}</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/35 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>Films homologués · Conformes au Code de la route</p>
        </div>
      </div>
    </footer>
  );
}
