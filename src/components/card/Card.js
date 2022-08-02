import react from "react";

import Git from "../../images/git/git";
import {
  SectionCard,
  DivDescription,
  DivImage,
  SpanCard,
  SpanCardLine,
  DivDetails,
} from "./CardStyle";

export default function Card(props) {
  return (
    <SectionCard>
      <DivImage>
        <img alt="" src={props.link} />
      </DivImage>
      <DivDescription>
        <div>
          <SpanCard>{props.number}</SpanCard>
          <SpanCardLine />
          <SpanCard>{props.name}</SpanCard>
        </div>
        <p>{props.tech}</p>
        <h3>{props.function}</h3>

        <DivDetails>
          <p>{props.description}</p>

          {props.git !== "" ? (
            <a href={props.git}>
              <Git />
            </a>
          ) : (
            <div></div>
          )}
          {
            //<p>{props.site}</p>
          }
        </DivDetails>
      </DivDescription>
    </SectionCard>
  );
}
