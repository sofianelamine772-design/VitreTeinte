// Informations de l'entreprise — à modifier ici, elles sont utilisées sur tout le site.
export const site = {
  name: "Vitre Teintées One TLS",
  shortName: "One TLS",
  tagline: "Protection · Confort · Élégance",
  city: "Toulouse",
  area: "Toulouse & Haute-Garonne (31)",
  snapchat: "AUTO-TLS31",
  snapchatUrl: "https://www.snapchat.com/add/auto-tls31",
  calendlyUrl: "https://calendly.com/onetls/75min",
  // TODO: remplacer par le vrai numéro WhatsApp, format international sans « + » ni espaces
  whatsapp: "33600000000",
  // TODO: renseigner les vraies coordonnées
  phone: "",
  email: "",
  address: "Toulouse (31)",
  hours: [
    { days: "Lundi – Vendredi", time: "9h00 – 19h00" },
    { days: "Samedi", time: "9h00 – 17h00" },
    { days: "Dimanche", time: "Sur rendez-vous" },
  ],
};

export const whatsappUrl = (text = "Bonjour, je souhaite un devis pour la teinte de mes vitres.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/simulateur", label: "Simulateur" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reglementation", label: "Législation" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
