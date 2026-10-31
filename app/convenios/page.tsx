import type { Metadata } from "next";
import { Building2, CreditCard, Shield, Trophy } from "lucide-react";
import { CheckList, CtaBand, PageHero } from "@/components/blocks";
import { Container, ExternalButton, Pill, SectionHeading } from "@/components/ui";
import { site, sportsPartners, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Convenios y cobertura",
  description:
    "KineFalcon atiende Fonasa, Isapre y particular, y mantiene convenios con clubes deportivos de San Miguel y alrededores con tarifas preferentes.",
  alternates: { canonical: "/convenios" },
};

const coverage = [
  {
    icon: Shield,
    title: "Fonasa",
    body: "Atendemos pacientes Fonasa. Consulta por los requisitos de tu tramo y la documentación necesaria antes de tu primera hora.",
  },
  {
    icon: Building2,
    title: "Isapre",
    body: "Trabajamos con pacientes de Isapre. Te orientamos sobre el bono y el reembolso según tu plan.",
  },
  {
    icon: CreditCard,
    title: "Particular",
    body: "Atención particular con valores por sesión y planes por número de sesiones. La evaluación inicial no tiene costo.",
  },
];

export default function ConveniosPage() {
  return (
    <>
      <PageHero
        eyebrow="Convenios"
        title="Cobertura, convenios y clubes deportivos"
        lead="Queremos que el costo no sea el motivo por el que dejas una lesión sin tratar. Atendemos las tres modalidades y trabajamos con clubes de la zona."
      >
        <div className="flex flex-wrap gap-2.5">
          {site.coverage.map((item) => (
            <Pill key={item} tone="dark">
              {item}
            </Pill>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Formas de atención"
            title="Cómo puedes atenderte en KineFalcon"
            lead="Si tienes dudas sobre qué te conviene según tu previsión, escríbenos antes de agendar y lo revisamos contigo."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {coverage.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-aqua-300">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-navy-600">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-navy-100 bg-navy-50/70 p-6 text-center text-sm leading-7 text-navy-600">
            Los valores, bonificaciones y requisitos pueden variar según tu previsión y plan.
            Confírmalos con nosotros por WhatsApp o teléfono antes de tu primera sesión.
          </p>
        </Container>
      </section>

      {/* ------------------------------------------------------- Clubes */}
      <section className="bg-aurora relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Deporte"
                title="Convenios con clubes deportivos"
                lead="Acompañamos a planteles completos: prevención en pretemporada, atención durante la competencia y retorno deportivo con criterios objetivos."
                tone="dark"
              />

              <div className="mt-8 flex flex-wrap gap-2.5">
                {sportsPartners.map((club) => (
                  <Pill key={club.name} tone="dark">
                    <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                    {club.name}
                  </Pill>
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-navy-200">
                Si tu club todavía no tiene convenio, conversémoslo. Armamos condiciones a la medida
                del plantel y de la temporada.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-semibold text-white">
                Qué incluye un convenio
              </h3>
              <CheckList
                className="mt-6"
                tone="dark"
                items={[
                  "Tarifas preferentes para jugadores y su grupo familiar directo",
                  "Evaluación kinésica de pretemporada para el plantel",
                  "Prioridad de agenda en periodos de competencia",
                  "Coordinación directa con el cuerpo técnico y el preparador físico",
                  "Informes de alta deportiva con criterios objetivos",
                ]}
              />
              <ExternalButton
                href={whatsappUrl(
                  "Hola KineFalcon, represento a un club deportivo y quiero conversar un convenio para nuestro plantel.",
                )}
                variant="whatsapp"
                className="mt-8 w-full"
              >
                Conversar un convenio
              </ExternalButton>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Dudas con tu previsión?"
        lead="Escríbenos antes de agendar y te decimos exactamente cómo funciona en tu caso."
        message="Hola KineFalcon, tengo una consulta sobre convenios y cobertura."
      />
    </>
  );
}
