import styled from "styled-components";

export const SectionBase = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px;
  margin: 100px 0 30px 0;
  box-sizing: border-box;
  height: 90px;
  border-bottom: 1px solid rgba(166, 182, 211, 0.01);
  border-top: 1px solid rgba(166, 182, 211, 0.01);

  div {
    height: 40px;
    width: 1px;
    background-color: rgba(166, 182, 211, 0.1);
  }
`;
