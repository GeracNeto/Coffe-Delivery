import styled from "styled-components";

export const CheckoutForm = styled.form`
  padding: 5.75rem 10rem;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  gap: 2rem;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 2.5rem 0 2.5rem;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.base["base-text"]};
    }
  }
`;

export const LeftContainer = styled.div`
  width: 40rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TopContainer = styled.div`
  height: 23.25rem;
  background: ${(props) => props.theme.base["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BottomtContainer = styled.div`
  height: 12.93rem;
  background: ${(props) => props.theme.base["base-card"]};

  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  height: max-content;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.base["base-card"]};

  display: flex;
  flex-direction: column;
`;

export const SelectedCoffee = styled.div`
  padding: 2.5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme.base["base-button"]};
  img {
    width: 4rem;
  }

  span {
    font-weight: 700;
  }
`;

export const ChangeOrRemoveCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const RemoveContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.base["base-button"]};
  cursor: pointer;
  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.base["base-text"]};
    font-size: 0.75rem;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.base["base-hover"]};
  }
`;

interface InputContainerProps {
  variant:
    | "cep"
    | "street"
    | "number"
    | "complement"
    | "district"
    | "city"
    | "uf";
}

const BaseInput = styled.input`
  background: ${(props) => props.theme.base["base-input"]};
  border: 1px solid ${(props) => props.theme.base["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme.base["base-label"]};
    font-size: 0.875rem;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.product["yellow-dark"]};
  }
`;

export const InputContainer = styled(BaseInput)<InputContainerProps>`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base["base-text"]};

  width: ${(props) =>
    props.variant === "cep"
      ? "12.5rem"
      : props.variant === "street"
      ? "100%"
      : props.variant === "number"
      ? "12.5rem"
      : props.variant === "complement"
      ? "21.75rem"
      : props.variant === "district"
      ? "12.5rem"
      : props.variant === "city"
      ? "17.25rem"
      : props.variant === "uf"
      ? "3.75rem"
      : "auto"};
`;

export const AdressForm = styled.div`
  width: 100%;
  padding: 0 2.5rem 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const PaymentForm = styled.div`
  width: 100%;
  padding: 1rem 2.5rem 0 2.5rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const PaymentCard = styled.label`
  background: ${(props) => props.theme.base["base-button"]};
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  input[type="radio"] {
    display: none;
  }

  cursor: pointer;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.base["base-text"]};
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.base["base-hover"]};
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.base["base-text"]};
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;

export const SubmitButton = styled.input`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;

  background: ${(props) => props.theme.product.yellow};
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme.product["yellow-dark"]};
  }
`;
