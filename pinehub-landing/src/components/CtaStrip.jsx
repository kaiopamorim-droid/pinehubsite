import Reveal from "./Reveal";
import { whatsappHref, trackWhatsappConversion } from "../siteConfig";

export default function CtaStrip({ text = "Quer isso para a sua marca?" }) {
  return (
    <div className="cta-strip">
      <div className="container cta-strip__inner">
        <Reveal as="p">{text}</Reveal>
        <Reveal delay={80}>
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
    </div>
  );
}
