import {
  InfoContainer,
  LastInfo,
  LastInfosContainer,
  SuccessContainer,
} from "./style";

import { useContext } from "react";

import illustration from "../../assets/illustration.svg";
import location from "../../assets/location.svg";
import timer from "../../assets/time_icon.svg";
import money from "../../assets/iconmoney.svg";

import { CoffeesLitsContext } from "../../contexts/CoffeesLitsContext";

export function Success() {
  const { deliveryData } = useContext(CoffeesLitsContext);

  const paymentFormInPortuguese =
    deliveryData.paymentForm === "credit-card"
      ? "Cartão de Crédito"
      : deliveryData.paymentForm === "debit-card"
      ? "Cartão de débito"
      : deliveryData.paymentForm === "money"
      ? "Dinheiro"
      : "";

  return (
    <SuccessContainer>
      <header>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <InfoContainer>
        <LastInfosContainer>
          <LastInfo>
            <img src={location} alt="location-icon" />
            <div>
              <p>
                Entrega em
                <span>
                  {" "}
                  {deliveryData.street}, {deliveryData.number},{" "}
                  {deliveryData.complement}
                </span>
              </p>
              <p>
                {deliveryData.district} - {deliveryData.city}, {deliveryData.uf}
              </p>
            </div>
          </LastInfo>
          <LastInfo>
            <img src={timer} alt="location-icon" />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </LastInfo>
          <LastInfo>
            <img src={money} alt="location-icon" />
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentFormInPortuguese}</span>
            </div>
          </LastInfo>
        </LastInfosContainer>
        <img src={illustration} alt="illustration" />
      </InfoContainer>
    </SuccessContainer>
  );
}
