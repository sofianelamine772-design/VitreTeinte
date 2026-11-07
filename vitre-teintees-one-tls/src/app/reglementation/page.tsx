import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Legal from "@/components/Legal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Réglementation — Vitre Teintées One TLS", description: "Règles légales de teinte des vitres en France." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Réglementation" title="Teinte et" highlight="Code de la route" text="Ce que la loi autorise, vitre par vitre." />
      <Legal hideHeading />
      <CtaBand />
    </>
  );
}
