import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html{
    background-color: #fff;
    color: #000;
    font-family: 'Viga', sans-serif;
  }

  body{
    margin: 0;
  }
`;
