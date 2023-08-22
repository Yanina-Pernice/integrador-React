import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
    html{
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        padding: 0;
        background: white;
        font-family: 'Montserrat', sans-serif;
        // color: #757575;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    }
    a{
        text-decoration :none;
       
    }
    a:hover:visited{
        color: #e61ebd;
    }

    li{
        list-style:none;
    }

    // *{
    //     border: 1px solid #131415;
    // }
    

`