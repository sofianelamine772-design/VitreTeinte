"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check, Clock, MapPin, Snapchat } from "./Icons";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

type Calendly = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement; prefill?: object }) => void;
};

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}

// Couleurs du site passées à Calendly pour un widget fondu dans le design
export const calendlyUrl = `${site.calendlyUrl}?${new URLSearchParams({
  hide_gdpr_banner: "1",
  hide_landing_page_details: "1",
  background_color: "0c0c0d",
  text_color: "e9e9eb",
  primary_color: "d4a64a",
}).toString()}`;

function loadScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
  return new Promise((resolve, reject) => {
    const s = existing ?? document.createElement("script");
    s.addEventListener("load", () => resolve(), { once: true });
    s.addEventListener("error", () => reject(), { once: true });
    if (!existing) {
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  });
}

const perks = [
  "Créneau confirmé immédiatement",
  "Rappel automatique par e-mail",
  "Modification ou annulation en 1 clic",
];

export default function Booking() {
  const wrapper = useRef<HTMLDivElement>(null);
  const widget = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [booked, setBooked] = useState(false);

  // Chargement différé : le script Calendly n'est téléchargé qu'à l'approche de la section
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setState("loading");
        loadScript()
          .then(() => {
            if (!widget.current || !window.Calendly) throw new Error();
            widget.current.innerHTML = "";
            window.Calendly.initInlineWidget({ url: calendlyUrl, parentElement: widget.current });
            // Filet de sécurité si l'événement « event_type_viewed » n'arrive pas
            setTimeout(() => setState((s) => (s === "loading" ? "ready" : s)), 6000);
          })
          .catch(() => setState("error"));
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com" || typeof e.data?.event !== "string") return;
      if (e.data.event === "calendly.event_type_viewed") setState("ready");
      if (e.data.event === "calendly.event_scheduled") setBooked(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="reservation" className="relative overflow-hidden bg-coal py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Réservation en ligne"
          title="Réservez votre"
          highlight="créneau"
          text="Choisissez directement le jour et l'heure de votre rendez-vous. Confirmation instantanée, sans appel ni attente."
        />

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="flex flex-col gap-5">
            <div className="border-gold-gradient rounded-2xl p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light/80">Rendez-vous</p>
              <h3 className="mt-3 font-display text-xl uppercase leading-snug text-white">
                Pose de vitres teintées
              </h3>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <p className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" /> 1h15 de créneau réservé
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" /> {site.area}
                </p>
              </div>
              <div className="gold-line my-7" />
              <ul className="space-y-3.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-light">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink/50 p-7 text-sm leading-relaxed text-white/55">
              <p>
                Pensez à préciser le <span className="text-white">modèle de votre véhicule</span> et
                la <span className="text-white">teinte souhaitée</span> lors de la réservation.
              </p>
              <a
                href={site.snapchatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-white transition hover:text-gold-light"
              >
                <Snapchat className="h-4 w-4 text-[#FFFC00]" />
                Une question avant ? {site.snapchat}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div
              ref={wrapper}
              className="border-gold-gradient relative overflow-hidden rounded-2xl"
            >
              {booked && (
                <div className="flex items-center gap-3 border-b border-gold/30 bg-gold/10 px-6 py-4 text-sm text-gold-light">
                  <Check className="h-5 w-5 shrink-0" />
                  Rendez-vous confirmé ! Vous allez recevoir un e-mail de confirmation.
                </div>
              )}

              {state !== "ready" && state !== "error" && (
                <div className="absolute inset-0 z-10 flex flex-col gap-4 bg-coal p-8" aria-hidden="true">
                  <div className="h-6 w-1/2 animate-pulse rounded-lg bg-white/5" />
                  <div className="h-4 w-1/3 animate-pulse rounded-lg bg-white/5" />
                  <div className="mt-6 grid flex-1 grid-cols-7 gap-3">
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div key={i} className="aspect-square animate-pulse rounded-full bg-white/[0.04]" />
                    ))}
                  </div>
                  <p className="text-center text-xs uppercase tracking-[0.3em] text-white/30">
                    Chargement du calendrier…
                  </p>
                </div>
              )}

              {state === "error" ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center gap-5 p-8 text-center">
                  <p className="text-white/60">Le calendrier n&apos;a pas pu se charger.</p>
                  <a
                    href={site.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold rounded-full px-8 py-4 font-bold text-ink"
                  >
                    Réserver sur Calendly
                  </a>
                </div>
              ) : (
                <div ref={widget} className="h-[700px] w-full sm:h-[760px]" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
