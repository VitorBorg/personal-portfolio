import react from "react";
import MenuIcon from "../../images/menuIcon/menuIcon";

import Git from "../../images/git/git";
import Linkedin from "../../images/linkedin/linkedin";
import Instagram from "../../images/instagram/instagram";

import {
  ButtonMobile,
  NavStyle,
  DivLinks,
  MenuAside,
  MenuItem,
  MenuLink,
  ButtonMobileClose,
} from "./headerMobileStyle";
import { useState } from "react";
import MenuClose from "../../images/menuClose/menuClose";

export default function HeaderMobile() {
  const [menu, setMenu] = useState(false);

  const handleButtonClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <NavStyle>
        <DivLinks>
          <a href="https://github.com/VitorBorg">
            <Git />
          </a>
          <a href="https://www.linkedin.com/in/vitorsborg/">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/vitorsborg/">
            <Instagram />
          </a>
        </DivLinks>
        <ButtonMobile onClick={handleButtonClick} style={{ cursor: "pointer" }}>
          <MenuIcon />
        </ButtonMobile>
      </NavStyle>
      {menu && (
        <MenuAside>
          <ButtonMobileClose onClick={handleButtonClick}>
            <MenuClose />
          </ButtonMobileClose>
          <MenuItem>
            <MenuLink>
              <a href="#intro">Introdução</a>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>
              <a href="#about">Quem sou eu</a>
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>
              <a href="#projects">Projetos</a>
            </MenuLink>
          </MenuItem>
        </MenuAside>
      )}
    </>
  );
}
