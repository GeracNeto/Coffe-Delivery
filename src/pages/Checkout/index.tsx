import { FormEvent, useState } from "react";

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import {
  AdressForm,
  BottomtContainer,
  CheckoutForm,
  HeaderContainer,
  InputContainer,
  LeftContainer,
  PaymentCard,
  PaymentForm,
  RightContainer,
  TopContainer,
} from "./styles";

export function Checkout() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Opção selecionada:", selectedOption);
  };
  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <LeftContainer>
        <TopContainer>
          <HeaderContainer>
            <MapPinLine size={22} weight="regular" color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderContainer>

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
        <BottomtContainer>
          <HeaderContainer>
            <CurrencyDollar size={22} weight="duotone" color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderContainer>
          <PaymentForm>
            <PaymentCard>
              <input
                type="radio"
                value="credit-card"
                checked={selectedOption === "credit-card"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <CreditCard size={16} weight="regular" color="#8047F8" />
              <span>Cartão de crédito</span>
            </PaymentCard>
            <PaymentCard>
              <input
                type="radio"
                value="debit-card"
                checked={selectedOption === "debit-card"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <Bank size={16} weight="regular" color="#8047F8" />
              <span>Cartão de débito</span>
            </PaymentCard>
            <PaymentCard>
              <input
                type="radio"
                value="money"
                checked={selectedOption === "money"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <Money size={16} weight="regular" color="#8047F8" />
              <span>Dinheiro</span>
            </PaymentCard>
          </PaymentForm>
        </BottomtContainer>
      </LeftContainer>
      <RightContainer>{/* <input type="submit" /> */}</RightContainer>
    </CheckoutForm>
  );
}
