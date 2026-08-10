// Símbolo oficial "Pine Cut": triângulo sólido com faceta diagonal removida
// no canto inferior direito (ver Manual de Marca, seção 04 — Sistema de Marca).
export default function Logo({ variant = "light", withWordmark = false, className = "" }) {
  const symbolFill = variant === "light" ? "#F4F2EC" : "#10291F";
  const cutFill = variant === "light" ? "#10291F" : "#F4F2EC";
  const textFill = variant === "light" ? "#F4F2EC" : "#10291F";

  return (
    <span className={`logo ${className}`}>
      <svg
        className="logo__symbol"
        viewBox="0 0 120 120"
        width="28"
        height="28"
        role="img"
        aria-label="Pine Hub"
      >
        <path d="M60 8 L112 112 L8 112 Z" fill={symbolFill} />
        <path d="M112 112 L70 112 L112 70 Z" fill={cutFill} />
      </svg>
      {withWordmark && (
        <span className="logo__wordmark" style={{ color: textFill }}>
          PINE HUB
        </span>
      )}
    </span>
  );
}
