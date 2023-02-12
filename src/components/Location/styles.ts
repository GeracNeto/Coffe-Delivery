import styled from "styled-components";

export const LocationCardStyled = styled.div`
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.product["purple-light"]};

  display: flex;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme.product["purple-dark"]};
    margin: 0;
  }
`;
