import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Centro Kinésico Integral en San Miguel, Santiago`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kinesiología San Miguel",
    "kinesiólogo Santiago",
    "cámara hiperbárica Santiago",
    "ondas de choque",
    "presoterapia",
    "carboxiterapia",
    "rehabilitación deportiva",
    "kinesiología traumatológica",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.claim}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.claim}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/**
 * schema.org record for the centre. Powers the local knowledge panel and
 * rich results for "kinesiología San Miguel"-style searches.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${site.url}/#organizacion`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone.display,
  email: site.email,
  image: `${site.url}/ig/logo.jpg`,
  logo: `${site.url}/ig/logo.jpg`,
  priceRange: "$$",
  currenciesAccepted: "CLP",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "CL",
  },
  openingHoursSpecification: site.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  sameAs: [site.social.instagram, site.social.facebook],
  medicalSpecialty: "PhysicalTherapy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
        />
        <link rel="icon" href="/ig/logo.jpg" />
        <meta name="theme-color" content="#050d1f" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- static, non-user-supplied JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-aqua-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-950"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsappFab />
      </body>
    </html>
  );
}
