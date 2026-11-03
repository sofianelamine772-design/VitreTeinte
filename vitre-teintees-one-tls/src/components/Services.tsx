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
    <section id="services" className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Nos prestations"
          title="Un savoir-faire"
          highlight="sur mesure"
          text="Des films de qualité professionnelle, posés à la main par un spécialiste. Chaque véhicule est traité avec le même soin."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120} as="article">
              <div className="h-full rounded-2xl border border-white/[0.08] bg-coal p-6 transition-colors duration-300 hover:border-gold/40 sm:p-8">
                <s.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
