import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    font-size: 100%;
    height: 100vh;
}

ul{
    list-style: none;
}

body{
    -webkit-font-smoothing: antialiased;
    height: 100vh;
}

body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
}


`;

/*
font-family: 'Baloo 2', cursive;
font-family: 'Roboto', sans-serif;
*/
