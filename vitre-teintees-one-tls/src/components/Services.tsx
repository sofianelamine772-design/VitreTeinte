import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Building, Car, Lock, Sparkle, Sun, Thermo } from "./Icons";

const services = [
  {
    icon: Car,
    title: "Vitres teintées auto",
    text: "Films teintés posés sur la lunette arrière et les vitres passagers. Découpe sur mesure, sans bulles, pour une finition d'usine.",
  },
  {
    icon: Sun,
    title: "Film anti-UV & solaire",
    text: "Jusqu'à 99 % des UV bloqués : vous protégez votre peau, vos sièges et vos plastiques intérieurs de la décoloration.",
  },
  {
    icon: Thermo,
    title: "Film athermique",
    text: "Films céramiques qui rejettent la chaleur infrarouge. Habitacle plus frais l'été, clim qui consomme moins.",
  },
  {
    icon: Lock,
    title: "Film sécurité",
    text: "Film anti-effraction qui maintient le verre en cas de choc. Plus difficile à briser, plus sûr en cas d'accident.",
  },
  {
    icon: Building,
    title: "Bâtiments & vitrines",
    text: "Teinte de vitres pour maisons, bureaux et commerces : intimité, confort thermique et réduction de l'éblouissement.",
  },
  {
    icon: Sparkle,
    title: "Dépose & remplacement",
    text: "Votre ancien film fait des bulles ou a viré au violet ? On le retire proprement, colle comprise, avant de reposer du neuf.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nos prestations"
          title="Un savoir-faire"
          highlight="sur mesure"
          text="Des films de qualité professionnelle, posés à la main par un spécialiste. Chaque véhicule est traité avec le même soin."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120} as="article">
              <div className="group border-gold-gradient relative h-full overflow-hidden rounded-3xl p-8 transition duration-500 hover:-translate-y-1.5">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition duration-700 group-hover:bg-gold/20" />
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/20 to-transparent text-gold-light">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-base uppercase tracking-wide text-white">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/60">{s.text}</p>
                <span className="absolute bottom-8 right-8 font-display text-4xl text-white/[0.04]">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
