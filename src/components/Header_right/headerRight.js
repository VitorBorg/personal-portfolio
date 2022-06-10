import react from "react";

import Git from "../../images/git/git";
import Linkedin from "../../images/linkedin/linkedin";
import Instagram from "../../images/instagram/instagram";

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
          <MenuLink>
            <a href="https://github.com/VitorBorg">
              <Git />
            </a>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>
            <a href="https://www.linkedin.com/in/vitorsborg/">
              <Linkedin />
            </a>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>
            <a href="https://www.instagram.com/vitorsborg/">
              <Instagram />
            </a>
          </MenuLink>
        </MenuItem>
      </Menu>
    </MenuPosition>
  );
}
