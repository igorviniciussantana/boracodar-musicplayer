import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #0F0D13;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}

.app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`