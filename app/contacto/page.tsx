import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/blocks";
import { ContactForm } from "@/components/contact-form";
import { WhatsappIcon } from "@/components/brand-icons";
import { Container, ExternalButton, SectionHeading } from "@/components/ui";
import { mapsEmbedUrl, mapsLinkUrl, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y agenda",
  description: `Agenda tu evaluación kinésica sin costo en KineFalcon. ${site.address.full}. Teléfono ${site.phone.display}.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Agenda tu evaluación sin costo"
        lead="Escríbenos por WhatsApp para una respuesta rápida, o déjanos tu consulta en el formulario y te contactamos dentro del horario de atención."
      >
        <div className="flex flex-wrap gap-3">
          <ExternalButton href={whatsappUrl()} variant="whatsapp">
            <WhatsappIcon className="h-4 w-4" />
            Escribir por WhatsApp
          </ExternalButton>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Formulario"
                title="Cuéntanos qué necesitas"
                lead="Mientras más nos cuentes sobre tu caso, mejor podemos orientarte desde la primera respuesta."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-7 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Datos del centro
                </h2>
                <dl className="mt-6 space-y-5 text-sm">
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-navy-800">Dirección</dt>
                      <dd className="mt-1 leading-6 text-navy-600">
                        <a
                          href={mapsLinkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-aqua-700"
                        >
                          {site.address.street}
                          <br />
                          {site.address.district}, {site.address.city}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-navy-800">Teléfono y WhatsApp</dt>
                      <dd className="mt-1 leading-6 text-navy-600">
                        <a
                          href={`tel:${site.phone.tel}`}
                          className="transition-colors hover:text-aqua-700"
                        >
                          {site.phone.display}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-navy-800">Correo</dt>
                      <dd className="mt-1 leading-6 text-navy-600">
                        <a
                          href={`mailto:${site.email}`}
                          className="transition-colors hover:text-aqua-700"
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-navy-800">Horario de atención</dt>
                      <dd className="mt-1 space-y-0.5 leading-6 text-navy-600">
                        {site.hours.map((h) => (
                          <div key={h.label}>
                            {h.label}: <span className="font-medium text-navy-800">{h.value}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-sm">
                <iframe
                  src={mapsEmbedUrl}
                  title={`Ubicación de ${site.name} en Google Maps`}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
