import styled from "styled-components";

export const NavStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6rem;
  position: fixed;
  padding: 0vw;
  #right: 4vw;
  width: 100%;
  #top: 1.3vh;
  z-index: 10;
  gap: 25vw;

  #display: block;

  * {
    #margin: 4px 8px 0vh 0vw;
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
  z-index: 15;

  @media (max-width: 800px) {
    display: block;
    margin-right: 2rem;
  }

  :hover {
    transform: scale(1.2, 1.2);
  }
`;

export const ButtonMobileClose = styled.button`
  display: none;

  background: none;
  border: none;
  padding: 0;
  outline: inherit;
  z-index: 15;

  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }

  :hover {
    transform: scale(1.2, 1.2);
  }
`;

export const MenuAside = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: min(75vw, 400px);
  z-index: 10;

  background-color: #112240;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0vw;
  gap: 5vh;

  div {
  }

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 50px 10px 30px -10px rgba(10, 25, 47, 0.85);
`;

export const MenuItem = styled.li`
  margin: 0px;
  padding: 0px;
  padding-top: 2rem;
  list-style: none;

  :hover {
    transform: scale(1.3, 1.3);
  }
`;

export const MenuLink = styled.a`
  padding: 10px;
  text-decoration: none;

  a {
    color: rgba(166, 182, 211, 1);
    text-decoration: none; /* no underline */
  }

  a:hover {
    color: #a6d3bc;
  }
`;

export const DivLinks = styled.div`
  padding: 0;

  display: none;
  gap: 3rem;

  * {
    display: none;

    :first-child {
      margin-left: 2rem;
    }

    @media (max-width: 800px) {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }

  a:hover {
    *:first-child {
      fill: #a6d3bc;
      
  }

  :hover {
    transform: scale(1.2, 1.2);
  }
`;
