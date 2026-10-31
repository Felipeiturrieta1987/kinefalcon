import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarRange, Info, Repeat, Timer } from "lucide-react";
import { CheckList, CtaBand, PageHero } from "@/components/blocks";
import { Container, ExternalButton, SectionHeading, serviceIcons } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { site, whatsappUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: `${service.name} en San Miguel, Santiago`,
    description: service.summary,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.summary,
      url: `${site.url}/servicios/${service.slug}`,
    },
  };
}

export default async function ServicioPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.name,
    description: service.summary,
    url: `${site.url}/servicios/${service.slug}`,
    provider: { "@type": "MedicalBusiness", name: site.name, url: site.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static, non-user-supplied JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumb={{ href: "/servicios", label: "Todos los servicios" }}
        eyebrow={service.tagline}
        title={service.name}
        lead={service.summary}
      >
        <ExternalButton
          href={whatsappUrl(
            `Hola KineFalcon, quiero información sobre ${service.name} y agendar mi evaluación sin costo.`,
          )}
          variant="whatsapp"
        >
          Consultar por {service.name}
        </ExternalButton>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-500 to-navy-600 text-white shadow-lg shadow-aqua-500/20">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>

              <div className="mt-7 space-y-5">
                {service.intro.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-navy-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              {service.image ? (
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={480}
                  height={640}
                  loading="lazy"
                  className="mt-10 w-full rounded-2xl border border-navy-100 object-cover shadow-lg shadow-navy-900/5"
                />
              ) : null}

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900">Qué aporta</h2>
                  <CheckList className="mt-5" items={service.benefits} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900">
                    Casos en que se indica
                  </h2>
                  <CheckList className="mt-5" items={service.indications} />
                </div>
              </div>

              {service.note ? (
                <div className="mt-12 flex gap-4 rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" aria-hidden="true" />
                  <p className="text-sm leading-7 text-navy-600">{service.note}</p>
                </div>
              ) : null}
            </div>

            {/* Sticky summary panel */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-7 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-navy-900">La sesión</h2>
                <dl className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <Timer className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                        Duración
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-navy-800">
                        {service.session.duration}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Repeat className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                        Frecuencia
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-navy-800">
                        {service.session.frequency}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CalendarRange className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                        Modalidad
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-navy-800">
                        {service.session.modality}
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-7 border-t border-navy-100 pt-6">
                  <p className="text-sm leading-7 text-navy-600">
                    La evaluación kinésica inicial no tiene costo. Atendemos Fonasa, Isapre y
                    particular.
                  </p>
                  <ExternalButton
                    href={whatsappUrl(
                      `Hola KineFalcon, quiero agendar ${service.name}.`,
                    )}
                    variant="whatsapp"
                    className="mt-5 w-full"
                  >
                    Agendar por WhatsApp
                  </ExternalButton>
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="mt-3 block text-center text-sm font-semibold text-navy-700 transition-colors hover:text-aqua-600"
                  >
                    o llámanos al {site.phone.display}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20">
        <Container>
          <SectionHeading eyebrow="También puede interesarte" title="Otros servicios del centro" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = serviceIcons[item.icon];
              return (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-aqua-300 hover:shadow-lg"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-aqua-300">
                    <RelatedIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display flex-1 text-sm font-semibold text-navy-900">
                    {item.name}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`¿Te sirve ${service.name}?`}
        lead="Agenda la evaluación sin costo y lo definimos juntos con criterio clínico."
        message={`Hola KineFalcon, quiero agendar mi evaluación sin costo. Me interesa ${service.name}.`}
      />
    </>
  );
}
