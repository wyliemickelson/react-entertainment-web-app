import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap');

  * {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 300;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`