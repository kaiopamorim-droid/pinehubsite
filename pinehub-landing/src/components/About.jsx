import Reveal from "./Reveal";

const attributes = [
  { n: "01", label: "Crescimento", desc: "Trajetória ascendente, escala nacional e internacional." },
  { n: "02", label: "Estratégia", desc: "Decisões orientadas por dados e planejamento." },
  { n: "03", label: "Tecnologia", desc: "Automação e IA no centro da operação." },
  { n: "04", label: "Confiança", desc: "Solidez de agência que entrega compromisso." },
  { n: "05", label: "Performance", desc: "Resultado mensurável, foco em vendas do cliente." },
  { n: "06", label: "Inovação", desc: "Ideias e formatos à frente do mercado." },
  { n: "07", label: "Sofisticação", desc: "Estética premium, nível internacional." },
];

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          SOBRE A PINE HUB
        </Reveal>
        <Reveal as="h2" className="section-title" delay={60}>
          Uma agência construída para crescer com raízes.
        </Reveal>
        <Reveal as="p" className="about__lead" delay={120}>
          A Pine Hub nasceu em Recife (PE) para resolver um problema comum a
          marcas em crescimento: a falta de uma produção audiovisual própria,
          com direção editorial e estética premium, que sustente uma
          comunicação de nível internacional. Por isso a fotografia e o vídeo
          são o nosso maior foco hoje, somados a marketing, branding, landing
          pages e automação com IA numa única operação. Existimos para marcas
          que querem parar de parecer pequenas na tela e crescer com raízes
          sólidas, de Recife para o Brasil.
        </Reveal>

        <div className="about__grid">
          {attributes.map((a, i) => (
            <Reveal
              key={a.n}
              className={`about__card ${i === attributes.length - 1 ? "about__card--dark" : ""}`}
              delay={i * 40}
            >
              <span className="about__index">{a.n}</span>
              <h3>{a.label}</h3>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
