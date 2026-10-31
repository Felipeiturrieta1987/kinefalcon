import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./brand-icons";
import { mapsLinkUrl, nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/ig/logo.jpg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full ring-2 ring-white/15"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Kine<span className="text-aqua-400">Falcon</span>
                </span>
                <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-navy-300">
                  {site.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7">
              {site.yearsOfExperience} años acompañando la recuperación de pacientes y deportistas en
              San Miguel, con kinesiología personalizada y tecnología de última generación.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 p-2.5 text-white transition-colors hover:border-aqua-400 hover:text-aqua-400"
                aria-label="Instagram de KineFalcon"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 p-2.5 text-white transition-colors hover:border-aqua-400 hover:text-aqua-400"
                aria-label="Facebook de KineFalcon"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-aqua-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="transition-colors hover:text-aqua-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicios" className="font-semibold text-aqua-400 hover:text-aqua-300">
                  Ver todos
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-6 transition-colors hover:text-aqua-400"
                >
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.city}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a href={`tel:${site.phone.tel}`} className="transition-colors hover:text-aqua-400">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-aqua-400">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <div className="leading-6">
                  {site.hours.map((h) => (
                    <div key={h.label}>
                      <span className="text-navy-300">{h.label}:</span> {h.value}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <p className="max-w-xl sm:text-right">
            La información de este sitio es orientativa y no reemplaza una consulta profesional.
            Toda terapia se indica tras una evaluación kinésica.
          </p>
        </div>
      </Container>
    </footer>
  );
}
