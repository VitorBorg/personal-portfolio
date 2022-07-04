import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0);

  position: fixed;
  left: auto;
  right: 4vw;
  width: auto;
  top: 1.3vh;
  z-index: 10;

  display: block;

  @media (max-width: 800px) {
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
