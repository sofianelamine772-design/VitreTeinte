"use client";

import { memo, useState } from "react";
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
              <CarPreview opacity={opacity} frontOpacity={frontOpacity} frontVlt={front} />
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

const CarPreview = memo(function CarPreview({ opacity, frontOpacity, frontVlt }: { opacity: number; frontOpacity: number; frontVlt: number }) {
  const frontWindow = "M196,112 L252,76 C266,69 284,66 300,66 L312,66 L312,112 Z";
  const rearWindow = "M322,66 L372,66 C402,68 428,84 452,110 L322,112 Z";

  return (
    <svg viewBox="0 0 620 240" className="w-full" role="img" aria-label="Aperçu de la teinte sur un véhicule">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3f" />
          <stop offset="0.45" stopColor="#141416" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bfe3ff" />
          <stop offset="0.6" stopColor="#f6e4b8" />
          <stop offset="1" stopColor="#d4a64a" />
        </linearGradient>
        <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#8d9199" />
          <stop offset="1" stopColor="#e3e5e9" />
        </linearGradient>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8a6420" stopOpacity="0" />
          <stop offset="0.3" stopColor="#f3d488" />
          <stop offset="0.7" stopColor="#c9973c" />
          <stop offset="1" stopColor="#8a6420" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rim">
          <stop offset="0" stopColor="#e3e5e9" />
          <stop offset="0.6" stopColor="#5a5d63" />
          <stop offset="1" stopColor="#1b1b1d" />
        </radialGradient>
        <clipPath id="glass">
          <path d={frontWindow} />
          <path d={rearWindow} />
        </clipPath>
      </defs>

      {/* Ombre au sol */}
      <ellipse cx="310" cy="212" rx="270" ry="10" fill="#000" opacity="0.7" />

      {/* Carrosserie */}
      <path
        d="M42,156 C42,136 58,126 84,121 L176,110 C206,82 246,62 304,58 L382,58 C424,60 456,82 486,108 L548,118 C572,123 582,138 582,154 L582,176 C582,183 577,188 569,188 L52,188 C44,188 38,183 38,176 Z"
        fill="url(#body)"
        stroke="url(#chrome)"
        strokeWidth="1.5"
      />
      <path d="M60,150 L560,150" stroke="url(#goldLine)" strokeWidth="2" />

      {/* Vitres : décor intérieur puis film teinté */}
      <g clipPath="url(#glass)">
        <rect x="180" y="60" width="290" height="60" fill="url(#sky)" />
        <circle cx="282" cy="96" r="11" fill="#2a2a2e" />
        <rect x="268" y="104" width="28" height="20" rx="8" fill="#2a2a2e" />
        <circle cx="372" cy="96" r="11" fill="#2a2a2e" />
        <rect x="358" y="104" width="28" height="20" rx="8" fill="#2a2a2e" />
        {/* Avant : conducteur & passager */}
        <path d={frontWindow} fill="#050506" opacity={frontOpacity} style={{ transition: "opacity .4s ease" }} />
        {/* Arrière : film choisi */}
        <path d={rearWindow} fill="#050506" opacity={opacity} style={{ transition: "opacity .4s ease" }} />
        <path d="M200,60 L250,120" stroke="#fff" strokeOpacity="0.18" strokeWidth="14" />
        <path d="M340,60 L390,120" stroke="#fff" strokeOpacity="0.12" strokeWidth="10" />
      </g>
      <path d={frontWindow} fill="none" stroke="url(#chrome)" strokeWidth="2" />
      <path d={rearWindow} fill="none" stroke="url(#chrome)" strokeWidth="2" />
      <line x1="317" y1="64" x2="317" y2="114" stroke="#0a0a0b" strokeWidth="8" />

      {/* Détails */}
      <path d="M545,128 L575,134 L572,144 L548,140 Z" fill="#f3d488" opacity="0.9" />
      <path d="M46,134 L64,130 L66,140 L46,142 Z" fill="#b3261e" opacity="0.85" />
      <rect x="276" y="124" width="22" height="4" rx="2" fill="url(#chrome)" />
      <rect x="376" y="124" width="22" height="4" rx="2" fill="url(#chrome)" />

      {/* Roues */}
      {[146, 476].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="188" r="38" fill="#050505" />
          <circle cx={cx} cy="188" r="30" fill="#0e0e10" stroke="#2a2a2e" strokeWidth="4" />
          <circle cx={cx} cy="188" r="20" fill="url(#rim)" />
          {[0, 72, 144, 216, 288].map((a) => (
            <rect
              key={a}
              x={cx - 2}
              y={170}
              width="4"
              height="18"
              rx="2"
              fill="#c9973c"
              transform={`rotate(${a} ${cx} 188)`}
            />
          ))}
          <circle cx={cx} cy="188" r="4" fill="#f3d488" />
        </g>
      ))}

      <text x="254" y="54" textAnchor="middle" fill="#fff" fillOpacity="0.45" fontSize="11" letterSpacing="2">
        AVANT · {frontVlt === 75 ? "ORIGINE" : `${frontVlt} %`}
      </text>
      <text x="388" y="54" textAnchor="middle" fill="#f3d488" fontSize="11" letterSpacing="2">
        ARRIÈRE · TEINTÉ
      </text>
    </svg>
  );
});
