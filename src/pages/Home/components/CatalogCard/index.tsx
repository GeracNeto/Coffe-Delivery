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

export function CatalogCard() {
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
            <Minus size={14} color="#8047F8" />
            <p>1</p>
            <Plus size={14} color="#8047F8" />
          </Counter>
          <CartCatalogStyled>
            <ShoppingCartSimple size={22} weight="fill" color="#fff" />
          </CartCatalogStyled>
        </CounterStyled>
      </PriceDiv>
    </CatalogCardStyled>
  );
}
