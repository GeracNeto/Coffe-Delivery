import styled from "styled-components";

export const NavBarStyled = styled.nav`
  background: ${(props) => props.theme.background};

  padding: 32px 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  div {
    display: flex;
    gap: 1rem;
  }
`;
