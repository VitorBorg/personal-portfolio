import react from "react";

import data from "../../../public/data/data.json";

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
    <>
      <Section>
        <SectionBase>
          <H2Title>
            <PText style={{ textAlign: "left" }}>Quem sou eu</PText>
            <Barra />
          </H2Title>
          <DivAbout>
            <div>
              <PText>{data.about.description[0]}</PText>
              <PText>{data.about.description[1]}</PText>
              <PText>{data.about.description[2]}</PText>
              <PText>Algumas tecnologias que eu usei recentemente:</PText>
              <Grid>
                <ul>
                  {data.about.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Grid>
            </div>
          </DivAbout>
        </SectionBase>
      </Section>
    </>
  );
}
