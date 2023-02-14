import styled from "styled-components";

export const CounterStyled = styled.div`
  background: ${(props) => props.theme.base["base-button"]};

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: 6px;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
    margin: 0;

    color: ${(props) => props.theme.base["base-title"]};
  }
`;
