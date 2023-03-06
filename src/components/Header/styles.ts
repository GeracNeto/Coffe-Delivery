import styled from "styled-components";

export const NavBarStyled = styled.nav`
  padding: 2rem 10rem;
  margin: 0 auto;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const LocationCardStyled = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.product["purple-light"]};

  display: flex;
  align-items: center;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.product["purple-dark"]};
    margin: 0;
  }
`;

export const CartStyled = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.product["yellow-light"]};
`;
