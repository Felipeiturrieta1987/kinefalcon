import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
} from "lucide-react";
import { InstagramIcon } from "@/components/brand-icons";
import { CheckList, CtaBand, ServiceCard } from "@/components/blocks";
import { Button, Container, ExternalButton, Pill, SectionHeading } from "@/components/ui";
import { featuredServices } from "@/lib/services";
import { mapsEmbedUrl, mapsLinkUrl, site, sportsPartners, whatsappUrl } from "@/lib/site";

const stats = [
  { value: `${site.yearsOfExperience} años`, label: "de experiencia clínica" },
  { value: "$0", label: "tu evaluación inicial" },
  { value: "Fonasa / Isapre", label: "y atención particular" },
  { value: "Lun a Sáb", label: "con horario extendido" },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Agendas tu hora",
    body: "Por WhatsApp, teléfono o el formulario del sitio. Te confirmamos el mismo día.",
  },
  {
    icon: ClipboardList,
    title: "Evaluamos sin costo",
    body: "Evaluación kinésica completa para entender qué estructura está comprometida y en qué fase estás.",
  },
  {
    icon: Target,
    title: "Definimos un plan",
    body: "Objetivos por etapa, frecuencia y qué terapias aportan valor real a tu caso. Te lo explicamos en simple.",
  },
  {
    icon: TrendingUp,
    title: "Avanzamos y medimos",
    body: "Reevaluamos durante el proceso y ajustamos. El alta se define con criterios, no sólo con el calendario.",
  },
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Respaldo sanitario",
    body: "Centro respaldado por la Seremi de Salud, con equipamiento clínico profesional.",
  },
  {
    icon: Stethoscope,
    title: "Kinesiología personalizada",
    body: "Atención individual con kinesiólogo. Nada de salas llenas ni planes genéricos.",
  },
  {
    icon: Sparkles,
    title: "Tecnología real",
    body: "Cámara hiperbárica rígida, ondas de choque, presoterapia y carboxiterapia en un mismo lugar.",
  },
];

const instagramPosts = [
  "post-02",
  "post-11",
  "post-06",
  "post-07",
  "post-08",
  "post-01",
  "post-03",
  "post-12",
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="bg-aurora relative overflow-hidden bg-navy-950 pb-20 pt-32 sm:pt-40">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise">
              <Pill tone="dark">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {site.yearsOfExperience} años en San Miguel · Evaluación costo $0
              </Pill>

              <h1 className="font-display mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Kinesiología personalizada con la{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-aqua-400 to-violet-brand-300 bg-clip-text text-transparent">
                  última tecnología
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-navy-100">
                Rehabilitación de lesiones, kinesiología deportiva y terapias avanzadas en un solo
                centro. Te evaluamos sin costo y armamos un plan con objetivos claros.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <ExternalButton href={whatsappUrl()} variant="whatsapp">
                  Agendar evaluación sin costo
                </ExternalButton>
                <Button href="/servicios" variant="ghost">
                  Ver servicios
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-200">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-aqua-400" aria-hidden="true" />
                  {site.address.district}, {site.address.city}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-aqua-400" aria-hidden="true" />
                  Lun a Vie 09:00–21:00 · Sáb 09:00–14:00
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-aqua-500/20 via-transparent to-violet-brand-500/20 blur-2xl" aria-hidden="true" />
              <img
                src="/ig/post-02.jpg"
                alt="Sala de cámara hiperbárica rígida en el centro KineFalcon de San Miguel"
                width={360}
                height={640}
                className="relative w-full rounded-[1.75rem] border border-white/10 object-cover shadow-2xl shadow-navy-950/60 sm:max-h-[32rem]"
              />
              <div className="relative -mt-10 ml-auto mr-4 w-fit rounded-2xl border border-white/15 bg-navy-900/80 px-5 py-4 backdrop-blur-md sm:mr-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-aqua-400">
                  Cámara rígida clínica
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  Mayor presión terapéutica y monitoreo controlado
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------------- Stats */}
      <section className="border-b border-navy-100 bg-white py-10">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display block text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-navy-600">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Servicios */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Qué hacemos"
              title="Un centro kinésico integral, no una sala de ejercicios"
              lead="Combinamos kinesiología clásica con tecnología que normalmente sólo encuentras en centros especializados."
            />
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-aqua-600"
            >
              Ver los {" "}
              <span className="tabular-nums">9</span> servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Tecnología */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Nuestra diferencia"
                title="Cámara hiperbárica rígida, no una carpa inflable"
                lead="No todas las cámaras hiperbáricas son equivalentes, y la diferencia se nota en el resultado."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
                  <p className="text-sm font-semibold text-navy-500">Cámara tipo carpa</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-navy-600">
                    <li>Presión baja</li>
                    <li>Menor control de parámetros</li>
                    <li>Estructura flexible</li>
                    <li>Uso doméstico o portátil</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-aqua-300 bg-gradient-to-br from-aqua-50 to-white p-5 shadow-lg shadow-aqua-500/10">
                  <p className="text-sm font-semibold text-aqua-800">Cámara rígida · KineFalcon</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-navy-700">
                    <li>Mayor presión terapéutica</li>
                    <li>Control y monitoreo de seguridad</li>
                    <li>Equipamiento clínico profesional</li>
                    <li>Experiencia cómoda y estable</li>
                  </ul>
                </div>
              </div>
              <Button href="/servicios/camara-hiperbarica" variant="secondary" className="mt-8">
                Conocer la terapia hiperbárica
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="order-1 grid gap-5 lg:order-2">
              {trust.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-aqua-300">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-navy-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Proceso */}
      <section className="bg-aurora relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso claro, de la primera hora al alta"
            lead="Sabes en todo momento en qué etapa estás, qué sigue y por qué."
            tone="dark"
            align="center"
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="font-display absolute right-5 top-4 text-4xl font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-500/15 text-aqua-300 ring-1 ring-inset ring-aqua-400/30">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-navy-200">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Convenios */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Convenios y cobertura"
                title="Atendemos Fonasa, Isapre y particular"
                lead="Y mantenemos convenios vigentes con clubes deportivos de la zona, con tarifas preferentes y evaluaciones para sus socios."
              />
              <div className="mt-8 flex flex-wrap gap-2.5">
                {site.coverage.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
                {sportsPartners.map((club) => (
                  <Pill key={club.name}>{club.name}</Pill>
                ))}
              </div>
              <Button href="/convenios" variant="secondary" className="mt-9">
                Ver detalle de convenios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-navy-900">
                ¿Perteneces a un club deportivo?
              </h3>
              <p className="mt-3 text-sm leading-7 text-navy-600">
                Trabajamos con clubes amateur y federados. Coordinamos atención para el plantel,
                evaluaciones de pretemporada y acompañamiento durante la competencia.
              </p>
              <CheckList
                className="mt-6"
                items={[
                  "Tarifas preferentes para socios y familiares",
                  "Evaluación kinésica de pretemporada",
                  "Coordinación con el cuerpo técnico",
                  "Criterios objetivos de retorno deportivo",
                ]}
              />
              <ExternalButton
                href={whatsappUrl(
                  "Hola KineFalcon, represento a un club deportivo y quiero conocer el convenio para nuestros jugadores.",
                )}
                variant="primary"
                className="mt-8"
              >
                Conversar un convenio
              </ExternalButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Instagram */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Día a día"
              title="Lo que pasa en el centro"
              lead="Publicamos casos, tecnología y educación en salud en nuestro Instagram."
            />
            <ExternalButton href={site.social.instagram} variant="secondary">
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              @kinefalcon
            </ExternalButton>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {instagramPosts.map((id) => (
              <li key={id}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-navy-100 bg-white"
                >
                  <img
                    src={`/ig/${id}.jpg`}
                    alt="Publicación de KineFalcon en Instagram"
                    width={480}
                    height={640}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Ubicación */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Dónde estamos"
                title="En pleno San Miguel, a pasos del metro"
                lead="Av. José Miguel Carrera 3840, oficina 411. Si vienes por primera vez, escríbenos y te orientamos."
              />

              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                  <div>
                    <dt className="font-display text-sm font-semibold text-navy-900">Dirección</dt>
                    <dd className="mt-1 text-sm leading-7 text-navy-600">
                      {site.address.street}
                      <br />
                      {site.address.district}, {site.address.city}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-aqua-600" aria-hidden="true" />
                  <div>
                    <dt className="font-display text-sm font-semibold text-navy-900">Horario</dt>
                    <dd className="mt-1 space-y-0.5 text-sm leading-7 text-navy-600">
                      {site.hours.map((h) => (
                        <div key={h.label}>
                          {h.label}: <span className="font-medium text-navy-800">{h.value}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <ExternalButton href={mapsLinkUrl} variant="secondary">
                  Cómo llegar
                </ExternalButton>
                <Button href="/contacto" variant="primary">
                  Contacto y formulario
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-lg shadow-navy-900/5">
              <iframe
                src={mapsEmbedUrl}
                title={`Ubicación de ${site.name} en Google Maps`}
                className="h-[26rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
