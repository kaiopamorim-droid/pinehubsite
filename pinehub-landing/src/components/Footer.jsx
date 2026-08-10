import Logo from "./Logo";
import { site, navLinks, whatsappHref } from "../siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="light" withWordmark />
          <p>{site.city}</p>
        </div>

        <nav className="footer__nav" aria-label="Links do rodapé">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <p>
            <span>WhatsApp</span>{" "}
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              +{site.whatsappNumber}
            </a>
          </p>
          <p>
            <span>E-mail</span>{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <span>Instagram</span>{" "}
            <a
              href={`https://instagram.com/${site.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.instagram}
            </a>
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Pine Hub. Todos os direitos reservados.</p>
        <p>Cresça com raízes.</p>
      </div>
    </footer>
  );
}
