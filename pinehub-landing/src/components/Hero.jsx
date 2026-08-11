import Logo from "./Logo";
import TrianglePattern from "./TrianglePattern";
import Reveal from "./Reveal";
import { site, whatsappHref } from "../siteConfig";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <TrianglePattern className="hero__pattern" opacity={0.5} />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <Reveal className="hero__meta" as="div">
          <span>{site.city.toUpperCase()}</span>
        </Reveal>

        <Reveal delay={80}>
          <Logo variant="light" className="hero__logo" />
        </Reveal>

        <Reveal as="h1" className="hero__headline" delay={140}>
          Fotografia, vídeo e conteúdo em uma só operação.
        </Reveal>

        <Reveal as="p" className="hero__subheadline" delay={220}>
          {site.tagline} A Pine Hub tem na produção audiovisual o seu maior
          foco — foto e vídeo com direção editorial e estética premium,
          somados a branding, landing pages e automação com IA para marcas
          que querem crescer com raízes sólidas — de Recife para o Brasil.
        </Reveal>

        <Reveal className="hero__ctas" delay={300}>
          <a
            className="btn btn--primary btn--lg"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Pine Hub →
          </a>
          <a className="btn btn--ghost btn--lg" href="#servicos">
            Ver serviços
          </a>
        </Reveal>

        <Reveal as="p" className="hero__services" delay={360}>
          Audiovisual · Fotografia · Produção de Vídeo · Marketing ·
          Branding · Landing Pages · Automação com IA
        </Reveal>
      </div>

      <a href="#sobre" className="hero__scroll-cue" aria-label="Rolar para saber mais">
        <span className="hero__scroll-cue-arrow" aria-hidden="true" />
        <span className="hero__scroll-cue-label">Role para saber mais</span>
      </a>
    </section>
  );
}
