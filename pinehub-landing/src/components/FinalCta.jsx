import Reveal from "./Reveal";
import { whatsappHref, trackWhatsappConversion } from "../siteConfig";

export default function FinalCta() {
  return (
    <section id="contato" className="final-cta">
      <div className="container final-cta__inner">
        <Reveal as="h2">Vamos transformar sua marca em resultado?</Reveal>
        <Reveal as="p" delay={80}>
          Fale agora com a Pine Hub e receba um diagnóstico inicial sobre
          onde sua marca pode crescer mais rápido.
        </Reveal>
        <Reveal delay={140}>
          <a
            className="btn btn--primary btn--lg"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsappConversion}
          >
            Falar com a Pine Hub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
