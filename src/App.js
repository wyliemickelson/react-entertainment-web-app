import Homepage from "./components/Homepage";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
