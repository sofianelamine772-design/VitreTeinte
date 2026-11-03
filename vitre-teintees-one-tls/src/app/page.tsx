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
import { site, whatsappUrl } from "@/lib/site";
import { Snapchat, WhatsApp } from "@/components/Icons";

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
    </>
  );
}
