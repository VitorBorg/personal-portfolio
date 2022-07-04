import styled from "styled-components";

export const MainElement = styled.main``;

export const DivPadding = styled.section`
  padding: 0vw 9.3vw;
  width: 100;

  @media (max-width: 1000px) {
    padding: 0vw 15vw;
  }

  @media (max-width: 800px) {
    padding: 0vw 3vw;
  }

  display: flex;
  flex-direction: column;
  display: block;
`;
