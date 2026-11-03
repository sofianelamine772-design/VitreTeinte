"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Close, Menu, Snapchat } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-display text-[13px] uppercase leading-tight tracking-wider">
            <span className="text-chrome">Vitre </span>
            <span className="text-gold">Teintées</span>
            <span className="block text-[10px] tracking-[0.4em] text-white/50">One TLS</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-white/70 transition hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#reservation"
            className="bg-gold hidden rounded-full px-5 py-2.5 text-sm font-bold text-ink shadow-[0_0_30px_-8px_rgba(212,166,74,0.8)] transition hover:brightness-110 sm:inline-block"
          >
            Réserver
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4.5rem)] flex-col gap-1 px-5 pb-10 pt-4">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-4 font-display text-lg uppercase tracking-wider text-white/80"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-auto flex flex-col gap-3">
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="bg-gold rounded-full py-4 text-center font-bold text-ink"
            >
              Réserver un créneau
            </a>
            <a
              href={site.snapchatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-gold/40 py-4 font-semibold text-gold-light"
            >
              <Snapchat className="h-5 w-5" /> {site.snapchat}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
