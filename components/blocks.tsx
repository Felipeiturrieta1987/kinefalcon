import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import type { Service } from "@/lib/services";
import { Button, Container, Eyebrow, ExternalButton, Pill, cx, serviceIcons } from "./ui";

/**
 * Dark hero used at the top of every page. The site header is fixed and
 * transparent, so each page needs a dark band behind it.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  breadcrumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  breadcrumb?: { href: string; label: string };
}) {
  return (
    <section className="bg-aurora relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative">
        {breadcrumb ? (
          <Link
            href={breadcrumb.href}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy-200 transition-colors hover:text-aqua-400"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
            {breadcrumb.label}
          </Link>
        ) : null}
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-100">{lead}</p>
        ) : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={cx(
        "group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-aqua-300 hover:shadow-xl hover:shadow-navy-900/5",
        className,
      )}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-500 to-navy-600 text-white shadow-md shadow-aqua-500/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-display mt-5 text-lg font-semibold text-navy-900">{service.name}</h3>
      <p className="mt-1 text-sm font-medium text-aqua-700">{service.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-navy-600">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-aqua-600">
        Ver detalle
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function CheckList({
  items,
  tone = "light",
  className,
}: {
  items: readonly string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cx("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={cx(
              "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              tone === "dark" ? "bg-aqua-400/20 text-aqua-300" : "bg-aqua-100 text-aqua-700",
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={cx("text-sm leading-6", tone === "dark" ? "text-navy-100" : "text-navy-700")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Closing call to action, reused at the bottom of every page. */
export function CtaBand({
  title = "Tu evaluación kinésica no tiene costo",
  lead = "Agenda una hora, te evaluamos y te decimos con claridad qué necesitas. Sin compromiso.",
  message,
}: {
  title?: string;
  lead?: string;
  message?: string;
}) {
  return (
    <section className="bg-aurora relative overflow-hidden bg-navy-950 py-20">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative text-center">
        <Pill tone="dark">Evaluación costo $0</Pill>
        <h2 className="font-display mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-navy-100">{lead}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ExternalButton href={whatsappUrl(message)} variant="whatsapp">
            Agendar por WhatsApp
          </ExternalButton>
          <Button href="/contacto" variant="ghost">
            Enviar un mensaje
          </Button>
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-navy-100 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>
      </Container>
    </section>
  );
}
