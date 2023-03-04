import { MapPinLine } from "phosphor-react";
import {
  AdressForm,
  BottomtContainer,
  CheckoutStyled,
  InputContainer,
  LeftContainer,
  RightContainer,
  TopContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutStyled>
      <LeftContainer>
        <TopContainer>
          <header>
            <MapPinLine size={22} weight="thin" color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <AdressForm>
            <InputContainer placeholder="CEP" variant="cep" />
            <InputContainer placeholder="Rua" variant="rua" />
            <div>
              <InputContainer placeholder="Número" variant="numero" />
              <InputContainer placeholder="Complemento" variant="complemento" />
            </div>
            <div>
              <InputContainer placeholder="Bairro" variant="bairro" />
              <InputContainer placeholder="Cidade" variant="cidade" />
              <InputContainer placeholder="UF" variant="uf" />
            </div>
          </AdressForm>
        </TopContainer>
        <BottomtContainer>bottom</BottomtContainer>
      </LeftContainer>
      <RightContainer>right</RightContainer>
    </CheckoutStyled>
  );
}
