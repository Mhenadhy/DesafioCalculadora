import styled from "styled-components"
import Calculadora from "../../assets/calculadora.png"


const Headerstyle = styled.header`
display: flex;
justify-content: space-around;
width: 100%;
height: 18vh;
background-image: linear-gradient(to top left,#0055b9,#eeaeca);
section{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
`

const Logo = styled.img`
width: 9vw;
`

const NavBar = styled.nav`
display:flex;
justify-content: space-between;
align-items: center;
width: 50vw;
a{
    color: #ffffff;
    font-size: 1.5rem;
    text-decoration: none;
}
`

export default function Header() {
    return (
        <Headerstyle>
            <section>
                <Logo src={Calculadora} alt="" />
                <h2>Calculadora Simples</h2>
            </section>
            <NavBar>
                <a href="https://www.gilbertomelo.com.br/primeira-calculadora-eletronica-completa-40-anos/#:~:text=O%20primeiro%20modelo%20usava%20uma,em%20associa%C3%A7%C3%A3o%20com%20a%20Canon." target="blank_">Primera calculadora eletronica</a>
                <a href="https://blog.certisign.com.br/a-evolucao-dos-calculos-e-das-calculadoras/#:~:text=Em%201642%20o%20matem%C3%A1tico%20franc%C3%AAs,opera%C3%A7%C3%B5es%20de%20adi%C3%A7%C3%A3o%20e%20subtra%C3%A7%C3%A3o." target="blank_">Primeira calculadora da historia</a>
            </NavBar>
        </Headerstyle>
    )
}