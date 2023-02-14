import {
  CatalogCardStyled,
  CounterStyled,
  PriceDiv,
  PriceStyled,
  Tag,
} from "./styles";

import expressoTradicional from "../../../assets/coffes_types/expresso_tradicional.svg";
import { Counter } from "../../Selects/Counter";
import { CartCatalog } from "../../Buttons/CartCatalog";

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
          <Counter />
          <CartCatalog />
        </CounterStyled>
      </PriceDiv>
    </CatalogCardStyled>
  );
}
