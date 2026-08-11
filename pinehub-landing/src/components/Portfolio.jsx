import Reveal from "./Reveal";
import TrianglePattern from "./TrianglePattern";
import { portfolioProjects } from "../siteConfig";
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
                    {p.images ? (
                      p.images.map((src, imgIndex) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${p.name} — foto ${imgIndex + 1}`}
                          className="portfolio-card__photo"
                          style={{
                            animationDelay: `${imgIndex * 3}s`,
                            zIndex: p.images.length - imgIndex,
                          }}
                        />
                      ))
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
      </div>
    </section>
  );
}
