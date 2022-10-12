import React from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background:#1b1b1b;
        overflow-x: hidden;
    }
    button {
        font-size:1.1rem;
        font-weight:bold;
        cursor:pointer;
        padding:1rem 2rem;
        color:white;
        background:transparent;
        border:3px solid #23d997;
        transition:all 0.5s ease;
        &:hover{
            color:black;
            background:#23d997;
        }
    }
    h2 {
        font-weight:lighter;
        font-size:4rem;
    }
    h3 {
        color:white;
    }
    h4 {
        font-weight:bold;
        color:#23d997;
    }
    p {
        padding:3rem 0rem;
        color:#ccc; 
        font-size:1.4rem;
        line-height:150%;
    }
    span {
        color:#23d997;
    }
`

export default GlobalStyle;