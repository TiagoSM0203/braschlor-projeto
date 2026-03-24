import { Container } from "../../../../styles"
import stars from "../../../../assets/imgs/avaliacao.png"
import mascotMobile from "../../../../assets/imgs/mascote-bracos-cruzados.png"
import mascot from "../../../../assets/imgs/mascote-encostado.png"
import {
    AvaliacaoBody,
    AvaliacaoCard,
    AvaliacaoCards,
    AvaliacaoMascot,
    AvaliacaoSection,
    AvaliacaoTitle
} from "./styles"

const Avaliacao = () => (
    <Container>
        <AvaliacaoSection>
            <AvaliacaoTitle>
                <h1>Confiança Construída na Prática</h1>
                <p>Avaliações reais que comprovam a performance e a qualidade da nossa linha.</p>
            </AvaliacaoTitle>
            <AvaliacaoBody>
                <AvaliacaoMascot>
                    <picture>
                        <source media="(max-width: 920px)" srcSet={mascotMobile} />
                        <img src={mascot} alt="Mascote apoiado nos cards de avaliacao" />
                    </picture>
                </AvaliacaoMascot>
                <AvaliacaoCards>
                    <AvaliacaoCard>
                        <img src={stars} alt="Avaliacao" />
                        <p>Produtos de qualidade, e cheirosos, atendimento top e muito profissional!!!</p>
                        <h4>Tiago Mota</h4>
                    </AvaliacaoCard>
                    <AvaliacaoCard>
                        <img src={stars} alt="Avaliacao" />
                        <p>Produtos de qualidade, e cheirosos, atendimento top e muito profissional!!!</p>
                        <h4>Tiago Mota</h4>
                    </AvaliacaoCard>
                    <AvaliacaoCard>
                        <img src={stars} alt="Avaliacao" />
                        <p>Produtos de qualidade, e cheirosos, atendimento top e muito profissional!!!</p>
                        <h4>Tiago Mota</h4>
                    </AvaliacaoCard>
                    <AvaliacaoCard>
                        <img src={stars} alt="Avaliacao" />
                        <p>Produtos de qualidade, e cheirosos, atendimento top e muito profissional!!!</p>
                        <h4>Tiago Mota</h4>
                    </AvaliacaoCard>
                </AvaliacaoCards>
            </AvaliacaoBody>
        </AvaliacaoSection>
    </Container>
)

export default Avaliacao
