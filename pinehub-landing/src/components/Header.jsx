import { useEffect, useState } from "react";
import Logo from "./Logo";
import { whatsappHref, trackWhatsappConversion } from "../siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

        <a
          className="btn btn--primary btn--sm"
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsappConversion}
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
