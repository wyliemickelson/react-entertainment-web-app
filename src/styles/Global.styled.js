import { createGlobalStyle } from "styled-components";
import Outfit from './Outfit-VariableFont_wght.ttf'
export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Outfit', sans-serif;
    src: url(${Outfit});
  }

  * {
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
  }

  body, input {
    background-color: ${props => props.theme.darkest};
  }

  button {
    all: unset;
    cursor: pointer;
}

  input {
    border: none;
  }

  img {
    max-width: 100%;
  }

  @media only screen and (min-width: 600px) {
    * {
      font-size: 20px;
    }
  }
`