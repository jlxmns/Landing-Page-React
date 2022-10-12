import { createGlobalStyle } from "styled-components"

import Bg1 from '../../public/bg1.png';
import Bg2 from '../../public/bg2.png';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: url(${Bg2}) no-repeat 1000px, url(${Bg1}) no-repeat 980px;
        background-size: cover;
        background-color: #F8FDFF;
        font-family: poppins, sans-serif;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyle;