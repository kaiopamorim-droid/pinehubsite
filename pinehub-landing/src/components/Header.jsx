import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, whatsappHref, site } from "../siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__brand" aria-label="Pine Hub — início">
          <Logo variant="dark" withWordmark />
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__nav-actions">
            <a
              className="btn btn--primary btn--sm"
              href={site.photosGalleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Pine Hub Fotos
            </a>
            <a
              className="btn btn--primary btn--sm"
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--primary btn--sm"
            href={site.photosGalleryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pine Hub Fotos
          </a>
          <a
            className="btn btn--primary btn--sm"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
          <button
            className={`header__burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
