import { memo } from "react";

export type Paint = { id: string; name: string; light: string; mid: string; dark: string };

export const paints: Paint[] = [
  { id: "lapiz", name: "Bleu Lapiz", light: "#4478e6", mid: "#0f3a9a", dark: "#040d30" },
  { id: "noir", name: "Noir Deep", light: "#62646d", mid: "#202126", dark: "#08080a" },
  { id: "dytona", name: "Gris Dytona", light: "#a9adb6", mid: "#555963", dark: "#1b1c21" },
  { id: "oryx", name: "Blanc Oryx", light: "#ffffff", mid: "#e8ebf0", dark: "#a4abb7" },
];

type Props = { rearOpacity: number; frontOpacity: number; paint?: Paint };

/*
  Volkswagen Golf 8 R — profil, avant à droite.
  Tout est dessiné en millimètres réels (L 4284 · H 1456 · empattement 2636 · jantes 19")
  puis mis à l'échelle 0,2 px/mm et retourné (y vers le haut).
*/
const AX_R = 808;
const AX_F = 3444;
const WR = 324; // rayon pneu 235/35 R19
const WCY = WR; // centre de roue

const BODY =
  "M110,205 C30,262 -8,420 8,560 C14,700 30,820 60,905 C72,990 100,1085 150,1150 L330,1345 L420,1362 " +
  "C760,1398 1300,1440 1950,1456 C2150,1456 2290,1448 2395,1420 C2620,1335 2850,1100 3045,985 " +
  "C3400,962 3800,905 4095,858 C4215,838 4268,780 4282,670 C4292,560 4290,420 4268,300 L4238,150 " +
  "C4228,110 4190,98 4140,98 L170,112 C112,125 82,160 70,205 Z";

const FRONT_WIN = "M1885,1012 L1885,1378 C2100,1388 2300,1382 2445,1336 L2955,1014 Z";
const REAR_WIN =
  "M1795,1014 L1795,1382 C1550,1392 1250,1380 1000,1358 C900,1344 830,1330 790,1312 C700,1230 620,1150 545,1098 Z";

function Wheel({ cx }: { cx: number }) {
  const blades = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${cx},${WCY})`}>
      <circle r={324} fill="#050506" />
      <circle r={324} fill="none" stroke="#17171a" strokeWidth="7" />
      <circle r={290} fill="none" stroke="#101012" strokeWidth="5" />
      <circle r={268} fill="#0a0a0c" />
      {/* disque de frein + étrier bleu R */}
      <circle r={222} fill="url(#g8-disc)" />
      {Array.from({ length: 28 }).map((_, i) => (
        <circle key={i} cx={Math.cos((i * Math.PI) / 14) * 175} cy={Math.sin((i * Math.PI) / 14) * 175} r="6" fill="#26262a" />
      ))}
      <path d="M40,225 A228,228 0 0 1 218,100 L180,52 A168,168 0 0 0 38,150 Z" fill="url(#g8-caliper)" />
      {/* branches : 5 doubles, noir brillant + chant usiné */}
      {blades.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M-34,78 L-78,238 L-18,244 L12,82 Z" fill="url(#g8-spoke)" stroke="#aeb3bb" strokeWidth="5" strokeLinejoin="round" />
          <path d="M34,78 L78,238 L18,244 L-12,82 Z" fill="url(#g8-spoke)" stroke="#aeb3bb" strokeWidth="5" strokeLinejoin="round" />
        </g>
      ))}
      <circle r={266} fill="none" stroke="url(#g8-lip)" strokeWidth="14" />
      <circle r={70} fill="#0c0c0f" stroke="#a6abb4" strokeWidth="6" />
      <circle r={42} fill="none" stroke="#2f6bd8" strokeWidth="7" />
      <circle r={14} fill="#dfe2e8" />
    </g>
  );
}

function CarScene({ rearOpacity, frontOpacity, paint = paints[0] }: Props) {
  return (
    <svg viewBox="0 -6 940 408" className="w-full" role="img" aria-label={`Volkswagen Golf 8 R ${paint.name}, aperçu de la teinte`}>
      <defs>
        {/* y inversé : offset 0 = bas de caisse, 1 = pavillon */}
        <linearGradient id="g8-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={paint.dark} />
          <stop offset="0.38" stopColor={paint.mid} />
          <stop offset="0.82" stopColor={paint.light} />
          <stop offset="1" stopColor={paint.mid} />
        </linearGradient>
        <linearGradient id="g8-hood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g8-crease" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.25" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="0.85" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g8-scene" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#d9983a" />
          <stop offset="0.5" stopColor="#f6d896" />
          <stop offset="1" stopColor="#7fb9f2" />
        </linearGradient>
        <linearGradient id="g8-liner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="g8-glare" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="g8-disc" cx="0.4" cy="0.6" r="0.8">
          <stop offset="0" stopColor="#c3c7ce" />
          <stop offset="0.6" stopColor="#737780" />
          <stop offset="1" stopColor="#3b3c42" />
        </radialGradient>
        <linearGradient id="g8-caliper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6aa0ff" />
          <stop offset="1" stopColor="#1a49b8" />
        </linearGradient>
        <linearGradient id="g8-spoke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a3c42" />
          <stop offset="0.5" stopColor="#15161a" />
          <stop offset="1" stopColor="#2a2c32" />
        </linearGradient>
        <linearGradient id="g8-lip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2f3f6" />
          <stop offset="0.5" stopColor="#6d7179" />
          <stop offset="1" stopColor="#d3d6dc" />
        </linearGradient>
        <linearGradient id="g8-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9dce1" />
          <stop offset="0.5" stopColor="#8d9199" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="g8-skirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050506" />
          <stop offset="1" stopColor="#2e2f35" />
        </linearGradient>
        <radialGradient id="g8-floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#d4a64a" stopOpacity="0.3" />
          <stop offset="1" stopColor="#d4a64a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g8-led" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#bfe0ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="g8-fadegrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.5" />
        </linearGradient>
        <mask id="g8-fade" maskUnits="userSpaceOnUse" x="0" y="190" width="940" height="112">
          <rect x="0" y="190" width="940" height="112" fill="url(#g8-fadegrad)" />
        </mask>
        <pattern id="g8-honey" width="64" height="55" patternUnits="userSpaceOnUse">
          <path d="M32,0 L64,16 L64,40 L32,55 L0,40 L0,16 Z" fill="none" stroke="#33353b" strokeWidth="9" />
        </pattern>
        <clipPath id="g8-bodyclip">
          <path d={BODY} />
        </clipPath>
        <clipPath id="g8-glassclip">
          <path d={FRONT_WIN} />
          <path d={REAR_WIN} />
        </clipPath>
      </defs>

      {/* Studio : halo, sol, reflet */}
      <ellipse cx="470" cy="302" rx="460" ry="46" fill="url(#g8-floor)" />
      <rect x="10" y="300" width="920" height="1" fill="#fff" opacity="0.07" />
      <g transform="translate(0,600) scale(1,-1)" mask="url(#g8-fade)" opacity="0.5">
        <use href="#g8-car" />
      </g>
      <ellipse cx="470" cy="298" rx="420" ry="8" fill="#000" opacity="0.85" />

      <g id="g8-car">
        <g transform="translate(40,300) scale(0.2,-0.2)">
          {/* ───── Carrosserie ───── */}
          <path d={BODY} fill="url(#g8-paint)" />
          <g clipPath="url(#g8-bodyclip)">
            {/* reflets : capot, pavillon, épaule, pli bas */}
            <path d="M3080,975 C3400,960 3800,915 4090,880 L4090,855 C3800,890 3400,925 3070,943 Z" fill="url(#g8-hood)" />
            <path d="M900,1412 C1300,1442 1950,1456 2300,1440 L2300,1414 C1950,1430 1300,1415 920,1385 Z" fill="url(#g8-hood)" opacity="0.8" />
            <path d="M60,880 C800,915 2000,920 3040,868 C3500,850 3900,840 4220,800" stroke="url(#g8-crease)" strokeWidth="15" fill="none" />
            <path d="M60,862 C800,895 2000,900 3040,850 C3500,832 3900,822 4220,782" stroke="#000" strokeOpacity="0.35" strokeWidth="9" fill="none" />
            <path d="M200,560 C1200,530 2800,530 3900,580" stroke="#fff" strokeOpacity="0.14" strokeWidth="9" fill="none" />
            <path d="M200,545 C1200,515 2800,515 3900,565" stroke="#000" strokeOpacity="0.3" strokeWidth="7" fill="none" />
            <path d="M60,760 C900,790 2000,790 3000,760 C3500,745 3900,735 4260,700 L4260,610 C3900,650 3500,665 3000,680 C2000,700 900,700 60,670 Z" fill="#fff" opacity="0.07" />
            <path d="M3045,975 C3100,880 3120,760 3110,560" stroke="#000" strokeOpacity="0.35" strokeWidth="8" fill="none" />
            <path d="M3060,990 C3110,880 3135,770 3130,570" stroke="#fff" strokeOpacity="0.18" strokeWidth="6" fill="none" />
            {/* bas de caisse : jupes R */}
            <path d="M960,128 L3000,128 C3060,128 3080,175 3050,235 L2990,262 L1010,262 L950,235 C930,190 940,128 960,128 Z" fill="url(#g8-skirt)" />
            <path d="M990,246 L3000,246" stroke="#fff" strokeOpacity="0.3" strokeWidth="6" />
            <path d="M1010,262 L2990,262" stroke={paint.light} strokeOpacity="0.5" strokeWidth="5" />
            {/* arrière : bouclier noir, diffuseur, sorties */}
            <path d="M-10,180 L520,200 L520,440 C300,430 80,420 -10,420 Z" fill="#060607" />
            <path d="M40,260 L480,262 M40,340 L480,340" stroke="#2c2d33" strokeWidth="8" />
            <ellipse cx="22" cy="300" rx="22" ry="40" fill="url(#g8-chrome)" />
            <ellipse cx="22" cy="300" rx="12" ry="26" fill="#0a0a0b" />
            <ellipse cx="22" cy="385" rx="20" ry="32" fill="url(#g8-chrome)" />
            <ellipse cx="22" cy="385" rx="10" ry="20" fill="#0a0a0b" />
            {/* avant : bouclier R, grandes prises nid d'abeille */}
            <path d="M3900,100 L4300,100 L4300,620 C4180,580 4000,520 3900,470 Z" fill="#060607" />
            <path d="M3950,150 L4270,150 L4270,560 C4170,520 4040,470 3950,430 Z" fill="url(#g8-honey)" />
            <path d="M3900,480 C4000,525 4180,590 4300,640" stroke="#2f6bd8" strokeWidth="16" fill="none" />
            <path d="M3950,120 L4240,120" stroke="#b6bbc4" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
          </g>
          <path d={BODY} fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="7" />

          {/* Découpes de portes */}
          <g stroke="#000" strokeOpacity="0.8" strokeWidth="6" fill="none">
            <path d="M1820,1010 L1805,205" />
            <path d="M960,1040 C940,800 935,500 940,205" />
            <path d="M2905,1012 C2950,820 2960,540 2930,330" />
            <path d="M3050,1000 L3060,870" />
          </g>
          <g>
            <rect x="2060" y="905" width="200" height="34" rx="17" fill="url(#g8-paint)" stroke="#000" strokeOpacity="0.55" strokeWidth="5" />
            <rect x="2060" y="925" width="200" height="10" rx="5" fill="#fff" opacity="0.45" />
            <rect x="1230" y="915" width="180" height="34" rx="17" fill="url(#g8-paint)" stroke="#000" strokeOpacity="0.55" strokeWidth="5" />
            <rect x="1230" y="935" width="180" height="10" rx="5" fill="#fff" opacity="0.45" />
          </g>

          {/* Vitrage : décor, intérieur, film */}
          <g clipPath="url(#g8-glassclip)">
            <rect x="500" y="1000" width="2500" height="420" fill="url(#g8-scene)" />
            <path d="M500,1040 C1100,1070 2000,1060 3000,1090 L3000,1000 L500,1000 Z" fill="#2c6a40" opacity="0.55" />
            <rect x="500" y="1280" width="2500" height="150" fill="url(#g8-liner)" />
            {/* sièges, conducteur, volant */}
            <path d="M1990,1000 L2000,1190 C2000,1230 2040,1260 2090,1255 C2140,1250 2160,1215 2160,1180 L2170,1000 Z" fill="#101013" />
            <circle cx="2250" cy="1230" r="78" fill="#18181b" />
            <path d="M2160,1000 L2170,1130 L2420,1115 L2420,1000 Z" fill="#0d0d10" />
            <ellipse cx="2640" cy="1150" rx="26" ry="135" transform="rotate(-24 2640 1150)" fill="none" stroke="#0a0a0c" strokeWidth="32" />
            <path d="M2780,1000 L2800,1110 L3000,1090 L3000,1000 Z" fill="#08080a" />
            {/* banquette arrière */}
            <path d="M1090,1000 L1100,1160 C1100,1200 1130,1220 1170,1216 C1210,1212 1230,1185 1230,1160 L1240,1000 Z" fill="#101013" />
            <circle cx="1310" cy="1215" r="72" fill="#18181b" />

            <path d={FRONT_WIN} fill="#020203" opacity={frontOpacity} style={{ transition: "opacity .35s ease" }} />
            <path d={REAR_WIN} fill="#020203" opacity={rearOpacity} style={{ transition: "opacity .35s ease" }} />
            <path d="M1500,1000 L1900,1420 L2060,1420 L1660,1000 Z" fill="url(#g8-glare)" opacity="0.4" />
            <path d="M2200,1000 L2500,1340 L2600,1340 L2300,1000 Z" fill="url(#g8-glare)" opacity="0.3" />
          </g>
          {/* cadres noir brillant + joint de vitre chromé */}
          <g fill="none" stroke="#050506" strokeWidth="26" strokeLinejoin="round">
            <path d={FRONT_WIN} />
            <path d={REAR_WIN} />
          </g>
          <path d="M545,1098 L1795,1014 L2955,1014" stroke="url(#g8-chrome)" strokeWidth="9" fill="none" />
          <path d="M1795,1012 L1885,1012 L1885,1395 L1795,1395 Z" fill="#050506" />
          <path d="M1000,1362 L910,1062" stroke="#050506" strokeWidth="30" />

          {/* Becquet de toit R */}
          <path d="M290,1338 C350,1334 450,1350 510,1380 L510,1394 C440,1376 360,1366 300,1366 Z" fill="#050506" />
          {/* Montant C noir */}
          
          {/* Rétroviseur argent */}
          <path d="M2690,1070 C2740,1008 2880,998 2960,1030 C2975,1090 2900,1135 2810,1135 C2750,1135 2700,1112 2690,1070 Z" fill="url(#g8-chrome)" stroke="#000" strokeOpacity="0.5" strokeWidth="6" />
          <path d="M2725,1075 C2775,1030 2870,1024 2930,1048" stroke="#fff" strokeOpacity="0.85" strokeWidth="8" fill="none" />

          {/* Badge R sur l'aile */}
          <g transform="translate(3180,760)">
            <rect x="-50" y="-44" width="100" height="88" rx="14" fill="#08080a" stroke="#2f6bd8" strokeWidth="7" />
            <g transform="scale(1,-1)">
              <text x="0" y="24" textAnchor="middle" fontSize="76" fontWeight="900" fontStyle="italic" fill="#5b8ff5">R</text>
            </g>
          </g>

          {/* Feux avant LED + halo */}
          <path d="M3850,860 C4040,866 4200,828 4262,778 L4252,712 C4150,716 3980,745 3850,792 Z" fill="#07070a" stroke="#fff" strokeOpacity="0.28" strokeWidth="6" />
          <path d="M3900,824 C4040,820 4170,783 4240,746" stroke="#eef7ff" strokeWidth="17" strokeLinecap="round" fill="none" />
          <path d="M3930,788 C4050,780 4160,748 4230,722" stroke="#9fd0ff" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.9" />
          <circle cx="4235" cy="750" r="85" fill="url(#g8-led)" />
          {/* Feux arrière LED */}
          <path d="M-4,780 C0,880 40,940 130,962 L340,992 L350,905 L120,815 C60,795 20,780 -4,780 Z" fill="#c1121f" />
          <path d="M20,800 C60,830 120,860 340,935" stroke="#ff9aa0" strokeWidth="9" opacity="0.85" fill="none" />
          <path d="M-4,780 L350,905" stroke="#5e0008" strokeWidth="6" opacity="0.6" />

          {/* Passages de roue + roues */}
          <g clipPath="url(#g8-bodyclip)">
            {[AX_R, AX_F].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy={WCY} r={352} fill="#010101" />
                <circle cx={cx} cy={WCY} r={352} fill="none" stroke="#08080a" strokeWidth="14" />
              </g>
            ))}
          </g>
          <Wheel cx={AX_R} />
          <Wheel cx={AX_F} />
        </g>
      </g>
    </svg>
  );
}

export default memo(CarScene);
