import styled from "styled-components";

export const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 544px 1645px;
  grid-template-areas:
    "section"
    "main";

  background: ${(props) => props.theme.background};
`;
