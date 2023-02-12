import { List, MainStyled, SectionStyled, Slogan } from "./styles";

import coffee from "../../assets/coffee.svg";
import cartIcon from "../../assets/cart_icon.svg";
import coffeeIcon from "../../assets/coffee_icon.svg";
import packageIcon from "../../assets/package_icon.svg";
import timeIcon from "../../assets/time_icon.svg";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <MainStyled>
      <Header />
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
      <main>main</main>
    </MainStyled>
  );
}
