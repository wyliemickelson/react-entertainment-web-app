import Page from "./components/Page";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
}

export default App;
