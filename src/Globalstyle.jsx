import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.body};
    font-size: 15px;
    font-weight: 400;
    background-color: black;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
  }
`;
