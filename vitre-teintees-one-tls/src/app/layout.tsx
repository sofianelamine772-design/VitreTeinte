import type { Metadata, Viewport } from "next";
import { Michroma, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — Pose de vitres teintées à ${site.city}`,
  description:
    "Pose de films solaires et vitres teintées homologués à Toulouse. Protection UV, confort thermique, intimité et élégance pour votre véhicule. Devis gratuit.",
  keywords: [
    "vitres teintées Toulouse",
    "film solaire voiture",
    "teinte vitre auto 31",
    "pose film teinté",
    "One TLS",
  ],
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: {
    title: `${site.name} — Vitres teintées à ${site.city}`,
    description: "Protection · Confort · Élégance. Pose de films teintés homologués.",
    images: ["/images/logo.png"],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${michroma.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
