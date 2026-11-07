import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check, Close } from "./Icons";

const rules = [
  { zone: "Lunette arrière", ok: true, detail: "Toutes teintes autorisées" },
  { zone: "Vitres arrière", ok: true, detail: "Toutes teintes autorisées" },
  { zone: "Vitres avant", ok: false, detail: "Transmission lumineuse ≥ 70 % obligatoire" },
  { zone: "Pare-brise", ok: false, detail: "Transmission lumineuse ≥ 70 % obligatoire" },
];

export default function Legal({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="reglementation" className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {!hideHeading && (<SectionHeading
          eyebrow="Réglementation"
          title="100 % conforme"
          highlight="à la loi"
          text="Depuis le 1er janvier 2017, le Code de la route encadre la teinte des vitres. Nous posons uniquement des films homologués, dans le respect de la réglementation."
        />)}

        <Reveal>
          <div className="border-gold-gradient overflow-hidden rounded-2xl">
            {rules.map((r, i) => (
              <div
                key={r.zone}
                className={`flex items-center gap-4 px-4 py-4 sm:gap-5 sm:px-10 sm:py-5 ${i > 0 ? "border-t border-white/5" : ""}`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                    r.ok ? "bg-gold/15 text-gold-light" : "bg-white/5 text-white/40"
                  }`}
                >
                  {r.ok ? <Check className="h-5 w-5" /> : <Close className="h-5 w-5" />}
                </span>
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-base font-semibold text-white sm:text-lg">{r.zone}</span>
                  <span className="text-sm text-white/55">{r.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-center text-sm leading-relaxed text-white/45">
            Exemptions possibles sur présentation d&apos;un certificat médical (photosensibilité)
            et pour les véhicules blindés. Le non-respect de la règle à l&apos;avant expose à une
            amende de 135 € et au retrait de 3 points.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
