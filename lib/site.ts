/**
 * Single source of truth for everything that is "the business".
 * Values come from KineFalcon's own published material (Instagram @kinefalcon
 * and its promotional cards). Change them here and the whole site follows.
 */

export const site = {
  name: "KineFalcon",
  legalName: "KineFalcon — Centro Kinésico Integral",
  tagline: "Centro Kinésico Integral",
  claim: "Tu mejor opción en rehabilitación y bienestar",
  description:
    "Centro kinésico integral en San Miguel, Santiago. Rehabilitación de lesiones, kinesiología deportiva y terapias con tecnología de última generación: cámara hiperbárica, ondas de choque, presoterapia y carboxiterapia.",
  url: "https://www.kinefalcon.cl",
  yearsOfExperience: 15,

  phone: {
    display: "+56 9 5997 9887",
    tel: "+56959979887",
    whatsapp: "56959979887",
  },

  email: "contacto@kinefalcon.cl",

  address: {
    street: "Av. José Miguel Carrera 3840, Oficina 411",
    district: "San Miguel",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    postalCode: "8920000",
    get full() {
      return `${this.street}, ${this.district}, ${this.city}`;
    },
    mapsQuery: "Av.+José+Miguel+Carrera+3840,+San+Miguel,+Santiago,+Chile",
  },

  /** Opening hours as published on the centre's own promotional card. */
  hours: [
    { label: "Lunes a viernes", value: "09:00 – 21:00", days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "09:00", closes: "21:00" },
    { label: "Sábado", value: "09:00 – 14:00", days: ["Sa"], opens: "09:00", closes: "14:00" },
    { label: "Domingo y festivos", value: "Cerrado", days: [], opens: null, closes: null },
  ],

  social: {
    instagram: "https://www.instagram.com/kinefalcon/",
    facebook: "https://www.facebook.com/kinefalcon/",
  },

  /** Payment / insurance coverage. */
  coverage: ["Fonasa", "Isapre", "Particular"],
} as const;

/** Builds a wa.me link with the message already written for the visitor. */
export function whatsappUrl(message?: string): string {
  const text =
    message ??
    `Hola KineFalcon, quiero agendar mi evaluación sin costo.`;
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const mapsEmbedUrl = `https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${site.address.mapsQuery}`;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/convenios", label: "Convenios" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Sports clubs with a standing agreement, per the centre's published material. */
export const sportsPartners = [
  { name: "Venecia FC", sport: "Fútbol" },
  { name: "Club Deportivo Brisas", sport: "Fútbol" },
] as const;
