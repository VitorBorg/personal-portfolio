import react from "react";

import {
  SectionBase,
  H2Title,
  DivAbout,
  Barra,
  PText,
  Grid,
} from "./contactStyle";

export default function Contact() {
  return (
    <SectionBase>
      <H2Title>
        <PText style={{ textAlign: "left" }}>Contato</PText>
      </H2Title>
      <DivAbout>
        <div>
          <PText>
            Se tiver interesse você pode me encontrar nas minhas redes sociais.
          </PText>
          <Grid>
            <li>Lnk</li>
            <li>Inst</li>
            <li>Git</li>
          </Grid>
        </div>
      </DivAbout>
    </SectionBase>
  );
}
