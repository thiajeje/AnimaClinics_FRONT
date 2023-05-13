import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-width: 100% !important;
  }
  body {
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    height: 100%;
    background: EBEFF2;
    object-fit: cover;
    background-size: cover;
    background-size: auto;
    background-attachment: fixed;
  
  }
`;