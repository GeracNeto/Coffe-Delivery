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

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { useNavigate } from "react-router-dom";
import { CoffeesProps } from "../../../../data/coffees";
import { useContext, useEffect, useState } from "react";
import { CoffeesLitsContext } from "../../../../contexts/CoffeesLitsContext";

export function CatalogCard({
  img,
  tags,
  title,
  description,
  price,
  quantity,
}: CoffeesProps) {
  const navigate = useNavigate();

  const [coffeeQuantity, setCoffeeQuantity] = useState(quantity);

  const coffeesList = useContext(CoffeesLitsContext);

  function navigateToCheckout() {
    navigate("/checkout");
  }

  useEffect(() => {
    const newList = coffeesList.map((coffee) => {
      if (coffee.img === img) {
        return {
          ...coffee,
          quantity: coffeeQuantity,
        };
      } else return coffee;
    });

    console.log(newList);
  }, [coffeeQuantity, coffeesList, img]);

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
          <p>R$</p>
          <span>{price}</span>
        </PriceStyled>
        <CounterStyled>
          <Counter>
            <Minus
              size={14}
              color="#8047F8"
              style={{ cursor: "pointer" }}
              onClick={() => setCoffeeQuantity(coffeeQuantity - 1)}
            />
            <p>{coffeeQuantity}</p>
            <Plus
              size={14}
              color="#8047F8"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCoffeeQuantity(coffeeQuantity + 1);
              }}
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
