import Reveal from "./Reveal";
import { services } from "../siteConfig";
import { iconMap } from "./icons";

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          SERVIÇOS
        </Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          O que a Pine Hub faz pela sua marca.
        </Reveal>
        <Reveal as="p" className="section-subtitle" delay={100}>
          Seis frentes, uma operação só — pensadas para trabalhar juntas, não
          em silos.
        </Reveal>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.name} className="service-card" delay={i * 60}>
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <p className="service-card__benefit">{s.benefit}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
