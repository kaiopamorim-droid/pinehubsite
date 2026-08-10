import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentiators from "./components/Differentiators";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Process from "./components/Process";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Differentiators />
        <Portfolio />
        <Faq />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
