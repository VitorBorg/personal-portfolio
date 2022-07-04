import styled from "styled-components";

export const NavStyle = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 9vh;
  position: fixed;
  padding: 0vw;
  #right: 4vw;
  width: 100%;
  #top: 1.3vh;
  z-index: 10;

  #display: block;

  * {
    margin: 4px 8px 0vh 0vw;
  }

  @media (max-width: 800px) {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.85);
  }
`;

export const ButtonMobile = styled.button`
  display: none;

  background: none;
  border: none;
  padding: 0;
  outline: inherit;

  @media (max-width: 800px) {
    display: block;
  }
`;
