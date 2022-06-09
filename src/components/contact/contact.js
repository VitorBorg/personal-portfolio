import react from "react";

import Git from "../../public/git/git";
import Linkedin from "../../public/linkedin/linkedin";
import Instagram from "../../public/instagram/instagram";

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
