import { InfoContainer, SuccessContainer } from "./style";

import illustration from "../../assets/illustration.svg";

export function Success() {
  return (
    <SuccessContainer>
      <header>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <InfoContainer>
        <div>content</div>
        <img src={illustration} alt="illustration" />
      </InfoContainer>
    </SuccessContainer>
  );
}
