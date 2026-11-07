import { memo } from "react";

type Props = { rearOpacity: number; frontOpacity: number };

// Silhouette de berline vue de profil (avant à droite)
const BODY =
  "M66,236 C58,222 56,198 64,180 C68,170 78,166 98,162 C140,156 190,152 236,148 C270,142 300,116 340,92 C372,76 420,68 470,68 C520,68 556,76 588,94 C612,108 628,126 650,136 C700,142 742,150 764,164 C778,174 782,196 780,214 L778,236 Z";
const REAR_WIN =
  "M270,140 C296,130 320,110 346,97 C364,89 384,86 410,85 L410,140 Z";
const FRONT_WIN =
  "M426,85 L494,84 C528,86 558,106 590,140 L426,140 Z";

function Wheel({ cx }: { cx: number }) {
  return (
    <g>
      <circle cx={cx} cy={226} r={56} fill="#030303" />
      <circle cx={cx} cy={226} r={46} fill="#0b0b0c" stroke="#1d1d20" strokeWidth="2" />
      <circle cx={cx} cy={226} r={33} fill="url(#rim)" />
      {/* étrier de frein */}
      <path
        d={`M${cx + 6},${226 - 30} A30,30 0 0 1 ${cx + 30},${226 - 6} L${cx + 22},${226 - 4} A22,22 0 0 0 ${cx + 5},${226 - 21} Z`}
        fill="#c9973c"
        opacity="0.9"
      />
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((a) => (
        <path
          key={a}
          d={`M${cx - 2.5},${226 - 7} L${cx - 4},${226 - 31} L${cx + 4},${226 - 31} L${cx + 2.5},${226 - 7} Z`}
          fill="url(#spoke)"
          transform={`rotate(${a} ${cx} 226)`}
        />
      ))}
      <circle cx={cx} cy={226} r={9} fill="#101012" stroke="#8d9199" strokeWidth="1" />
      <circle cx={cx} cy={226} r={4} fill="#f3d488" />
    </g>
  );
}

function CarScene({ rearOpacity, frontOpacity }: Props) {
  return (
    <svg viewBox="0 0 840 320" className="w-full" role="img" aria-label="Aperçu de la teinte sur une berline">
      <defs>
        <linearGradient id="paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4b52" />
          <stop offset="0.22" stopColor="#25262b" />
          <stop offset="0.6" stopColor="#0f0f12" />
          <stop offset="1" stopColor="#050506" />
        </linearGradient>
        <linearGradient id="roofShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sideShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f3d488" stopOpacity="0" />
          <stop offset="0.35" stopColor="#f3d488" stopOpacity="0.55" />
          <stop offset="0.75" stopColor="#c9973c" stopOpacity="0.35" />
          <stop offset="1" stopColor="#c9973c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="scene" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8ec5f5" />
          <stop offset="0.55" stopColor="#f7dba0" />
          <stop offset="1" stopColor="#e0a53f" />
        </linearGradient>
        <linearGradient id="glare" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rim" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#f2f3f5" />
          <stop offset="0.55" stopColor="#7c8088" />
          <stop offset="1" stopColor="#2a2b2f" />
        </radialGradient>
        <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6c7078" />
          <stop offset="0.5" stopColor="#e6e8ec" />
          <stop offset="1" stopColor="#6c7078" />
        </linearGradient>
        <radialGradient id="floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#d4a64a" stopOpacity="0.22" />
          <stop offset="1" stopColor="#d4a64a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="head" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8d9199" />
          <stop offset="1" stopColor="#fff7e0" />
        </linearGradient>
        <clipPath id="glassClip">
          <path d={REAR_WIN} />
          <path d={FRONT_WIN} />
        </clipPath>
        <clipPath id="bodyClip">
          <path d={BODY} />
        </clipPath>
      </defs>

      {/* Sol : halo et ombre */}
      <ellipse cx="420" cy="278" rx="400" ry="38" fill="url(#floor)" />
      <ellipse cx="424" cy="274" rx="372" ry="11" fill="#000" opacity="0.8" />
      <rect x="20" y="281" width="800" height="1" fill="#fff" opacity="0.06" />

      {/* Carrosserie */}
      <path d={BODY} fill="url(#paint)" />
      <g clipPath="url(#bodyClip)">
        {/* reflet de toit et ligne de caractère */}
        <path d="M330,96 C390,74 500,70 560,86 L560,92 C500,80 390,82 336,104 Z" fill="url(#roofShine)" />
        <path d="M70,176 C240,160 540,160 770,178" stroke="url(#sideShine)" strokeWidth="2.5" fill="none" />
        <path d="M80,196 C260,186 560,186 772,198" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" fill="none" />
        {/* bas de caisse */}
        <rect x="60" y="222" width="730" height="16" fill="#020203" opacity="0.85" />
        <path d="M150,222 L700,222" stroke="#c9973c" strokeOpacity="0.5" strokeWidth="1.2" />
      </g>
      <path d={BODY} fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.2" />

      {/* Découpes de portes */}
      <g stroke="#000" strokeOpacity="0.7" strokeWidth="1.4" fill="none">
        <path d="M418,142 L416,224" />
        <path d="M284,146 L288,224" />
        <path d="M592,146 C598,170 598,200 596,216" />
      </g>
      <g fill="url(#head)">
        <rect x="438" y="156" width="26" height="5" rx="2.5" />
        <rect x="304" y="158" width="26" height="5" rx="2.5" />
      </g>

      {/* Vitres : décor extérieur, intérieur, puis film */}
      <g clipPath="url(#glassClip)">
        <rect x="260" y="80" width="340" height="66" fill="url(#scene)" />
        <path d="M260,128 C340,118 470,124 600,116 L600,146 L260,146 Z" fill="#2d6a3e" opacity="0.55" />
        {/* sièges et occupants */}
        <path d="M352,146 L352,112 C352,102 364,98 374,100 C384,102 388,110 388,118 L388,146 Z" fill="#17171a" />
        <circle cx="371" cy="96" r="11" fill="#17171a" />
        <path d="M456,146 L456,114 C456,104 468,100 478,102 C490,104 494,112 494,120 L494,146 Z" fill="#17171a" />
        <circle cx="476" cy="98" r="11" fill="#17171a" />
        <path d="M426,118 L560,112 L560,146 L426,146 Z" fill="#0d0d10" opacity="0.7" />

        <path d={REAR_WIN} fill="#030304" opacity={rearOpacity} style={{ transition: "opacity .35s ease" }} />
        <path d={FRONT_WIN} fill="#030304" opacity={frontOpacity} style={{ transition: "opacity .35s ease" }} />
        <path d="M300,146 L350,80 L372,80 L322,146 Z" fill="url(#glare)" opacity="0.35" />
        <path d="M470,146 L520,80 L536,80 L486,146 Z" fill="url(#glare)" opacity="0.28" />
      </g>
      <path d={REAR_WIN} fill="none" stroke="#e3e5e9" strokeOpacity="0.85" strokeWidth="1.6" />
      <path d={FRONT_WIN} fill="none" stroke="#e3e5e9" strokeOpacity="0.85" strokeWidth="1.6" />
      <path d="M410,84 L426,84 L426,142 L410,142 Z" fill="#050506" />

      {/* Rétroviseur */}
      <path d="M580,128 C588,122 604,122 612,128 C612,136 604,142 590,142 C584,142 580,136 580,128 Z" fill="#101013" stroke="#fff" strokeOpacity="0.2" />

      {/* Feux */}
      <path d="M748,162 C764,168 774,178 778,192 L752,186 C746,178 744,170 748,162 Z" fill="#fff7e0" opacity="0.95" />
      <path d="M752,190 L778,196" stroke="#c9973c" strokeWidth="2" />
      <path d="M62,182 C62,172 70,168 84,166 L100,164 L98,180 L66,190 Z" fill="#c1272d" />
      <path d="M62,182 L98,172" stroke="#ff8a8a" strokeOpacity="0.6" strokeWidth="1.2" />

      {/* Passages de roue + roues */}
      <g>
        <path d="M148,236 A56,56 0 0 1 260,236 Z" fill="#010101" />
        <path d="M544,236 A56,56 0 0 1 656,236 Z" fill="#010101" />
      </g>
      <Wheel cx={204} />
      <Wheel cx={600} />
    </svg>
  );
}

export default memo(CarScene);
