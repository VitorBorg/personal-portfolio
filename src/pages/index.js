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
import HeaderMobile from "../components/headerMobile/headerMobile";

import { DivPadding } from "./indexStyle";

const Home = () => {
  return (
    <DivPadding>
      {/*<GlobalStyle />*/}
      <HeaderMobile />
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
    </DivPadding>
  );
};

export default Home;
