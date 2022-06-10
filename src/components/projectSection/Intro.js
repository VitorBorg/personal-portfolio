import react from "react";

import data from "../../../public/data/data.json";

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
            <H2Title>{data.presentation.name}.</H2Title>
          </DivTitles>
          <DivTitles>
            <H3Title>{data.presentation.subtitle}</H3Title>
          </DivTitles>
        </DivTitleGroup>
        <PDescription>{data.presentation.description}</PDescription>
      </div>
    </SectionTitles>
  );
}
