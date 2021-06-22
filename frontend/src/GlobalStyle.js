import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html, body {
      font-family: "Roboto", "Helvetica Neue", sans-serif;
      color: #000;
      background: #EBF4FF;
    }
`;
