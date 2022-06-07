import react from "react";
import { Menu, MenuItem, MenuLink, MenuPosition, Barra } from "./headerStyle";

export default function Header() {
  return (
    <MenuPosition>
      <Menu>
        <MenuItem>
          <MenuLink>Introdução</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Quem sou eu</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Projetos</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Contato</MenuLink>
        </MenuItem>
      </Menu>
      <Barra />
    </MenuPosition>
  );
}
