import {
  CartCatalogStyled,
  CatalogCardStyled,
  CounterStyled,
  PriceDiv,
  PriceStyled,
  Tag,
  Counter,
} from "./styles";

import expressoTradicional from "../../../../assets/coffes_types/expresso_tradicional.svg";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { useNavigate } from "react-router-dom";

export function CatalogCard() {
  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate("/checkout");
  }
  return (
    <CatalogCardStyled>
      <img src={expressoTradicional} alt="expresso-tradicional" />
      <Tag>
        <p>TRADICIONAL</p>
      </Tag>
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <PriceDiv>
        <PriceStyled>
          <p>R$</p>
          <span>9,90</span>
        </PriceStyled>
        <CounterStyled>
          <Counter>
            <Minus size={14} color="#8047F8" style={{ cursor: "pointer" }} />
            <p>1</p>
            <Plus size={14} color="#8047F8" style={{ cursor: "pointer" }} />
          </Counter>
          <CartCatalogStyled onClick={navigateToCheckout}>
            <ShoppingCartSimple size={22} weight="fill" color="#fff" />
          </CartCatalogStyled>
        </CounterStyled>
      </PriceDiv>
    </CatalogCardStyled>
  );
}
