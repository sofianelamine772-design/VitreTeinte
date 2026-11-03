import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TintSimulator from "@/components/TintSimulator";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Legal from "@/components/Legal";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { Snapchat } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TintSimulator />
        <Process />
        <Pricing />
        <Booking />
        <Legal />
        <Faq />
        <Contact />
      </main>
      <Footer />

      {/* Bouton flottant Snapchat */}
      <a
        href={site.snapchatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Nous contacter sur Snapchat : ${site.snapchat}`}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#FFFC00] text-ink shadow-[0_10px_30px_-5px_rgba(255,252,0,0.5)] transition hover:scale-110"
      >
        <Snapchat className="h-7 w-7" />
      </a>
    </>
  );
}
