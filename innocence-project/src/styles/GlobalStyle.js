import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        outline:none;
        color:black;
        border:none;
            text-decoration: none;
        a:hover,a:active{
            background-color:black;
            color:black;
            outline: none;
            text-decoration: none;
        }
    }
`