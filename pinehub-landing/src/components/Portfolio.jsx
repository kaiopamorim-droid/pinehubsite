import Reveal from "./Reveal";
import TrianglePattern from "./TrianglePattern";
import { portfolioProjects, site } from "../siteConfig";
import { iconMap } from "./icons";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          PORTFÓLIO
        </Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Projetos que já saíram do papel.
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Uma amostra do que já foi produzido para marcas reais.
        </Reveal>

        <div className="portfolio__grid">
          {portfolioProjects.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <Reveal key={p.name} delay={i * 70}>
                <div className="portfolio-card">
                  <div className="portfolio-card__media">
                    {p.video ? (
                      <video
                        className="portfolio-card__video"
                        src={p.video}
                        poster={p.videoPoster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${p.name} — vídeo`}
                      />
                    ) : p.images ? (
                      p.images.map((src, imgIndex) => {
                        const perSlide = 3;
                        const count = p.images.length;
                        return (
                          <img
                            key={src}
                            src={src}
                            alt={`${p.name} — foto ${imgIndex + 1}`}
                            className="portfolio-card__photo"
                            style={{
                              animationName: `portfolio-crossfade-${
                                [3, 5, 6].includes(count) ? count : 3
                              }`,
                              animationDuration: `${count * perSlide}s`,
                              animationDelay: `${imgIndex * perSlide}s`,
                              zIndex: count - imgIndex,
                            }}
                          />
                        );
                      })
                    ) : (
                      <>
                        <TrianglePattern opacity={0.4} />
                        <span className="portfolio-card__symbol">
                          <Icon width={30} height={30} />
                        </span>
                      </>
                    )}
                  </div>
                  <div className="portfolio-card__foot">
                    <div className="portfolio-card__row">
                      <span>{p.name}</span>
                      <span className="portfolio-card__tag">{p.tag}</span>
                    </div>
                    <p className="portfolio-card__desc">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="portfolio__more" delay={portfolioProjects.length * 70}>
          <a
            className="btn btn--ghost"
            href={site.photosGalleryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais fotos →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
