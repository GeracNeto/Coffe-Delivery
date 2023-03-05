import styled from "styled-components";

export const CatalogCardStyled = styled.div`
  background: ${(props) => props.theme.base["base-card"]};

  width: 16rem;
  height: 19.375rem;
  padding: 20px 24px;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-right: 1.25rem;
  margin-bottom: 2.5rem;

  img {
    margin-top: -3.125rem;
  }

  > h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme.base["base-label"]};
    text-align: center;
    margin: 0;
  }
`;

export const Tag = styled.div`
  background: ${(props) => props.theme.product["yellow-light"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
    color: ${(props) => props.theme.product["yellow-dark"]};
    margin: 0;
  }
`;

export const PriceDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const PriceStyled = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  p {
    color: ${(props) => props.theme.base["base-title"]};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;

    margin: 0;
  }

  span {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 0;
  }
`;

export const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartCatalogStyled = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.product["purple-dark"]};
`;

export const Counter = styled.div`
  background: ${(props) => props.theme.base["base-button"]};

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: 6px;

  p {
    text-align: center;
    margin: 0;

    color: ${(props) => props.theme.base["base-title"]};
  }
`;
