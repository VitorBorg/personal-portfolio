import react from "react";
import Card from "../card/Card";

//import logo from "../../public/sistema_portaria.png";

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
        <Card
          link="https://i.ibb.co/hXnZ44c/Captura-de-Tela-14.png"
          number="1"
          name="Portaria"
          function="Sistema de controle de entrada e saída da portaria"
          description="Desenvolvi tanto o back end quanto o front end. Sistema feito completamente por mim!"
          tech="React js, node js, next js"
          git="https://github.com/VitorBorg/portaria-capao"
          site=""
        />
      </DivAbout>
    </SectionBase>
  );
}
