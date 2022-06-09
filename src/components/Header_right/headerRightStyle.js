import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  margin: 0px;
  padding: 0px;
  padding-top: 2rem;
  list-style: none;
`;

export const MenuLink = styled.a`
  padding: 10px;
  text-decoration: none;

  a {
    width: 1vw;
  }
`;

export const MenuPosition = styled.section`
  position: fixed;
  left: auto;
  right: 50px;
  width: auto;
  top: 0px;
  z-index: 10;
`;

export const Last = styled.div`
  content: "";
  display: flex;
  width: 1px;
  height: 130px;
  margin: 0px auto;
  background-color: #92a8d1;
  margin-bottom: 2rem;
`;
