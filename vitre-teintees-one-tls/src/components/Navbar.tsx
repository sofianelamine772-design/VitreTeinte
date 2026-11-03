"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { Arrow, Snapchat, WhatsApp } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surligne le lien de la section visible
  useEffect(() => {
    const sections = nav
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((s): s is HTMLElement => !!s);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menu mobile : bloque le scroll, ferme avec Échap ou en passant en desktop
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "border-b border-white/[0.06] bg-ink/90 backdrop-blur-lg" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 lg:h-20">
          <a href="#top" onClick={close} className="flex items-center gap-3" aria-label="Accueil">
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-10 w-10 rounded-full object-cover lg:h-11 lg:w-11"
            />
            <span className="font-display text-[12px] uppercase leading-tight tracking-wider sm:text-[13px]">
              <span className="text-chrome">Vitre </span>
              <span className="text-gold">Teintées</span>
              <span className="block text-[9px] tracking-[0.4em] text-white/45 sm:text-[10px]">One TLS</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] font-medium transition-colors ${
                    active === l.href ? "text-gold-light" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-[#25D366] sm:grid"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
            <a
              href="#reservation"
              className="bg-gold hidden rounded-full px-5 py-2.5 text-sm font-bold text-ink transition hover:brightness-110 sm:inline-block"
            >
              Réserver
            </a>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative -mr-2 grid h-11 w-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3.5 w-6">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-6 bg-white transition duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] bg-white transition-all duration-300 ${
                    open ? "w-0 opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-[1.5px] w-6 bg-white transition duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink pt-16 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex-1 overflow-y-auto px-4 pt-6 sm:px-8">
          {nav.map((l, i) => (
            <li
              key={l.href}
              className={`border-b border-white/[0.06] transition duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={close}
                className={`flex items-center justify-between py-4 text-2xl font-semibold tracking-tight ${
                  active === l.href ? "text-gold-light" : "text-white"
                }`}
              >
                {l.label}
                <Arrow className="h-5 w-5 text-white/25" />
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`space-y-3 border-t border-white/[0.06] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition duration-500 sm:px-8 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "300ms" : "0ms" }}
        >
          <a href="#reservation" onClick={close} className="bg-gold block rounded-xl py-4 text-center font-bold text-ink">
            Réserver un créneau
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-semibold text-white"
            >
              <WhatsApp className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={site.snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FFFC00] py-3.5 text-sm font-semibold text-black"
            >
              <Snapchat className="h-5 w-5" /> Snapchat
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
