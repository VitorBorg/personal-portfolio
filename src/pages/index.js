import Header from "../components/Header_left/header";
import ProjectSection from "../components/projectSection/Intro";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import HeaderRight from "../components/Header_right/headerRight";
import Intro from "../components/projectSection/Intro";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Projects from "../components/projects/projects";
import Card from "../components/card/Card";

const Home = () => {
  return (
    <div style={{ padding: "0px 130px", width: "100%" }}>
      {/*<GlobalStyle />*/}
      <Header />
      <HeaderRight />
      <div id="intro" />
      <Intro />
      <div id="about" />
      <About />
      <div id="projects" />
      <Projects />
      <Contact />
      {/*Footer*/}
    </div>
  );
};

export default Home;
