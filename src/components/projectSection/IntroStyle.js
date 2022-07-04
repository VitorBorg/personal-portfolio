import styled from "styled-components";

export const SectionTitles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0vw 5vw 0vw 5vw;
  padding: 0px;
  list-style: none;
  list-style-type: none;
  height: clamp(65rem, 100vh, 130rem);

  @media (max-width: 800px) {
    margin: 0vw;
  }
`;

export const DivTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  align-items: flex-start;
  padding: 0px 0px 20px 0vw;
  list-style: none;
  list-style-type: none;
`;

export const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0px;
  list-style: none;
  list-style-type: none;
`;

export const H1Title = styled.h1`
  margin: 0px 0px 15px 0px;
  text-decoration: none;
  color: #a6d3bc;
  font-size: clamp(14px, 5vw, 16px);
`;

export const H2Title = styled.h2`
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
`;

export const H3Title = styled.h3`
  text-decoration: none;
  font-weight: 600;
  color: #565f70;
  font-size: clamp(30px, 7vw, 60px);
`;

export const PDescription = styled.p`
  text-decoration: none;
  margin: 10px 0px 0px 00px;
  max-width: 540px;
  color: #565f70;
  font-weight: 600;
  font-size: clamp(7px, 3vw, 15px);
  line-height: 20px;
`;
