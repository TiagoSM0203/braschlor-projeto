import { HeaderBar, Links, LinkItem, Button } from "./styles";

import logo from "../../assets/imgs/logo_braschlor.png";

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="Braschlor Logo" />
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Inicio</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Quem somos</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Nossos produtos</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Seja nosso parceiro</a>
        </LinkItem>
      </Links>
    </nav>
    <Button href="#">Contato</Button>
  </HeaderBar>
);

export default Header;
