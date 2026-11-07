import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Booking from "@/components/Booking";

export const metadata: Metadata = { title: "Réservation — Vitre Teintées One TLS", description: "Réservez votre pose de vitres teintées en ligne." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Réservation" title="Réservez" highlight="votre créneau" text="Choisissez un horaire, confirmation immédiate." />
      <Booking hideHeading />
    </>
  );
}
