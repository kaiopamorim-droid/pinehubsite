// Padrão gráfico modular nascido do corte do símbolo — Manual de Marca, seção 07.
// Grade de triângulos em três tons de verde, usada como textura de fundo.
// Com `animate`, os triângulos pulsam em loop suave (efeito "vídeo" leve,
// 100% CSS/SVG — sem arquivo de vídeo real, respeita prefers-reduced-motion).
export default function TrianglePattern({ className = "", opacity = 1, animate = false }) {
  const tones = ["#1F4D3A", "#3E8368", "#10291F"];
  const cells = Array.from({ length: 15 });

  return (
    <svg
      className={`triangle-pattern ${animate ? "triangle-pattern--animated" : ""} ${className}`}
      viewBox="0 0 300 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      {cells.map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const size = 60;
        const x = col * size;
        const y = row * size;
        const up = (col + row) % 2 === 0;
        const tone = tones[(col + row) % tones.length];
        const points = up
          ? `${x},${y + size} ${x + size},${y + size} ${x + size / 2},${y}`
          : `${x},${y} ${x + size},${y} ${x + size / 2},${y + size}`;
        return (
          <polygon
            key={i}
            points={points}
            fill={tone}
            className={`triangle-pattern__cell ${up ? "triangle-pattern__cell--up" : ""}`}
            style={{ animationDelay: `${(i % 7) * 0.35}s` }}
          />
        );
      })}
    </svg>
  );
}
