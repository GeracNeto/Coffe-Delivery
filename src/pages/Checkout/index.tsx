import {
  BottomtContainer,
  CheckoutStyled,
  LeftContainer,
  RightContainer,
  TopContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutStyled>
      <LeftContainer>
        <TopContainer>top</TopContainer>
        <BottomtContainer>bottom</BottomtContainer>
      </LeftContainer>
      <RightContainer>right</RightContainer>
    </CheckoutStyled>
  );
}
