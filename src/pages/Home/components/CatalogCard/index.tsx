import {
  CartCatalogStyled,
  CatalogCardStyled,
  CounterStyled,
  PriceDiv,
  PriceStyled,
  Tag,
  Counter,
  TagContainer,
} from "./styles";

import { useContext } from "react";

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { useNavigate } from "react-router-dom";

import { CoffeesProps } from "../../../../data/coffees";

import { CoffeesLitsContext } from "../../../../contexts/CoffeesLitsContext";

import { priceFormatter } from "../../../../utils/formatter";

export function CatalogCard({
  img,
  tags,
  title,
  description,
  price,
  quantity,
}: CoffeesProps) {
  const navigate = useNavigate();

  const { handleQuantity } = useContext(CoffeesLitsContext);

  function navigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <CatalogCardStyled>
      <img src={img} alt="expresso-tradicional" />
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag}>
            <p>{tag}</p>
          </Tag>
        ))}
      </TagContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <PriceDiv>
        <PriceStyled>
          <span>{priceFormatter.format(price)}</span>
        </PriceStyled>
        <CounterStyled>
          <Counter>
            <Minus
              size={14}
              color="#8047F8"
              style={{ cursor: "pointer" }}
              onClick={() => handleQuantity(img, "sub")}
            />
            <p>{quantity}</p>
            <Plus
              size={14}
              color="#8047F8"
              style={{ cursor: "pointer" }}
              onClick={() => handleQuantity(img, "add")}
            />
          </Counter>
          <CartCatalogStyled onClick={navigateToCheckout}>
            <ShoppingCartSimple size={22} weight="fill" color="#fff" />
          </CartCatalogStyled>
        </CounterStyled>
      </PriceDiv>
    </CatalogCardStyled>
  );
}
