import Reveal from "./Reveal";
import { differentiators } from "../siteConfig";

export default function Differentiators() {
  return (
    <section id="diferenciais" className="differentiators">
      <div className="container">
        <div className="differentiators__head">
          <Reveal as="p" className="eyebrow eyebrow--light">
            DIFERENCIAIS
          </Reveal>
          <Reveal as="h2" className="section-title section-title--light" delay={60}>
            Por que escolher a Pine Hub.
          </Reveal>
        </div>

        <div className="differentiators__grid">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} className="differentiator" delay={i * 70}>
              <span className="differentiator__mark" aria-hidden="true" />
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
