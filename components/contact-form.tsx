"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";
import { cx } from "./ui";

type FieldErrors = Partial<Record<"nombre" | "email" | "telefono" | "mensaje", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-500 transition-colors focus:border-aqua-400 focus:outline-none focus:ring-2 focus:ring-aqua-400/30";

const labelClass = "block text-sm font-semibold text-navy-800";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as {
        ok: boolean;
        error?: string;
        errors?: FieldErrors;
      };

      if (json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      if (json.error === "validation" && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
        setMessage("Revisa los campos marcados.");
        return;
      }

      setStatus("error");
      setMessage(
        json.error === "not_configured"
          ? "El envío por correo aún no está habilitado en este sitio."
          : "No pudimos enviar tu mensaje en este momento.",
      );
    } catch {
      setStatus("error");
      setMessage("No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo otra vez.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-aqua-200 bg-aqua-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-aqua-600" aria-hidden="true" />
        <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">
          Mensaje enviado
        </h3>
        <p className="mt-3 text-sm leading-7 text-navy-700">
          Gracias por escribirnos. Te responderemos dentro del horario de atención. Si prefieres una
          respuesta más rápida, escríbenos por WhatsApp.
        </p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#07351a]"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="web">No completar</label>
        <input id="web" name="web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre y apellido <span className="text-aqua-700">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Camila Rojas"
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "error-nombre" : undefined}
            className={cx(fieldClass, "mt-2", errors.nombre && "border-red-400")}
          />
          {errors.nombre ? (
            <p id="error-nombre" className="mt-1.5 text-xs text-red-600">
              {errors.nombre}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono <span className="text-aqua-700">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? "error-telefono" : undefined}
            className={cx(fieldClass, "mt-2", errors.telefono && "border-red-400")}
          />
          {errors.telefono ? (
            <p id="error-telefono" className="mt-1.5 text-xs text-red-600">
              {errors.telefono}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Correo electrónico <span className="text-aqua-700">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="camila@correo.cl"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "error-email" : undefined}
          className={cx(fieldClass, "mt-2", errors.email && "border-red-400")}
        />
        {errors.email ? (
          <p id="error-email" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="servicio" className={labelClass}>
          Servicio de interés
        </label>
        <select id="servicio" name="servicio" defaultValue="" className={cx(fieldClass, "mt-2")}>
          <option value="">No estoy seguro / consulta general</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Cuéntanos qué te pasa <span className="text-aqua-700">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Hace tres semanas tengo dolor en el talón al correr…"
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
          className={cx(fieldClass, "mt-2 resize-y", errors.mensaje && "border-red-400")}
        />
        {errors.mensaje ? (
          <p id="error-mensaje" className="mt-1.5 text-xs text-red-600">
            {errors.mensaje}
          </p>
        ) : null}
      </div>

      {status === "error" || message ? (
        <div
          role="alert"
          className={cx(
            "flex gap-3 rounded-xl p-4 text-sm leading-6",
            status === "error"
              ? "bg-red-50 text-red-800 ring-1 ring-inset ring-red-200"
              : "bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200",
          )}
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {message}{" "}
            {status === "error" ? (
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                Escríbenos por WhatsApp
              </a>
            ) : null}
          </span>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar mensaje
            </>
          )}
        </button>
        <p className="text-xs leading-5 text-navy-500">
          Usamos tus datos sólo para responder tu consulta.
        </p>
      </div>
    </form>
  );
}
