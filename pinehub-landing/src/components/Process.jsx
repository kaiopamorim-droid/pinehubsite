import Reveal from "./Reveal";
import { process } from "../siteConfig";

export default function Process() {
  return (
    <section id="processo" className="process">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--light">
          PROCESSO
        </Reveal>
        <Reveal as="h2" className="section-title section-title--light" delay={60}>
          Como funciona o trabalho com a Pine Hub.
        </Reveal>

        <ol className="process__list">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} className="process__item" delay={i * 70}>
              <span className="process__step">{p.step}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
