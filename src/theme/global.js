import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html{
    background-color: #1d2951;
  }

  body{
    margin: 0;
  }
`;
