// ---------------------------------------------------------------------------
// Configuração central da Pine Hub.
// Os valores marcados como PLACEHOLDER precisam ser substituídos por dados
// reais antes de publicar o site (número de WhatsApp, e-mail, redes sociais).
// ---------------------------------------------------------------------------

export const site = {
  name: "Pine Hub",
  tagline: "Estratégia enraizada. Crescimento sem limites.",
  city: "Recife — PE, Brasil",

  whatsappNumber: "5581985831501",
  whatsappMessage:
    "Olá! Vim pelo site da Pine Hub e quero entender como vocês podem ajudar minha marca a crescer.",

  email: "pinehubmkt@gmail.com",
  instagram: "@pinehub_",

  photosGalleryUrl: "https://pine-hub-fotos-git-main-pinehub.vercel.app/",
};

export const whatsappHref = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

// Audiovisual (foto e vídeo) é o foco principal da operação agora —
// por isso lidera a lista de serviços.
export const services = [
  {
    icon: "video",
    name: "Audiovisual & Vídeo",
    description:
      "Produção de vídeo com direção editorial, contraste alto e estética premium.",
    benefit: "Conteúdo que retém atenção e comunica autoridade.",
  },
  {
    icon: "camera",
    name: "Fotografia",
    description:
      "Direção de imagem com luz natural, composição assimétrica e identidade própria.",
    benefit: "Um acervo visual que não parece banco de imagens.",
  },
  {
    icon: "target",
    name: "Marketing & Estratégia",
    description:
      "Diagnóstico, posicionamento e plano orientado por dados — decisões que sustentam o crescimento.",
    benefit: "Menos achismo, mais direção clara.",
  },
  {
    icon: "triangle",
    name: "Branding",
    description:
      "Identidade visual e verbal com nível internacional, construída para durar e escalar.",
    benefit: "Uma marca que inspira confiança à primeira vista.",
  },
  {
    icon: "layout",
    name: "Landing Pages",
    description:
      "Páginas de conversão sob medida, alinhadas à identidade da marca e construídas para vender.",
    benefit: "Cada clique levando a uma decisão, não a uma dúvida.",
  },
  {
    icon: "nodes",
    name: "Automação com IA",
    description:
      "Fluxos inteligentes que eliminam trabalho manual e aceleram a operação de marketing.",
    benefit: "Sua equipe focada em estratégia, não em tarefas repetitivas.",
  },
];

export const differentiators = [
  {
    title: "Estratégia antes de execução",
    description:
      "Toda ação nasce de um diagnóstico real — decisões orientadas por dados, não por tendência.",
  },
  {
    title: "Tecnologia e IA no centro",
    description:
      "Automação aplicada à operação para ganhar velocidade sem perder qualidade.",
  },
  {
    title: "Foto e vídeo como carro-chefe",
    description:
      "Produção audiovisual premium é o nosso maior foco hoje — estética de nível internacional em cada entrega.",
  },
  {
    title: "Performance mensurável",
    description:
      "Resultado é reportado em números. Se não gera venda, é revisado.",
  },
];

export const process = [
  {
    step: "01",
    title: "Primeiro contato",
    description:
      "Entendemos seu negócio, objetivos e o momento atual da marca.",
  },
  {
    step: "02",
    title: "Diagnóstico",
    description:
      "Mapeamos dados, concorrência e oportunidades antes de propor qualquer ação.",
  },
  {
    step: "03",
    title: "Estratégia",
    description:
      "Definimos posicionamento, canais prioritários e metas mensuráveis.",
  },
  {
    step: "04",
    title: "Execução",
    description:
      "Marketing, branding, landing pages, audiovisual e automação trabalhando juntos.",
  },
  {
    step: "05",
    title: "Entrega & otimização",
    description:
      "Reportamos resultado real e ajustamos a rota com base em dados.",
  },
];

// Projetos reais (fonte original: https://pinehub.myportfolio.com/work).
// Exibidos direto na landing page, sem link externo — cada card usa um
// símbolo vetorial da marca em vez de foto, mais leve e sempre nítido.
export const portfolioProjects = [
  {
    name: "Manu's Smash Burguer",
    tag: "Audiovisual",
    icon: "video",
    description: "Identidade visual e conteúdo audiovisual para o dia a dia da marca.",
    images: [
      "/portfolio/manus-1.jpg",
      "/portfolio/manus-2.jpg",
      "/portfolio/manus-3.jpg",
    ],
  },
  {
    name: "Concept Carnes",
    tag: "Branding",
    icon: "triangle",
    description: "Identidade visual construída para transmitir solidez e qualidade.",
    images: [
      "/portfolio/concept-1.jpg",
      "/portfolio/concept-2.png",
      "/portfolio/concept-3.png",
      "/portfolio/concept-4.png",
      "/portfolio/concept-5.png",
    ],
  },
  {
    name: "Dr. Rafael Durand",
    tag: "Audiovisual",
    icon: "video",
    description: "Identidade visual profissional para consolidar a marca pessoal.",
    video: "/portfolio/rafael-1.mp4",
    videoPoster: "/portfolio/rafael-poster.jpg",
  },
  {
    name: "Team Bola Pro Alto",
    tag: "Fotografia",
    icon: "camera",
    description: "Cobertura fotográfica esportiva para captar a energia dos treinos na praia.",
    images: [
      "/portfolio/teambola-1.jpg",
      "/portfolio/teambola-2.jpg",
      "/portfolio/teambola-3.jpg",
      "/portfolio/teambola-4.jpg",
      "/portfolio/teambola-5.jpg",
      "/portfolio/teambola-6.jpg",
    ],
  },
];

export const faq = [
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer:
      "Depende da frente: uma landing page nova costuma sair em poucas semanas; branding e conteúdo constroem resultado composto ao longo de 2 a 3 meses. No diagnóstico inicial definimos metas e prazos realistas antes de começar.",
  },
  {
    question: "Qual o investimento mínimo para trabalhar com a Pine Hub?",
    answer:
      "Não temos um pacote fechado — o escopo é definido depois do diagnóstico, de acordo com as frentes que fazem sentido para o seu momento (marca, landing page, audiovisual ou tudo junto).",
  },
  {
    question: "Quais ferramentas e canais vocês usam?",
    answer:
      "Automação com IA para fluxos de marketing, desenvolvimento de landing pages sob medida, além de produção própria de fotografia e vídeo — tudo integrado numa única operação.",
  },
  {
    question: "Atendem empresas fora de Recife/PE?",
    answer:
      "Sim. A Pine Hub nasceu em Recife, mas atende clientes em todo o Brasil de forma remota, com a mesma proximidade de um time local.",
  },
];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];
