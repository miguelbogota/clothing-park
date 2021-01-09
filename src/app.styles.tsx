import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
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
