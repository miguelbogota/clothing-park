import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Barlow", sans-serif, Arial, Helvetica;
    font-size: 1rem;
    padding: 20px 60px;
    background-color: #ffffff;
    @media screen and (max-width: 800px) {
      padding: 8px;
    }
  }
  a {
    text-decoration: none;
    color: #333333;
  }
  * {
    box-sizing: border-box;
  }
`;
