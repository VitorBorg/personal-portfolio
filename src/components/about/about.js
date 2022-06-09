import react from "react";

import {
  Section,
  SectionBase,
  H2Title,
  DivAbout,
  Barra,
  PText,
  Grid,
} from "./aboutStyle";

export default function About() {
  return (
    <Section>
      <SectionBase>
        <H2Title>
          <PText style={{ textAlign: "left" }}>Quem sou eu</PText>
          <Barra />
        </H2Title>
        <DivAbout>
          <div>
            <PText>
              Olá, eu sou o Vítor e estou buscando iniciar na vida de
              desenvolvedor web front-end. Estou cursando Ciência da Computação
              na Universidade Federal de Pelotas, e tive algumas pequenas
              experiências práticas de web lá. Mas decidi me dedicar realmente
              faz pouco tempo.
            </PText>
            <PText>
              Apesar de não ter estagiado diretamente como desenvolvedor web,
              fiz um projeto que me introduziu no mundo do react. Mesmo com o
              curto prazo e a pouca experiência o sistema fora finalizado e
              atendeu a todas as exigências.
            </PText>
            <PText>
              Decidi sair então do estágio e hoje me dedico a aprender mais
              sobre web e buscar uma primeira vaga na área.
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
          <div>Three.js - MODEL</div>
        </DivAbout>
      </SectionBase>
    </Section>
  );
}
