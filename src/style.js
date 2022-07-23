import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
${reset}
    body{
        background-color: #f2f2f2;
        font-family: Noto-sans;
    }
`;
