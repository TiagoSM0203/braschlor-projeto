import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    padding: 24px;
    color: ${cores.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
    }
`

export const Links = styled.ul`
    display: flex;
`

export const LinkItem = styled.li`
    margin-right: 25px;

    a {
        color: ${cores.white};

        &:hover {
            color: ${cores.greenLight};
        }
    }
`

export const Button = styled.a`
    padding: 15px 32px;
    background-color: ${cores.green};
    border: none;
    border-radius: 50px;
    color: ${cores.white};
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${cores.greenLight}; 
    }
` 
