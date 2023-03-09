import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeesLitsContextProvider } from "./contexts/CoffeesLitsContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesLitsContextProvider>
          <Router />
        </CoffeesLitsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
