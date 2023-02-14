import { ShoppingCartSimple } from "phosphor-react";
import { CartCatalogStyled } from "./styles";

export function CartCatalog() {
  return (
    <CartCatalogStyled>
      <ShoppingCartSimple size={22} weight="fill" color="#fff" />
    </CartCatalogStyled>
  );
}
