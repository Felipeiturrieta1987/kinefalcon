import type { Metadata } from "next";
import { CtaBand, PageHero, ServiceCard } from "@/components/blocks";
import { Container, ExternalButton } from "@/components/ui";
import { services } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de kinesiología y terapias avanzadas",
  description:
    "Cámara hiperbárica rígida, ondas de choque, presoterapia, carboxiterapia, masoterapia y kinesiología traumatológica, deportiva, neuromuscular y respiratoria en San Miguel, Santiago.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Todo lo que necesitas para recuperarte, en un solo centro"
        lead="Nueve servicios que se combinan según tu caso. La evaluación inicial define cuáles aportan valor real a tu proceso — y cuáles no."
      >
        <ExternalButton href={whatsappUrl()} variant="whatsapp">
          Agendar evaluación sin costo
        </ExternalButton>
      </PageHero>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl rounded-2xl border border-navy-100 bg-white p-6 text-center text-sm leading-7 text-navy-600">
            ¿No sabes cuál corresponde a tu caso? No tienes que decidirlo tú. Agenda la evaluación
            sin costo y te decimos con claridad qué necesitas.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
