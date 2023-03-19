import {
  Coffees,
  CoffeList,
  HomeStyled,
  List,
  SectionStyled,
  Slogan,
} from "./styles";

import { useContext } from "react";

import coffee from "../../assets/coffee.svg";
import cartIcon from "../../assets/cart_icon.svg";
import coffeeIcon from "../../assets/coffee_icon.svg";
import packageIcon from "../../assets/package_icon.svg";
import timeIcon from "../../assets/time_icon.svg";

import { CatalogCard } from "./components/CatalogCard";

import { CoffeesLitsContext } from "../../contexts/CoffeesLitsContext";

export function Home() {
  const { coffeesList } = useContext(CoffeesLitsContext);

  return (
    <HomeStyled>
      <SectionStyled>
        <div>
          <Slogan>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </Slogan>
          <List>
            <div>
              <li>
                <img src={cartIcon} alt="cart icon" />
                Compra simples e segura
              </li>
              <li>
                <img src={timeIcon} alt="time icon" />
                Entrega rápida e rastreada
              </li>
            </div>
            <div>
              <li>
                <img src={packageIcon} alt="package icon" />
                Embalagem mantém o café intacto
              </li>
              <li>
                <img src={coffeeIcon} alt="coffee icon" />O café chega
                fresquinho até você
              </li>
            </div>
          </List>
        </div>
        <img src={coffee} alt="coffe logo" />
      </SectionStyled>
      <CoffeList>
        <h2>Nossos cafés</h2>
        <Coffees>
          {coffeesList.map((item) => (
            <CatalogCard
              key={item.img}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              tags={item.tags}
              quantity={item.quantity}
            />
          ))}
        </Coffees>
      </CoffeList>
    </HomeStyled>
  );
}
