"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { Container, cx } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — inicio`}>
            <img
              src="/ig/logo.jpg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full ring-2 ring-white/20"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Kine<span className="text-aqua-400">Falcon</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-navy-200">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-navy-100 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.phone.tel}`}
              className="flex items-center gap-2 text-sm font-medium text-navy-100 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-aqua-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-aqua-500/25 transition-all hover:-translate-y-0.5 hover:bg-aqua-400"
            >
              Agendar evaluación
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="menu-movil" className="border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden">
          <Container className="py-5">
            <nav className="flex flex-col gap-1" aria-label="Principal (móvil)">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-white/10 text-white"
                      : "text-navy-100 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-aqua-500 px-5 py-3 text-center text-sm font-semibold text-navy-950"
              >
                Agendar evaluación sin costo
              </a>
              <a
                href={`tel:${site.phone.tel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone.display}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
