import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "FAQ — Vitre Teintées One TLS", description: "Réponses aux questions fréquentes sur la pose de films teintés." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions" highlight="fréquentes" text="Tout savoir avant la pose." />
      <Faq hideHeading />
      <CtaBand />
    </>
  );
}
