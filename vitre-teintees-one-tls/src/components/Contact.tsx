"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappUrl } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Arrow, Check, Clock, Mail, MapPin, Phone, Snapchat, WhatsApp } from "./Icons";

const channels = [
  {
    name: "WhatsApp",
    handle: "Réponse rapide",
    href: whatsappUrl(),
    icon: WhatsApp,
    color: "bg-[#25D366] text-white",
    hover: "hover:border-[#25D366]/50",
  },
  {
    name: "Snapchat",
    handle: site.snapchat,
    href: site.snapchatUrl,
    icon: Snapchat,
    color: "bg-[#FFFC00] text-black",
    hover: "hover:border-[#FFFC00]/50",
  },
];

const services = ["Vitres teintées auto", "Film athermique", "Film sécurité", "Bâtiment / vitrine", "Dépose d'ancien film"];
const tints = ["5 % (Limo)", "20 % (Foncé)", "35 % (Moyen)", "50 % (Léger)", "Je ne sais pas encore"];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink/70 px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `Bonjour, je souhaite un devis.`,
      `Nom : ${d.get("name")}`,
      `Téléphone : ${d.get("phone")}`,
      `Véhicule : ${d.get("vehicle")}`,
      `Prestation : ${d.get("service")}`,
      `Teinte : ${d.get("tint")}`,
      d.get("details") ? `Message : ${d.get("details")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // La demande part directement sur WhatsApp, déjà rédigée
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setMessage(text);
    setCopied(false);
  }

  async function copy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Demandez votre"
          highlight="devis gratuit"
          text="Indiquez-nous votre véhicule et la teinte souhaitée, on vous répond rapidement avec un prix et un créneau."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {channels.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-coal p-4 transition-colors ${c.hover}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.color}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">{c.name}</span>
                    <span className="block truncate text-sm text-white/50">{c.handle}</span>
                  </span>
                  <Arrow className="h-4 w-4 shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>

            <div className="border-gold-gradient space-y-6 rounded-2xl p-6 sm:p-7">
              <Info icon={MapPin} label="Zone d'intervention" value={site.area} />
              {site.phone && (
                <Info icon={Phone} label="Téléphone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />
              )}
              {site.email && <Info icon={Mail} label="E-mail" value={site.email} href={`mailto:${site.email}`} />}
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Horaires</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {site.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4 text-white/75">
                        <span>{h.days}</span>
                        <span className="text-white/50">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border-gold-gradient rounded-2xl p-5 sm:p-10">
              {message ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="bg-gold grid h-16 w-16 place-items-center rounded-full text-ink">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">Demande prête</h3>
                  <p className="mt-3 max-w-sm text-white/60">
                    WhatsApp s&apos;est ouvert avec votre message. Il ne s&apos;est pas ouvert ? Utilisez
                    les boutons ci-dessous.
                  </p>
                  <pre className="mt-6 w-full max-w-md whitespace-pre-wrap rounded-2xl border border-white/10 bg-ink/70 p-4 text-left font-sans text-sm text-white/70">
                    {message}
                  </pre>
                  <div className="mt-6 grid w-full max-w-md gap-3 sm:grid-cols-2">
                    <a
                      href={whatsappUrl(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-semibold text-white sm:col-span-2"
                    >
                      <WhatsApp className="h-5 w-5" /> Envoyer sur WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={copy}
                      className="rounded-xl border border-white/15 py-3.5 font-semibold text-white transition hover:border-gold/60"
                    >
                      {copied ? "Copié ✓" : "Copier le message"}
                    </button>
                    <a
                      href={site.snapchatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#FFFC00] py-3.5 font-semibold text-black"
                    >
                      <Snapchat className="h-5 w-5" /> Snapchat
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMessage(null)}
                    className="mt-6 text-sm text-white/40 underline-offset-4 hover:text-white hover:underline"
                  >
                    Modifier ma demande
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom">
                    <input name="name" required autoComplete="name" placeholder="Votre nom" className={inputCls} />
                  </Field>
                  <Field label="Téléphone">
                    <input name="phone" type="tel" required autoComplete="tel" placeholder="06 00 00 00 00" className={inputCls} />
                  </Field>
                  <Field label="Véhicule" full>
                    <input name="vehicle" required placeholder="Marque, modèle, année (ex : Golf 8, 2022)" className={inputCls} />
                  </Field>
                  <Field label="Prestation">
                    <select name="service" className={inputCls} defaultValue={services[0]}>
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Teinte souhaitée">
                    <select name="tint" className={inputCls} defaultValue={tints[1]}>
                      {tints.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message (optionnel)" full>
                    <textarea name="details" rows={4} placeholder="Disponibilités, questions…" className={`${inputCls} resize-none`} />
                  </Field>
                  <button
                    type="submit"
                    className="bg-gold group col-span-full mt-2 flex items-center justify-center gap-2 rounded-full py-4 font-bold text-ink transition hover:brightness-110"
                  >
                    Envoyer ma demande sur WhatsApp
                    <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{label}</span>
      {children}
    </label>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
        <p className="mt-1 text-white/85">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex gap-4 transition hover:opacity-80">
      {content}
    </a>
  ) : (
    <div className="flex gap-4">{content}</div>
  );
}
