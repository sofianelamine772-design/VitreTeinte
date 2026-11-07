import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Tarifs — Vitre Teintées One TLS", description: "Tarifs de pose de vitres teintées à Toulouse, dès 149 €." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Tarifs" title="Des prix" highlight="transparents" text="Tarifs indicatifs, devis gratuit selon votre modèle." />
      <Pricing hideHeading />
      <CtaBand />
    </>
  );
}
