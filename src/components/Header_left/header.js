import react from "react";
import { Menu, MenuItem, MenuLink, MenuPosition, Barra } from "./headerStyle";

export default function Header() {
  return (
    <MenuPosition>
      <Menu>
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
      </Menu>
      <Barra />
    </MenuPosition>
  );
}
