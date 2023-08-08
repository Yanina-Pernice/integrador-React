import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
    html{
        scroll-behavior: smooth;
        // border: 1px blue solid;
    }

    body{
        margin: 0;
        padding: 0;
        background: white;
        font-family: 'Montserrat', sans-serif;
        color: #757575;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    }
    a{
        text-decoration :none;
        color: #e9cccc;
    }
    a:visited{
        color:#e9cccc;
    }
    li{
        list-style:none;
    }
    


`