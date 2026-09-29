import { whatsappHref, trackWhatsappConversion } from "../siteConfig";

// Barra fixa no rodapé (só no celular) para o contato estar sempre a um toque.
export default function StickyCta() {
  return (
    <div className="sticky-cta">
      <a
        className="btn btn--primary btn--lg"
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsappConversion}
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
