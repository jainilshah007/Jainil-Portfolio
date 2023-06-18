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
    font-weight: 700;
    background-color: black;
  }



 
`;
