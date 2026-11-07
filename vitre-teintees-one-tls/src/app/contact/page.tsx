import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Booking from "@/components/Booking";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Contact — Vitre Teintées One TLS", description: "Contactez-nous par WhatsApp, Snapchat ou formulaire." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Parlons de" highlight="votre projet" text="Devis gratuit et réponse rapide." />
      <Contact hideHeading />
      <div className="bg-coal pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Réservation en ligne"
          title="Ou réservez"
          highlight="directement"
          text="Choisissez le jour et l'heure de votre rendez-vous : confirmation immédiate."
        />
      </div>
      <Booking hideHeading />
    </>
  );
}
