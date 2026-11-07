import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TintSimulator from "@/components/TintSimulator";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Simulateur de teinte — Vitre Teintées One TLS", description: "Visualisez la teinte de vos vitres avant et arrière en direct." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Simulateur" title="Choisissez" highlight="votre teinte" text="Visualisez le rendu sur les vitres arrière et avant avant de réserver." />
      <TintSimulator hideHeading />
      <Gallery />
      <CtaBand />
    </>
  );
}
