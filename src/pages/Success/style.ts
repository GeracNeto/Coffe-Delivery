import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 5.75rem 10rem;
  height: 100vh;
  margin: 0 auto;
  max-width: 1440px;

  header {
    margin-bottom: 2.5rem;
    span {
      font-family: "Baloo 2", cursive;
      font-size: 2rem;
      color: ${(props) => props.theme.product["yellow-dark"]};
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const LastInfosContainer = styled.div`
  width: 50%;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg, #dbac2c, #8047f8) border-box;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 6px 36px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LastInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      font-weight: 700;
    }

    p {
      margin-bottom: 0;
      color: ${(props) => props.theme.base["base-text"]};
    }
  }
`;
