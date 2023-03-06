import {
  InfoContainer,
  LastInfo,
  LastInfosContainer,
  SuccessContainer,
} from "./style";

import illustration from "../../assets/illustration.svg";
import location from "../../assets/location.svg";
import timer from "../../assets/time_icon.svg";
import money from "../../assets/iconmoney.svg";

export function Success() {
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
                <span> Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </LastInfo>
          <LastInfo>
            <img src={timer} alt="location-icon" />
            <div>
              <p>Previsão de enrtega</p>
              <span>20 min - 30 min</span>
            </div>
          </LastInfo>
          <LastInfo>
            <img src={money} alt="location-icon" />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </LastInfo>
        </LastInfosContainer>
        <img src={illustration} alt="illustration" />
      </InfoContainer>
    </SuccessContainer>
  );
}
