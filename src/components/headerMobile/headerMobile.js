import react from "react";
import MenuIcon from "../../images/menuIcon/menuIcon";

import { ButtonMobile, NavStyle } from "./headerMobileStyle";

export default function HeaderMobile() {
  return (
    <>
      <NavStyle>
        <ButtonMobile>
          <MenuIcon />
        </ButtonMobile>
      </NavStyle>
    </>
  );
}
