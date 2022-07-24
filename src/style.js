import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: NotoSans, sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap')
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
    body{
        background-color: #f2f2f2;
        font-family: NotoSans, sans-serif;
    }
`;
