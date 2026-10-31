import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type Payload = {
  nombre?: unknown;
  email?: unknown;
  telefono?: unknown;
  servicio?: unknown;
  mensaje?: unknown;
  /** Honeypot: real people never fill this in. */
  web?: unknown;
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bot caught by the honeypot: answer 200 so it stops retrying, send nothing.
  if (str(body.web)) {
    return Response.json({ ok: true });
  }

  const nombre = str(body.nombre);
  const email = str(body.email);
  const telefono = str(body.telefono);
  const servicio = str(body.servicio);
  const mensaje = str(body.mensaje);

  const errors: Record<string, string> = {};
  if (nombre.length < 2) errors.nombre = "Indícanos tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Revisa tu correo.";
  if (telefono.replace(/\D/g, "").length < 8) errors.telefono = "Revisa tu teléfono.";
  if (mensaje.length < 10) errors.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  const serviceName =
    services.find((s) => s.slug === servicio)?.name ?? "Consulta general";

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM;

  // Without a configured mail provider the message would be silently dropped.
  // Tell the client instead, so it can point the visitor at WhatsApp.
  if (!apiKey || !from) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const html = `
    <h2>Nueva consulta desde kinefalcon.cl</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
    <p><strong>Servicio de interés:</strong> ${escapeHtml(serviceName)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Consulta web — ${serviceName} — ${nombre}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("resend error", res.status, await res.text());
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("resend request failed", err);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
