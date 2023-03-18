import { CartStyled, LocationCardStyled, NavBarStyled } from "./styles";

import logo from "../../assets/logo.svg";

import { MapPin, ShoppingCart } from "phosphor-react";

import { useNavigate } from "react-router-dom";

import { useCountCart } from "../../hooks/useCountCart";

export function Header() {
  const quantity = useCountCart();

  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  function navigateToCheckout() {
    navigate("/checkout");
  }
  return (
    <NavBarStyled>
      <img src={logo} alt="logo" onClick={navigateToHome} />
      <div>
        <LocationCardStyled>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p>Porto alegre, RS</p>
        </LocationCardStyled>
        <CartStyled onClick={navigateToCheckout}>
          {quantity !== 0 && (
            <div>
              <span>{quantity}</span>
            </div>
          )}
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </CartStyled>
      </div>
    </NavBarStyled>
  );
}
