# Pine Hub — Landing Page

Landing page em React + Vite construída a partir do Manual de Marca da Pine
Hub (`Identidade_visual_Pine_Hub.pptx`): paleta Pine 900/700/500, tipografia
Space Grotesk + IBM Plex Sans, símbolo "Pine Cut" e padrão gráfico
triangular.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Antes de publicar — troque os placeholders

Toda informação real que ainda não foi fornecida está marcada com
colchetes ou centralizada em `src/siteConfig.js`:

- `src/siteConfig.js` → número de WhatsApp (`whatsappNumber`), e-mail,
  Instagram, LinkedIn.
- `src/components/About.jsx` → `[DESCRIÇÃO DA EMPRESA]`.
- `src/components/Portfolio.jsx` / `siteConfig.js` (`portfolioPlaceholders`)
  → substitua os blocos de padrão gráfico pelas imagens reais dos projetos.
- `src/components/SocialProof.jsx` / `siteConfig.js`
  (`testimonialPlaceholders`) → depoimentos reais de clientes.
- `src/components/Footer.jsx` → `[WHATSAPP]` no rodapé.

## Estrutura

```
src/
  components/   Header, Hero, About, Services, Differentiators,
                Portfolio, SocialProof, Process, FinalCta, Footer,
                Logo, icons, TrianglePattern, Reveal
  hooks/        useReveal (animação de entrada ao rolar a página)
  siteConfig.js Conteúdo, serviços, processo e dados de contato
  index.css     Design tokens e estilos (paleta, tipografia, componentes)
```
