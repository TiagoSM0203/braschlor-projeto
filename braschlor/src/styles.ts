import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    white: "#FFFFFF",
    green: "#8CC64B",
    greenLight: "#9ad951ff",
    black: "#000000",
    gray: "#787878",
    blueLight: "#0082DB",
    blueDark: "#004575",
    grayLight: "#d9d9d9"
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${cores.white}; 
        padding: 0;
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`
