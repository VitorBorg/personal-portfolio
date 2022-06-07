import react from "react";

import {
  SectionBase,
  H2Title,
  DivAbout,
  Barra,
  PText,
  Grid,
} from "./aboutStyle";

export default function About() {
  return (
    <SectionBase>
      <H2Title>
        <PText style={{ textAlign: "left" }}>Quem sou eu</PText>
        <Barra />
      </H2Title>
      <DivAbout>
        <div>
          <PText>
            Olá, eu sou o Vítor e estou buscando iniciar na vida de
            desenvolvedor web front-end. Eu ainda estou na universidade (UFPEL)
            e tive algumas experiências práticas de web na faculdade, seja
            fazendo um pequeno projeto até entendo melhor sobre banco de dados.
            Mas decidi me dedicar realmente faz pouco tempo.
          </PText>
          <PText>
            Apesar de não ter estagiado como desenvolvedor web, fiz um projeto
            que me introduziu realmente no mundo do react. E, mesmo diante de um
            cenário que eu conhecia bem pouco, tudo que era esperado fora feito
            e estão o utilizando.
          </PText>
          <PText>
            Decidi sair então do estágio e hoje me dedico a aprender mais sobre
            web e buscar uma primeira vaga na área.
          </PText>
          <PText>Algumas tecnologias que eu usei recentemente:</PText>
          <Grid>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>React js</li>
            <li>Next js</li>
            <li>Styled-Components</li>
            <li>Three js</li>
          </Grid>
        </div>
        <div>foto</div>
      </DivAbout>
    </SectionBase>
  );
}
