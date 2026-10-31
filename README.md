# KineFalcon — sitio web

Sitio del centro kinésico **KineFalcon** (San Miguel, Santiago), construido con
[vinext](https://github.com/cloudflare/vinext) (Next.js App Router sobre Vite) y desplegado en
**Cloudflare Workers**.

🌐 **En línea:** <https://kinefalcon.fiturrieta87.workers.dev>

- **Diseño:** paleta tomada del logo y del material gráfico del centro (azul noche, cian y violeta).
- **Conversión:** WhatsApp con mensaje prellenado según el servicio + formulario de contacto.
- **SEO local:** metadata por página, JSON-LD `MedicalBusiness` y `MedicalTherapy`, `sitemap.xml` y
  `robots.txt`.

## Páginas

| Ruta                      | Contenido                                                        |
| ------------------------- | ---------------------------------------------------------------- |
| `/`                       | Hero, cifras, servicios destacados, cámara rígida vs carpa, proceso, convenios, Instagram, ubicación |
| `/servicios`              | Índice de los 9 servicios                                        |
| `/servicios/[slug]`       | Página por servicio (9 rutas, pre-renderizadas)                  |
| `/nosotros`               | Historia, valores, respaldo y cobertura                          |
| `/convenios`              | Fonasa / Isapre / particular y convenios con clubes              |
| `/contacto`               | Formulario, datos del centro y mapa                              |
| `/api/contacto`           | Endpoint `POST` del formulario                                   |

## Editar el contenido

Casi todo el texto del negocio vive en dos archivos. Cámbialos ahí y el sitio completo se actualiza:

- **[`lib/site.ts`](lib/site.ts)** — nombre, teléfono, WhatsApp, correo, dirección, horarios, redes,
  convenios y años de experiencia.
- **[`lib/services.ts`](lib/services.ts)** — catálogo de servicios. Cada entrada genera su tarjeta y
  su página completa (intro, beneficios, indicaciones, datos de la sesión).

Las imágenes están en `public/ig/`. Se extrajeron del Instagram público
[@kinefalcon](https://www.instagram.com/kinefalcon/) como material provisional: `logo.jpg` es la foto
de perfil (150×150, conviene reemplazarla por el logo en alta resolución o SVG) y `post-*.jpg` son
publicaciones. **Reemplázalas por fotos propias en alta resolución cuando estén disponibles.**

## Desarrollo local

```bash
pnpm install
pnpm dev
```

### ⚠️ Esta máquina no puede compilar ni desplegar

El plugin de Cloudflare levanta `workerd`, que **exige macOS 13.5+ o Linux con glibc 2.35+**. Este
equipo corre **macOS 12.7.6**, así que `pnpm build`, `pnpm start` y `pnpm deploy` fallan con
`Unsupported macOS version`.

Para trabajar igual, `vite.config.ts` lee la variable `NO_CF`, que omite el plugin de Cloudflare:

```bash
pnpm dev:node    # servidor de desarrollo sin workerd — funciona en macOS 12
```

`dev:node` sirve para escribir y revisar el sitio completo (todas las rutas, el formulario y las
API routes funcionan). Lo que **no** puede hacerse aquí es el build de producción: `vite build`
apunta a Workers y exige el plugin, por lo que `NO_CF=1 vite build` tampoco sirve.

**El build y el deploy deben correr en Linux o en macOS 13.5+.** Ver la sección siguiente.

## Deploy

### Configuración actual: Cloudflare Workers Builds

El repo está conectado a Workers Builds, que compila en Linux y evita la limitación local.
**Cada push a `main` despliega automáticamente.**

| Ajuste                   | Valor            |
| ------------------------ | ---------------- |
| Worker name              | `kinefalcon`     |
| Comando de compilación   | `pnpm run build` |
| Comando de implementación| `pnpm run deploy`|
| Directorio raíz          | `/`              |
| Rama de producción       | `main`           |

⚠️ **Dos detalles que hacen fallar el deploy:**

1. **`pnpm run deploy`, no `pnpm deploy`.** `deploy` es un subcomando propio de pnpm, así que sin
   `run` nunca se ejecuta el script del proyecto.
2. **Dejar el comando por defecto tampoco sirve.** Workers Builds usa `npx wrangler deploy`, pero
   este proyecto se compila con el CLI `cf` y wrangler aborta con
   *"Please run `cf deploy` instead"*. El script `deploy` ya resuelve esto.

El Worker en el panel debe llamarse igual que el `name` de `cloudflare.config.ts` (`kinefalcon`).

### Opción manual

Desde cualquier máquina con Linux o macOS 13.5+:

```bash
pnpm install
pnpm build
pnpm deploy
```

### Dominio

`kinefalcon.cl` aparece en la bio de Instagram y en el material gráfico, **pero hoy no resuelve**
(sin registros DNS). Hay que apuntarlo a Cloudflare y agregar el dominio personalizado al Worker.
Si cambia el dominio final, actualiza `site.url` en [`lib/site.ts`](lib/site.ts),
`public/robots.txt` y `public/sitemap.xml`.

## Formulario de contacto

`POST /api/contacto` valida los datos y envía el correo vía [Resend](https://resend.com). Variables
necesarias (ver [`.env.example`](.env.example)):

| Variable         | Tipo    | Descripción                                   |
| ---------------- | ------- | --------------------------------------------- |
| `RESEND_API_KEY` | secreto | API key de Resend                             |
| `CONTACT_FROM`   | var     | Remitente verificado, ej. `KineFalcon <web@kinefalcon.cl>` |
| `CONTACT_TO`     | var     | Casilla que recibe las consultas              |

**Si no están configuradas, el endpoint responde `503 not_configured`** y el formulario le muestra
al visitante un aviso con el enlace a WhatsApp. Es deliberado: preferimos avisar antes que aceptar
el mensaje y perderlo en silencio.

Protecciones incluidas: honeypot (`web`), validación de nombre, correo, teléfono y largo mínimo del
mensaje, y escape de HTML antes de armar el correo.

## Estado y pendientes

- [x] 14 rutas, todas respondiendo 200 en producción (404 propio incluido)
- [x] Sin desbordes horizontales a 390 px en ninguna página
- [x] Contraste AA verificado en los textos del sitio
- [x] `tsc --noEmit` sin errores
- [x] Build de producción verificado en Workers Builds y desplegado
- [ ] Reemplazar las imágenes de Instagram por fotografías propias en alta resolución
      (el logo actual son 150×150; conviene pedir el vectorial)
- [ ] Confirmar el correo de contacto (`contacto@kinefalcon.cl` es un supuesto) y configurar Resend
- [ ] Apuntar el dominio `kinefalcon.cl` y actualizar `site.url`
- [ ] Decidir si el sitio en `workers.dev` debe llevar `noindex` mientras no exista el dominio
      (hoy `site.url` apunta a `kinefalcon.cl`, que aún no resuelve)
- [ ] Servir las rutas pre-renderizadas desde el Static Assets cache (hoy se renderizan en cada
      request: funciona, pero más lento de lo necesario)
- [ ] Confirmar textos, horarios y convenios con el centro antes de publicar

## Datos usados

Los datos del negocio provienen del material público del propio centro: Instagram
[@kinefalcon](https://www.instagram.com/kinefalcon/), su tarjeta promocional (teléfono, horarios,
15 años de experiencia, cobertura Fonasa/Isapre) y fichas de directorios de salud (dirección y
convenios deportivos). **Conviene que el centro los confirme antes de publicar.**
