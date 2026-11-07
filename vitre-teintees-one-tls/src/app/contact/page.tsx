import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact — Vitre Teintées One TLS", description: "Contactez-nous par WhatsApp, Snapchat ou formulaire." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de" highlight="votre projet" text="Devis gratuit et réponse rapide." />
      <Contact hideHeading />
    </>
  );
}
