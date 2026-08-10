// Ícones monolinha, geométricos, mesmo raio de esquina — Manual de Marca, seção 08.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconTarget(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTriangle(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <path d="M16 6 L27 26 H5 Z" />
    </svg>
  );
}

export function IconTrending(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <path d="M6 22 L14 14 L19 19 L27 9" />
      <path d="M20 9 H27 V16" />
    </svg>
  );
}

export function IconNodes(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <circle cx="16" cy="7" r="2.4" />
      <circle cx="7" cy="24" r="2.4" />
      <circle cx="25" cy="24" r="2.4" />
      <path d="M16 9.4 L16 17 M16 17 L8.6 22.5 M16 17 L23.4 22.5" />
    </svg>
  );
}

export function IconVideo(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <rect x="5" y="9" width="16" height="14" rx="2" />
      <path d="M21 14 L27 10.5 V21.5 L21 18" />
    </svg>
  );
}

export function IconCamera(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <rect x="4" y="10" width="24" height="16" rx="2.5" />
      <circle cx="16" cy="18" r="5" />
      <path d="M12 10 L14 7 H18 L20 10" />
    </svg>
  );
}

export function IconLayout(props) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" {...common} {...props}>
      <rect x="4" y="6" width="24" height="20" rx="2" />
      <path d="M4 12 H28" />
      <path d="M10 17 H22 M10 21 H18" />
    </svg>
  );
}

export const iconMap = {
  target: IconTarget,
  triangle: IconTriangle,
  trending: IconTrending,
  nodes: IconNodes,
  video: IconVideo,
  camera: IconCamera,
  layout: IconLayout,
};
