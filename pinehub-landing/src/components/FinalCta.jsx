import Reveal from "./Reveal";
import TrianglePattern from "./TrianglePattern";
import { whatsappHref } from "../siteConfig";

export default function FinalCta() {
  return (
    <section id="contato" className="final-cta">
      <TrianglePattern className="final-cta__pattern" opacity={0.35} />
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
          >
            Falar com a Pine Hub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
