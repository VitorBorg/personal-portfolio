import Header from "../components/Header_left/header";
import ProjectSection from "../components/projectSection/Intro";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import HeaderRight from "../components/Header_right/headerRight";
import Intro from "../components/projectSection/Intro";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Projects from "../components/projects/projects";

const Home = () => {
  return (
    <div style={{ padding: "0px 130px", width: "100%" }}>
      {/*<GlobalStyle />*/}
      <Header />
      <HeaderRight />
      <Intro />
      <About />
      <Projects />
      <Contact />
      {/*Footer*/}
    </div>
  );
};

export default Home;
