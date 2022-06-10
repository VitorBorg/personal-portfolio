import react from "react";
import Card from "../card/Card";

//import logo from "../../public/sistema_portaria.png";
import data from "../../../public/data/data.json";

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
        <ul>
          {data.projects.map((project, index) => (
            <li key={project}>
              <Card
                link={project.thumb}
                number={index + 1}
                name={project.name}
                function={project.title}
                description={project.description}
                tech={project.technologies}
                git={project.link}
                site=""
              />
            </li>
          ))}
        </ul>
      </DivAbout>
    </SectionBase>
  );
}
