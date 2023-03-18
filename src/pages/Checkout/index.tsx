import { FormEvent, useContext, useEffect, useState } from "react";

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
  FooterContainer,
  SubmitButton,
} from "./styles";

import { Counter } from "../Home/components/CatalogCard/styles";

import { useNavigate } from "react-router-dom";

import { CoffeesLitsContext } from "../../contexts/CoffeesLitsContext";
import { priceFormatter } from "../../utils/formatter";
import { useCaclTotal } from "../../hooks/useCalcTotal";

// Conditional style when user selects a payment form
const PaymentStyleOnSelect = {
  background: "#EBE5F9",
  border: "1px solid #8047F8",
  transition: "0.2s ease-in-out",
};

export function Checkout() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const { cart, handleQuantity, removeCoffee } = useContext(CoffeesLitsContext);
  const total = useCaclTotal();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Opção selecionada:", selectedOption);

    navigate("/success");
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
        {cart.map((item) => (
          <SelectedCoffee key={item.img}>
            <img src={item.img} alt="coffee-selected" />
            <ChangeOrRemoveCoffeeContainer>
              <p>{item.title}</p>
              <div>
                <Counter>
                  <Minus
                    size={14}
                    color="#8047F8"
                    onClick={() => handleQuantity(item.img, "sub")}
                  />
                  <p>{item.quantity}</p>
                  <Plus
                    size={14}
                    color="#8047F8"
                    onClick={() => handleQuantity(item.img, "add")}
                  />
                </Counter>
                <RemoveContainer onClick={() => removeCoffee(item.img)}>
                  <Trash size={16} color="#8047F8" />
                  <p>Remover</p>
                </RemoveContainer>
              </div>
            </ChangeOrRemoveCoffeeContainer>
            <span>{priceFormatter.format(item.price)}</span>
          </SelectedCoffee>
        ))}
        <FooterContainer>
          <div>
            <p>Total de itens</p>
            <p>{priceFormatter.format(total - 3.5)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <span>Total</span>
            <span>{priceFormatter.format(total)}</span>
          </div>
        </FooterContainer>
        <SubmitButton
          type="submit"
          value="Confirmar Pedido"
          onSubmit={handleSubmit}
        />
      </RightContainer>
    </CheckoutForm>
  );
}
