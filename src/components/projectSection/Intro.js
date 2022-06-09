import react from "react";
import {
  SectionTitles,
  DivTitles,
  H1Title,
  H2Title,
  H3Title,
  DivTitleGroup,
  PDescription,
} from "./IntroStyle";

export default function Intro() {
  return (
    <SectionTitles>
      <div style={{ margin: "20vh 0px" }}>
        <DivTitleGroup>
          <DivTitles>
            <H1Title>Olá, meu nome é</H1Title>
          </DivTitles>
          <DivTitles>
            <H2Title>Vítor Borges.</H2Title>
          </DivTitles>
          <DivTitles>
            <H3Title>Eu sou um desenvolvedor júnior.</H3Title>
          </DivTitles>
        </DivTitleGroup>
        <PDescription>
          Estou iniciando como desenvolvedor front end e busco minha primeira
          experiência real na área.
        </PDescription>
      </div>
    </SectionTitles>
  );
}
