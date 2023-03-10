import styled from "styled-components";

export const HomeStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 34rem 102.8rem;
  grid-template-areas:
    "section"
    "main";

  max-width: 1440px;
  margin: 0 auto;
`;

export const SectionStyled = styled.section`
  grid-area: section;

  display: flex;
  gap: 3.5rem;
  margin: 5.75rem 10rem;

  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
`;

export const Slogan = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

export const List = styled.ul`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  padding: 0;
  margin-top: 4.125rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

export const CoffeList = styled.main`
  grid-area: main;

  margin: 2rem 10rem;

  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }
`;

export const Coffees = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
