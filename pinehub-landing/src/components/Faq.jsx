import Reveal from "./Reveal";
import { faq } from "../siteConfig";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          PERGUNTAS FREQUENTES
        </Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Antes de fechar, tire suas dúvidas.
        </Reveal>

        <div className="faq__list">
          {faq.map((item, i) => (
            <Reveal as="div" key={item.question} delay={i * 60}>
              <details className="faq__item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
