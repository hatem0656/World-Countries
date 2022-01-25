import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        transition: 0.2s ;
    }
    body{ 
        margin: 0 ; 
        padding: 0 ; 
        background-color: ${({ theme }) => theme.mainColor} ; 
        font-family: 'Nunito Sans', sans-serif;
        color: ${({ theme }) => theme.fontColor} ; 
    }

    ul { 
        padding: 0 ;
        list-style: none ; 
    }

    a {
        text-decoration: none ; 
    }

    p{
        opacity: 0.6 ;
        line-height: 1.5 ; 
    }

    img { 
        max-width: 100% ; 
    }
`;
export default GlobalStyles;
