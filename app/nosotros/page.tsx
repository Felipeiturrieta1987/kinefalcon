import type { Metadata } from "next";
import { HeartHandshake, Microscope, ShieldCheck, Users } from "lucide-react";
import { CheckList, CtaBand, PageHero } from "@/components/blocks";
import { Container, ExternalButton, SectionHeading } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "KineFalcon es un centro kinésico integral en San Miguel con 15 años de experiencia, equipamiento clínico profesional y respaldo de la Seremi de Salud.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  {
    icon: Users,
    title: "Atención individual",
    body: "Un paciente, un kinesiólogo, una hora completa. No compartimos la sesión ni entregamos planes copiados.",
  },
  {
    icon: Microscope,
    title: "Criterio clínico",
    body: "Indicamos una terapia cuando aporta algo real a tu caso. Si no corresponde, te lo decimos.",
  },
  {
    icon: HeartHandshake,
    title: "Trato cercano",
    body: "Te explicamos qué tienes, qué vamos a hacer y cuánto puede tomar. Sin tecnicismos innecesarios.",
  },
  {
    icon: ShieldCheck,
    title: "Equipamiento profesional",
    body: "Tecnología de uso clínico, con protocolos de seguridad y monitoreo durante cada sesión.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Un centro kinésico que combina oficio y tecnología"
        lead={`${site.yearsOfExperience} años atendiendo en San Miguel. Partimos como una consulta de kinesiología y hoy somos un centro integral con equipamiento que normalmente sólo se encuentra en recintos especializados.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Quiénes somos"
                title="Tu mejor opción en rehabilitación y bienestar"
              />
              <div className="mt-7 space-y-5 text-lg leading-8 text-navy-700">
                <p>
                  KineFalcon nace de una idea simple: que recuperarse de una lesión no debería ser un
                  proceso confuso. Que deberías saber qué tienes, qué se va a hacer y cómo vas
                  avanzando.
                </p>
                <p>
                  Con los años fuimos incorporando tecnología que acelera y complementa el trabajo
                  kinésico — cámara hiperbárica rígida, ondas de choque, presoterapia,
                  carboxiterapia — siempre como apoyo a un plan de rehabilitación, nunca como
                  reemplazo del trabajo con el kinesiólogo.
                </p>
                <p>
                  Hoy atendemos pacientes traumatológicos, deportistas de clubes con convenio,
                  procesos post-operatorios y rehabilitación neuromuscular y respiratoria, en el
                  mismo lugar y con el mismo criterio.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50/70 p-6">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  Respaldo y cobertura
                </h3>
                <CheckList
                  className="mt-5"
                  items={[
                    "Centro respaldado por la Seremi de Salud",
                    "Atención Fonasa, Isapre y particular",
                    "Equipamiento clínico profesional con protocolos de seguridad",
                    "Convenios vigentes con clubes deportivos de la zona",
                  ]}
                />
              </div>
            </div>

            <div className="space-y-5">
              <img
                src="/ig/post-11.jpg"
                alt="Instalaciones y equipamiento del centro kinésico KineFalcon"
                width={480}
                height={640}
                className="w-full rounded-2xl border border-navy-100 object-cover shadow-lg shadow-navy-900/5"
              />
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6">
                <div>
                  <p className="font-display text-3xl font-bold text-navy-900">
                    {site.yearsOfExperience}
                  </p>
                  <p className="mt-1 text-sm text-navy-600">años de experiencia</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-navy-900">9</p>
                  <p className="mt-1 text-sm text-navy-600">servicios integrados</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Cómo atendemos"
            title="Lo que puedes esperar de una hora acá"
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-500 to-navy-600 text-white">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-7 text-navy-600">{value.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-lg leading-8 text-navy-700">
              ¿Quieres conocer el centro antes de decidir? Escríbenos y coordinamos una visita junto
              con tu evaluación sin costo.
            </p>
            <ExternalButton
              href={whatsappUrl(
                "Hola KineFalcon, me gustaría conocer el centro y agendar mi evaluación sin costo.",
              )}
              variant="whatsapp"
              className="mt-7"
            >
              Coordinar una visita
            </ExternalButton>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
