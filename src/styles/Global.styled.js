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

  body {
    overflow-x: hidden;
  }

  body, input {
    background-color: ${props => props.theme.darkest};
     /* ===== Scrollbar CSS ===== */
    /* Firefox */
    scrollbar-width: 16px;
    scrollbar-color: #5a698f #161d2f;

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-track {
      background: #161d2f;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #5a698f;
     border-radius: 10px;
     border: 3px none #ffffff;
    }
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