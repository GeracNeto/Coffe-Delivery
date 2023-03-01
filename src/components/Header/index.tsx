import { CartStyled, LocationCardStyled, NavBarStyled } from "./styles";

import logo from "../../assets/logo.svg";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <NavBarStyled>
      <img src={logo} alt="logo" />
      <div>
        <LocationCardStyled>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p>Porto alegre, RS</p>
        </LocationCardStyled>
        <CartStyled>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </CartStyled>
      </div>
    </NavBarStyled>
  );
}
