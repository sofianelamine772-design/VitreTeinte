import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);
export const Sun = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const Thermo = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z" />
    <path d="M12 9v7" />
  </svg>
);
export const Eye = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 3l18 18" />
    <path d="M10.6 5.1A9.8 9.8 0 0112 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.6M6.6 6.6C4.4 8 2.8 10.1 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" />
    <path d="M9.9 9.9a3 3 0 004.2 4.2" />
  </svg>
);
export const Sparkle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </svg>
);
export const Lock = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 118 0v3" />
  </svg>
);
export const Car = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 16v-3l2-5a2 2 0 012-1.3h10A2 2 0 0119 8l2 5v3" />
    <path d="M3 16h18v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
    <path d="M5 12h14" />
  </svg>
);
export const Building = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const Award = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);
export const Arrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const MapPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
  </svg>
);
export const Snapchat = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M12.06 2c2.2 0 4.06 1.17 5 3.06.42.86.48 2.04.42 3.62l-.04.73c.24.13.6.2 1 .07.53-.17 1.13.06 1.3.5.2.53-.24.97-.72 1.18-.18.08-.4.16-.64.24-.66.21-1.43.46-1.6 1.03-.08.28-.04.62.15 1.02.03.06 1.62 3.6 5.07 4.17.2.03.35.21.34.41 0 .07-.02.13-.04.2-.27.62-1.5 1.1-3.73 1.45-.08.12-.15.53-.2.78-.05.24-.1.47-.17.7-.08.3-.3.43-.6.43h-.03c-.18 0-.43-.04-.72-.1a7 7 0 00-1.4-.15c-.33 0-.67.03-1.01.08-.68.12-1.26.53-1.88.97-.9.63-1.9 1.36-3.43 1.36h-.18c-1.53 0-2.52-.73-3.42-1.36-.62-.44-1.2-.85-1.88-.97a6.6 6.6 0 00-1.02-.08c-.6 0-1.07.09-1.4.15-.27.06-.5.1-.71.1-.25 0-.52-.07-.63-.45a7.6 7.6 0 01-.18-.7c-.05-.24-.12-.66-.2-.78-2.22-.35-3.45-.83-3.72-1.46a.6.6 0 01-.05-.2.4.4 0 01.34-.4c3.45-.57 5-4.11 5.07-4.16.2-.42.24-.76.15-1.04-.17-.57-.94-.82-1.6-1.03a5 5 0 01-.65-.24c-.84-.33-.96-.72-.9-.98.08-.38.56-.65 1-.65.12 0 .23.02.33.07.4.18.75.27 1.05.27.24 0 .4-.06.5-.11l-.04-.68c-.1-1.58-.03-2.76.4-3.62C7.92 3.17 9.8 2 12 2h.06z" />
  </svg>
);
