import Header from "../header";
import { Container } from "../../styles";
import { HeaderWrapper, HeroContent, HeroSection } from "./styles";

const Hero = () => (
  <HeroSection>
    <HeaderWrapper>
      <Container>
        <Header />
      </Container>
    </HeaderWrapper>

    <HeroContent>
      <Container>
        <h1>Soluções químicas com qualidade</h1>
        <p>Produtos desenvolvidos para entregar confiança em cada aplicação.</p>
      </Container>
    </HeroContent>
  </HeroSection>
);

export default Hero;
