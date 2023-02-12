import { ShoppingCart } from "phosphor-react";
import { CartStyled } from "./styles";

export function Cart() {
  return (
    <CartStyled>
      <ShoppingCart size={22} weight="fill" color="#C47F17" />
    </CartStyled>
  );
}
