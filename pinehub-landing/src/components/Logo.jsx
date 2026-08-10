// Símbolo oficial da marca: pinheiro estilizado em 3 galhos (chevrons)
// empilhados sobre um tronco — variante "light" para uso sobre fundos
// escuros (Pine 900) e variante "dark" para uso sobre fundos claros
// (Off-White), mantendo sempre os tokens de cor da identidade visual.
const palettes = {
  light: {
    top: "#3E8368", // Pine 500
    mid: "#16414A", // Azul Petróleo
    bottom: "#F4F2EC", // Off-White
    trunk: "#A8ACA6", // Cinza
    text: "#F4F2EC",
  },
  dark: {
    top: "#8AB39C", // Pine 300 (tinta clara)
    mid: "#3E8368", // Pine 500
    bottom: "#10291F", // Pine 900
    trunk: "#A8ACA6", // Cinza
    text: "#10291F",
  },
};

export default function Logo({ variant = "light", withWordmark = false, className = "" }) {
  const c = palettes[variant] ?? palettes.light;

  return (
    <span className={`logo ${className}`}>
      <svg
        className="logo__symbol"
        viewBox="0 0 120 150"
        width="28"
        height="35"
        role="img"
        aria-label="Pine Hub"
      >
        <path
          d="M42 34 L60 14 L78 34"
          fill="none"
          stroke={c.top}
          strokeWidth="13"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M32 68 L60 42 L88 68"
          fill="none"
          stroke={c.mid}
          strokeWidth="13"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M18 108 L60 74 L102 108"
          fill="none"
          stroke={c.bottom}
          strokeWidth="13"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect x="54" y="118" width="12" height="28" fill={c.trunk} />
      </svg>
      {withWordmark && (
        <span className="logo__wordmark" style={{ color: c.text }}>
          PINE HUB
        </span>
      )}
    </span>
  );
}
