import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";
import Particles from './components/Particles';


function App() {

  const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto ;
  scrollbar-width: none;
  color: white;
  /* background: url('./img/bg.jpg') no-repeat ; */
  background-size: 100%;
  background-color: #0f0f0f;

  `
  return (
    
    <Container>
      <Particles id="tsparticles" />
      <Hero />
      <About />
      <Projects />
      <Contact />


    </Container>
  );
}

export default App;
