import styled from "styled-components";

export const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  margin: 80px 0px 0px 0px;
  padding: 0px;
  width: 50%;
  min-width: 350px;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 80;
  box-shadow: 5px 8px rgba(0, 0, 0, 0.08);

  :hover {
    transform: scale(1.1);
  }
`;

export const DivImage = styled.div`
  max-width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const DivDescription = styled.div`
  padding: 40px 40px 80px 80px;
  list-style: none;
  list-style-type: none;

  h3 {
    margin: 8% 0;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const DivDetails = styled.div`
  list-style: none;
  list-style-type: none;

  p {
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 10px;
  }
`;

export const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0px;
  list-style: none;
  list-style-type: none;
`;

export const SpanCard = styled.span`
  color: #a6d3bc;
  transition: color 200ms;
`;

export const SpanCardLine = styled.span`
  position: relative;
  display: inline-block;
  background-color: #a6d3bc;
  height: 1px;
  width: 40px;
  top: -5px;
  margin: 0 20px;
  transition: 400ms;
`;
