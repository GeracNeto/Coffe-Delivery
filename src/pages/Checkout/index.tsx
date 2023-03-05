import { FormEvent, useState } from "react";

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";

import {
  AdressForm,
  BottomtContainer,
  ChangeOrRemoveCoffeeContainer,
  CheckoutForm,
  HeaderContainer,
  InputContainer,
  LeftContainer,
  PaymentCard,
  PaymentForm,
  RemoveContainer,
  RightContainer,
  SelectedCoffee,
  TopContainer,
} from "./styles";

import { Counter } from "../Home/components/CatalogCard/styles";

import expressoTradicional from "../../assets/coffes_types/expresso_tradicional.svg";

// Conditional style when user selects a payment form
const PaymentStyleOnSelect = {
  background: "#EBE5F9",
  border: "1px solid #8047F8",
  transition: "0.2s ease-in-out",
};

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
            <PaymentCard
              style={
                selectedOption === "credit-card" ? PaymentStyleOnSelect : {}
              }
            >
              <input
                type="radio"
                value="credit-card"
                checked={selectedOption === "credit-card"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <CreditCard size={16} weight="regular" color="#8047F8" />
              <span>Cartão de crédito</span>
            </PaymentCard>
            <PaymentCard
              style={
                selectedOption === "debit-card" ? PaymentStyleOnSelect : {}
              }
            >
              <input
                type="radio"
                value="debit-card"
                checked={selectedOption === "debit-card"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <Bank size={16} weight="regular" color="#8047F8" />
              <span>Cartão de débito</span>
            </PaymentCard>
            <PaymentCard
              style={selectedOption === "money" ? PaymentStyleOnSelect : {}}
            >
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
      <RightContainer>
        <SelectedCoffee>
          <img src={expressoTradicional} alt="coffee-selected" />
          <ChangeOrRemoveCoffeeContainer>
            <p>Expresso Tradicional</p>
            <div>
              <Counter>
                <Minus size={14} color="#8047F8" />
                <p>1</p>
                <Plus size={14} color="#8047F8" />
              </Counter>
              <RemoveContainer>
                <Trash size={16} color="#8047F8" />
                <p>Remover</p>
              </RemoveContainer>
            </div>
          </ChangeOrRemoveCoffeeContainer>
          <span>R$9,90</span>
        </SelectedCoffee>
        <SelectedCoffee>
          <img src={expressoTradicional} alt="coffee-selected" />
          <ChangeOrRemoveCoffeeContainer>
            <p>Expresso Tradicional</p>
            <div>
              <Counter>
                <Minus size={14} color="#8047F8" />
                <p>1</p>
                <Plus size={14} color="#8047F8" />
              </Counter>
              <RemoveContainer>
                <Trash size={16} color="#8047F8" />
                <p>Remover</p>
              </RemoveContainer>
            </div>
          </ChangeOrRemoveCoffeeContainer>
          <span>R$9,90</span>
        </SelectedCoffee>
        {/* <input type="submit" /> */}
      </RightContainer>
    </CheckoutForm>
  );
}
