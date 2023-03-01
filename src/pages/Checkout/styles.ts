import styled from "styled-components";

export const CheckoutStyled = styled.div`
  margin: 5.75rem 10rem;

  display: flex;
  gap: 2rem;

  height: 37.5rem;
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
`;

export const BottomtContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.base["base-card"]};
`;

export const RightContainer = styled.div`
  flex: 1;
  height: 31.25rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.base["base-card"]};
`;
