import styled, { css } from "styled-components";

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
  flex: 1;
  height: 31.25rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.base["base-card"]};
`;

interface InputContainerProps {
  variant:
    | "cep"
    | "rua"
    | "numero"
    | "complemento"
    | "bairro"
    | "cidade"
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
  width: ${(props) =>
    props.variant === "cep"
      ? "12.5rem"
      : props.variant === "rua"
      ? "100%"
      : props.variant === "numero"
      ? "12.5rem"
      : props.variant === "complemento"
      ? "21.75rem"
      : props.variant === "bairro"
      ? "12.5rem"
      : props.variant === "cidade"
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

  &:hover {
    background: ${(props) => props.theme.base["base-hover"]};
  }
`;
