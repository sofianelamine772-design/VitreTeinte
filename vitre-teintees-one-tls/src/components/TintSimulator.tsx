"use client";

import { useState } from "react";
import CarScene from "./CarScene";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const presets = [
  { vlt: 5, name: "Limo", desc: "Intimité totale, effet « vitres noires »." },
  { vlt: 20, name: "Foncé", desc: "Le choix le plus populaire : élégant et discret." },
  { vlt: 35, name: "Moyen", desc: "Bon compromis entre look et visibilité de nuit." },
  { vlt: 50, name: "Léger", desc: "Teinte subtile, idéale pour le confort thermique." },
  { vlt: 70, name: "Clair", desc: "Quasi invisible, centré sur l'anti-UV et la chaleur." },
];

const frontOptions = [
  { vlt: 75, name: "Origine", note: "Vitre d'usine, sans film" },
  { vlt: 70, name: "70 %", note: "Film clair homologué" },
  { vlt: 45, name: "45 %", note: "Teinte marquée" },
];
const LEGAL_FRONT_MIN = 70;
const toOpacity = (v: number) => 0.96 - (v / 100) * 1.0;

// Valeurs indicatives pour un film céramique
const heatRejection = (vlt: number) => Math.round(68 - vlt * 0.45);
const glareReduction = (vlt: number) => Math.round(100 - vlt * 1.05);

export default function TintSimulator({ hideHeading = false }: { hideHeading?: boolean }) {
  const [vlt, setVlt] = useState(20);
  const [front, setFront] = useState(70);
  const [compare, setCompare] = useState(false);
  const opacity = toOpacity(vlt);
  const frontOpacity = toOpacity(front);
  const frontLegal = front >= LEGAL_FRONT_MIN;
  const active = presets.reduce((a, b) => (Math.abs(b.vlt - vlt) < Math.abs(a.vlt - vlt) ? b : a));

  return (
    <section id="simulateur" className="relative overflow-hidden bg-coal py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        {!hideHeading && (<SectionHeading
          eyebrow="Simulateur"
          title="Choisissez"
          highlight="votre teinte"
          text="Déplacez le curseur pour visualiser le rendu. Le pourcentage indique la lumière qui traverse la vitre : plus il est bas, plus la teinte est foncée."
        />)}

        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="border-gold-gradient rounded-[2rem] p-4 sm:p-8">
              <CarScene rearOpacity={compare ? 0 : opacity} frontOpacity={compare ? 0 : frontOpacity} />
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-full border border-white/10 bg-ink/60 px-3 py-1.5 text-white/70">
                    Avant · {front === 75 ? "Origine" : `${front} %`}
                  </span>
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-gold-light">
                    Arrière · {vlt} %
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setCompare((c) => !c)}
                  aria-pressed={compare}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-gold/60 hover:text-gold-light"
                >
                  {compare ? "Voir avec le film" : "Voir sans film"}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Teinte {active.name}</p>
                <p className="font-display text-6xl text-gold">{vlt}%</p>
              </div>
              <p className="max-w-[14rem] text-right text-sm text-white/60">{active.desc}</p>
            </div>

            <label htmlFor="vlt" className="sr-only">
              Pourcentage de transmission lumineuse
            </label>
            <input
              id="vlt"
              type="range"
              min={5}
              max={70}
              value={vlt}
              onChange={(e) => setVlt(Number(e.target.value))}
              className="tint-range mt-8 w-full"
            />

            <div className="mt-6 grid grid-cols-5 gap-2">
              {presets.map((p) => (
                <button
                  key={p.vlt}
                  type="button"
                  onClick={() => setVlt(p.vlt)}
                  className={`rounded-xl border py-3 text-sm font-semibold transition ${
                    vlt === p.vlt
                      ? "border-gold bg-gold/15 text-gold-light"
                      : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {p.vlt}%
                </button>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Vitres avant · conducteur & passager</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {frontOptions.map((o) => (
                  <button
                    key={o.vlt}
                    type="button"
                    onClick={() => setFront(o.vlt)}
                    aria-pressed={front === o.vlt}
                    className={`rounded-xl border px-2 py-3 text-center transition ${
                      front === o.vlt
                        ? "border-gold bg-gold/15 text-gold-light"
                        : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="block text-sm font-semibold">{o.name}</span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-white/40">{o.note}</span>
                  </button>
                ))}
              </div>
              <p
                role="status"
                className={`mt-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                  frontLegal
                    ? "border-gold/30 bg-gold/[0.06] text-gold-light"
                    : "border-red-400/30 bg-red-500/[0.07] text-red-200"
                }`}
              >
                {frontLegal
                  ? "Conforme : au moins 70 % de transmission lumineuse à l'avant."
                  : "Attention : en dessous de 70 % à l'avant, la teinte n'est pas conforme au Code de la route sur la voie publique (amende de 135 € et retrait de 3 points)."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Metric label="UV bloqués" value="99%" pct={99} />
              <Metric label="Chaleur" value={`${heatRejection(vlt)}%`} pct={heatRejection(vlt)} />
              <Metric label="Éblouissement" value={`${glareReduction(vlt)}%`} pct={glareReduction(vlt)} />
            </div>

            <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-relaxed text-white/55">
              <span className="font-semibold text-gold-light">À savoir :</span> la teinte est libre
              sur les vitres arrière et la lunette. Pare-brise et vitres avant : 70 % de lumière
              minimum exigés par le Code de la route.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink/60 p-4">
      <p className="font-display text-lg text-white sm:text-xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45 sm:text-[11px]">{label}</p>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
        <div className="bg-gold h-full rounded-full transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
