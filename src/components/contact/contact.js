import react from "react";

import Git from "../../images/git/git";
import Linkedin from "../../images/linkedin/linkedin";
import Instagram from "../../images/instagram/instagram";

import { SectionBase } from "./contactStyle";

export default function Contact() {
  return (
    <SectionBase>
      <a href="https://github.com/VitorBorg">
        <Git />
      </a>
      <div />
      <a href="https://www.linkedin.com/in/vitorsborg/">
        <Linkedin />
      </a>
      <div />
      <a href="https://www.instagram.com/vitorsborg/">
        <Instagram />
      </a>
    </SectionBase>
  );
}
