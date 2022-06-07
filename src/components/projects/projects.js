import react from "react";

import {
  SectionBase,
  H2Title,
  DivAbout,
  Barra,
  PText,
  Grid,
} from "./projectsStyle";

export default function Projects() {
  return (
    <SectionBase>
      <H2Title>
        <PText style={{ textAlign: "left" }}>Projetos</PText>
        <Barra />
      </H2Title>
      <DivAbout>
        <PText>
          Olá, eu sou o Vítor e estou buscando iniciar na vida de desenvolvedor
          web front-end. Eu ainda estou na universidade (UFPEL) e tive algumas
          experiências práticas de web na faculdade, seja fazendo um pequeno
          projeto até entendo melhor sobre banco de dados. Mas decidi me dedicar
          realmente faz pouco tempo.
        </PText>
      </DivAbout>
    </SectionBase>
  );
}
