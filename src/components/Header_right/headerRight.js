import react from "react";
import {
  Menu,
  MenuItem,
  MenuLink,
  MenuPosition,
  Last,
} from "./headerRightStyle";

export default function HeaderRight() {
  return (
    <MenuPosition>
      <Last />
      <Menu>
        <MenuItem>
          <MenuLink>Git</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Lnk</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Inst</MenuLink>
        </MenuItem>
      </Menu>
    </MenuPosition>
  );
}
