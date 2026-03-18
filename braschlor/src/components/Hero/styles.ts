import styled from "styled-components";
import heroImg from "../../assets/imgs/hero.png";
import { cores } from "../../styles";

export const HeroSection = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: url(${heroImg}) center/cover no-repeat;
    color: ${cores.white};
    display: flex;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding-top: 16px;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 200px 0 96px;

    h1 {
        font-size: 48px;
        line-height: 1.2;
        margin-bottom: 16px;
    }

    p {
        font-size: 18px;
        max-width: 560px;
        color: ${cores.grayLight};
    }
`;
