import { NavBarStyled } from "./styles";

import logo from "../../assets/logo.svg";
import { Location } from "../Location";
import { Cart } from "../Cart";

export function Header() {
  return (
    <NavBarStyled>
      <img src={logo} alt="logo" />
      <div>
        <Location />
        <Cart />
      </div>
    </NavBarStyled>
  );
}
