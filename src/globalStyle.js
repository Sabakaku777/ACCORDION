import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: red
  }

  body {
    padding-top: 140px;
    background: linear-gradient(100deg, #B068E9 0%, #6463e7 100%);
    display: flex;
    justify-content: center;
    align-items: center
  }
`;

export default GlobalStyle;
