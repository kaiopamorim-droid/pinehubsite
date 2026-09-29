import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentiators from "./components/Differentiators";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import CtaStrip from "./components/CtaStrip";
import StickyCta from "./components/StickyCta";

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <CtaStrip text="Vamos colocar seu projeto de foto e vídeo em pé?" />
        <Differentiators />
        <Portfolio />
        <CtaStrip />
        <Process />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <Analytics />
    </>
  );
}

export default App;
