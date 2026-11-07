import type { Metadata, Viewport } from "next";
import { Michroma, Manrope } from "next/font/google";
import "./globals.css";
import { site, whatsappUrl } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Snapchat, WhatsApp } from "@/components/Icons";

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
  metadataBase: new URL("https://example.com"),
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
  icons: { icon: "/images/logo-og.png", apple: "/images/logo-og.png" },
  openGraph: {
    title: `${site.name} — Vitres teintées à ${site.city}`,
    description: "Protection · Confort · Élégance. Pose de films teintés homologués.",
    images: ["/images/logo-og.png"],
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
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Boutons de contact flottants */}
        <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2.5 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
          <a
            href={site.snapchatUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Snapchat : ${site.snapchat}`}
            className="grid h-12 w-12 place-items-center rounded-full bg-[#FFFC00] text-black shadow-lg shadow-black/40 transition hover:-translate-y-0.5"
          >
            <Snapchat className="h-6 w-6" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous écrire sur WhatsApp"
            className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:-translate-y-0.5"
          >
            <WhatsApp className="h-7 w-7" />
          </a>
        </div>
      </body>
    </html>
  );
}
