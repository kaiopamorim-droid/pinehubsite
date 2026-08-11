// Padrão gráfico modular nascido do corte do símbolo — Manual de Marca, seção 07.
// Campo de triângulos (todos apontando para cima) em três tons de verde,
// com tamanhos variados para dar profundidade, usado como textura de fundo.
// Com `animate`, os triângulos pulsam em loop suave (efeito "vídeo" leve,
// 100% CSS/SVG — sem arquivo de vídeo real, respeita prefers-reduced-motion).
// Layout em grade "tijolo" (linhas alternadas deslocadas), totalmente
// contido dentro do viewBox (nenhum triângulo cortado na borda) e com
// espaçamento generoso entre os centros para nenhum ficar encaixado
// dentro da silhueta de outro maior.
const triangles = [
  // linha 0
  { x: 16, y: 16, size: 28 },
  { x: 68, y: 8, size: 44 },
  { x: 138, y: 18, size: 24 },
  { x: 191, y: 11, size: 38 },
  { x: 255, y: 15, size: 30 },
  // linha 1 (deslocada)
  { x: 29, y: 74, size: 32 },
  { x: 95, y: 80, size: 20 },
  { x: 144, y: 69, size: 42 },
  { x: 212, y: 77, size: 26 },
  { x: 275, y: 80, size: 20 },
  // linha 2
  { x: 18, y: 138, size: 24 },
  { x: 72, y: 132, size: 36 },
  { x: 140, y: 140, size: 20 },
  { x: 188, y: 128, size: 44 },
  { x: 256, y: 136, size: 28 },
  // acentos pequenos, preenchendo respiros
  { x: 112, y: 52, size: 16 },
  { x: 231, y: 111, size: 18 },
  { x: 53, y: 113, size: 14 },
  { x: 172, y: 22, size: 16 },
];

export default function TrianglePattern({ className = "", opacity = 1, animate = false }) {
  const tones = ["#1F4D3A", "#3E8368", "#10291F"];

  return (
    <svg
      className={`triangle-pattern ${animate ? "triangle-pattern--animated" : ""} ${className}`}
      viewBox="0 0 300 180"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity }}
    >
      {triangles.map((t, i) => {
        const tone = tones[i % tones.length];
        const points = `${t.x},${t.y + t.size} ${t.x + t.size},${t.y + t.size} ${t.x + t.size / 2},${t.y}`;
        return (
          <polygon
            key={i}
            points={points}
            fill={tone}
            className="triangle-pattern__cell triangle-pattern__cell--up"
            style={{ animationDelay: `${(i % 7) * 0.35}s` }}
          />
        );
      })}
    </svg>
  );
}
