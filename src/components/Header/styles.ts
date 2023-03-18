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

  img {
    cursor: pointer;
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
  cursor: pointer;
  position: relative;

  div {
    background: ${(props) => props.theme.product["yellow-dark"]};

    color: ${(props) => props.theme.white};
    position: absolute;

    top: -0.5rem;
    right: -0.5rem;

    height: 1.35rem;
    width: 1.35rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`;
