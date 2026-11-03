import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check } from "./Icons";

// TODO: ajuster les tarifs réels
const plans = [
  {
    name: "Citadine",
    example: "Clio, 208, Polo…",
    price: "149",
    features: ["Lunette arrière", "Vitres arrière", "Film carbone teinté", "Anti-UV 99 %"],
  },
  {
    name: "Berline / Compacte",
    example: "Golf, Série 1, A3, Classe A…",
    price: "179",
    featured: true,
    features: ["Lunette arrière", "Vitres arrière + custodes", "Film carbone teinté", "Anti-UV 99 %", "Garantie pose"],
  },
  {
    name: "SUV / Break",
    example: "3008, Tiguan, X1, Q3…",
    price: "219",
    features: ["Lunette arrière", "Vitres arrière + custodes", "Film carbone teinté", "Anti-UV 99 %"],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative bg-coal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix"
          highlight="transparents"
          text="Tarifs indicatifs pour une pose complète de l'arrière du véhicule. Le prix exact dépend du modèle : demandez votre devis gratuit."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
                  p.featured
                    ? "border-gold-gradient shadow-[0_30px_80px_-30px_rgba(212,166,74,0.45)] lg:-translate-y-4"
                    : "border border-white/10 bg-ink/50"
                }`}
              >
                {p.featured && (
                  <span className="bg-gold absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    Le plus demandé
                  </span>
                )}
                <h3 className="font-display text-base uppercase tracking-wider text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-white/45">{p.example}</p>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="text-sm text-white/50">dès</span>
                  <span className={`font-display text-5xl ${p.featured ? "text-gold" : "text-chrome"}`}>
                    {p.price}€
                  </span>
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/75">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reservation"
                  className={`mt-10 block rounded-full py-3.5 text-center font-bold transition ${
                    p.featured
                      ? "bg-gold text-ink hover:brightness-110"
                      : "border border-white/15 text-white hover:border-gold/60 hover:text-gold-light"
                  }`}
                >
                  Réserver
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-sm text-white/50">
            Option <span className="text-gold-light">film céramique athermique</span> disponible ·
            Dépose d&apos;ancien film sur devis · Bâtiments et vitrines sur devis
          </p>
        </Reveal>
      </div>
    </section>
  );
}
