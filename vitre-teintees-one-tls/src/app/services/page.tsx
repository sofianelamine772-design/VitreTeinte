import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Services — Vitre Teintées One TLS", description: "Films teintés, anti-UV, athermiques et sécurité pour véhicules et bâtiments à Toulouse." };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Nos prestations" title="Un savoir-faire" highlight="sur mesure" text="Films teintés, anti-UV, athermiques et sécurité, posés à la main." />
      <Services hideHeading />
      <Process />
      <Gallery />
      <CtaBand />
    </>
  );
}
