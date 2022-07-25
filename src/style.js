import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
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
        margin: 0;
    }
    
    .scrollBar::-webkit-scrollbar {
        width: 10px;  /* 스크롤바의 너비 */
    }
    
    .scrollBar::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #B7B7B7; /* 스크롤바의 색상 */    
        border-radius: 10px;
    }
    
    .scrollBar::-webkit-scrollbar-track {
        background: #F5F5F5;  /*스크롤바 뒷 배경 색상*/
        border-radius: 10px;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
