import { PageHero } from "@/components/blocks";
import { Button, Container, ExternalButton } from "@/components/ui";
import { whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="No encontramos esta página"
        lead="Puede que el enlace esté antiguo o que la dirección tenga un error. Desde aquí puedes volver a lo importante."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Volver al inicio
          </Button>
          <Button href="/servicios" variant="ghost">
            Ver servicios
          </Button>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <Container>
          <p className="mx-auto max-w-xl text-center text-lg leading-8 text-navy-700">
            Si buscabas agendar una hora, lo más rápido es escribirnos directamente.
          </p>
          <div className="mt-8 flex justify-center">
            <ExternalButton href={whatsappUrl()} variant="whatsapp">
              Agendar por WhatsApp
            </ExternalButton>
          </div>
        </Container>
      </section>
    </>
  );
}
