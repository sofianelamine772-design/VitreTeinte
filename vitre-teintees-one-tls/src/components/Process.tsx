import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Award, Clock, Eye, Shield } from "./Icons";

const perks = [
  { icon: Award, title: "Films premium", text: "Films carbone et céramique de grandes marques, couleur stable dans le temps." },
  { icon: Shield, title: "Pose garantie", text: "Garantie contre les bulles, le décollement et la décoloration." },
  { icon: Clock, title: "Rapide", text: "Votre véhicule prêt en quelques heures, sur rendez-vous." },
  { icon: Eye, title: "Intimité", text: "Vos passagers et vos affaires à l'abri des regards." },
];

const steps = [
  { title: "Contact & devis", text: "Envoyez-nous le modèle de votre véhicule par WhatsApp, Snapchat ou via le formulaire. Devis gratuit et rapide." },
  { title: "Choix du film", text: "On vous conseille sur la teinte et le type de film selon vos envies et la réglementation." },
  { title: "Préparation", text: "Nettoyage minutieux des vitres et découpe du film sur mesure, au millimètre." },
  { title: "Pose & finition", text: "Thermoformage et pose à la main. Contrôle qualité, puis vous repartez avec style." },
];

export default function Process() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading eyebrow="Pourquoi One TLS" title="L'exigence" highlight="du détail" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <div className="h-full bg-ink p-6 text-center sm:p-8">
                <p.icon className="mx-auto h-9 w-9 text-gold" />
                <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 sm:mt-28">
          <SectionHeading eyebrow="Déroulement" title="Comment" highlight="ça se passe" />
          <div className="relative">
          <div className="gold-line absolute left-0 right-0 top-7 hidden md:block" />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 150} className="relative text-center">
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ink font-display text-gold">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/55">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
