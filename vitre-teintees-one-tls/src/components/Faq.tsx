import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Plus } from "./Icons";

const faqs = [
  {
    q: "Combien de temps dure la pose ?",
    a: "Comptez en moyenne 1h30 à 3h selon le véhicule et le nombre de vitres. Vous pouvez attendre sur place ou revenir récupérer votre voiture.",
  },
  {
    q: "Puis-je baisser mes vitres juste après ?",
    a: "Il faut attendre 3 à 5 jours avant de descendre les vitres teintées, le temps que la colle sèche complètement. De petites traces d'humidité peuvent apparaître les premiers jours : c'est normal, elles disparaissent seules.",
  },
  {
    q: "Le film abîme-t-il le dégivrage arrière ?",
    a: "Non. Le film est posé côté intérieur avec une technique adaptée qui préserve totalement les résistances du dégivrage.",
  },
  {
    q: "Comment entretenir mes vitres teintées ?",
    a: "Utilisez un chiffon microfibre doux et un nettoyant sans ammoniaque. Évitez les grattoirs et les éponges abrasives.",
  },
  {
    q: "Le film résiste-t-il dans le temps ?",
    a: "Nos films sont garantis contre les bulles, le décollement et la décoloration. Un film de qualité ne vire pas au violet, contrairement aux films bas de gamme.",
  },
  {
    q: "Faut-il prendre rendez-vous ?",
    a: "Oui, la pose se fait uniquement sur rendez-vous. Réservez directement votre créneau en ligne grâce au calendrier, ou écrivez-nous sur WhatsApp ou Snapchat pour un devis.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative bg-coal py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions" highlight="fréquentes" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-white/10 bg-ink/50 transition open:border-gold/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 text-gold transition duration-300 group-open:rotate-45" />
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-white/60">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
