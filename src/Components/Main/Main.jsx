import styled from "styled-components"
import { useState, useEffect } from "react"


const MainStyle = styled.main`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image:url(/src/assets/quadro.jpg);
    background-repeat: no-repeat;
    background-size: 100%,100%;
    color: #ffffff;
    `
// Seçao principal.
const Calculadora = styled.section`
height: 73vh;
width: 40vw;
border: solid;
border-radius: 1vw;
background-color: #78A3E6;
`
// Visor da calculadora, Onde vai aparecer o resultado das operações
const Visor = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 13vh;
border-bottom: solid;
background-color: #8EAE85;
`
// Tag respponsavel por monstra o resultado no visor
const MonstraResultado = styled.p`
font-size: 2.8em;
color: white;
`
// Teclados da calculadora
const Teclado = styled.section`
display: flex;
justify-content: space-around;
`
// Caixa dos numeros
const CaixaDosNumeros = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 50vh;
width:31vw ;
/* border: solid; */
input{
    width: 12vw;
    height: 12vh;
    font-size: 2rem;
    border-radius: 1rem;
    text-align: center;
}
`

// Seção dos operadoes de atribuição
const Operadores = styled.section`
display: flex;
justify-content: space-between;
height: 60vh;
`
const SecaoDosOperadores = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 60vh;
`
// Os operadores de atribuição
const Sinais = styled.button`
width: 8vw;
height: 12vh;
border-radius: 1vw;
font-size: 2.5em;
background-color: #62c9ae;
`


export default function Main() {
    // Logica ...
    
    const [primeiroValor, setPrimeiroValor] = useState()
    const [segundoValor, setSegundoValor] = useState()
    const [resultado,setResultado] = useState()
    
    const CapturarValor = (item)=> {setPrimeiroValor(Number(item.target.value))}
    const CapturarSegundoValor = (item) => {setSegundoValor(Number(item.target.value))}

    const Soma = () => {
        setResultado(primeiroValor + segundoValor)
    }

    const Subtracao = () =>{
        setResultado(primeiroValor - segundoValor)
    }
    const Multiplicacao = () => {
        setResultado(primeiroValor * segundoValor)
    }
    const Dividir = () => {
        setResultado(primeiroValor / segundoValor)
    }

// const [numeros, setNumeros] = useState([0,1,2,3,4])
// const [number, setNumber] = useState([5,6,7,8,9])

    return (
        <MainStyle>
            <h1>Faça seu calculo</h1>
            <Calculadora>

                <Visor>
                    <MonstraResultado>
                        {resultado}
                    </MonstraResultado>
                </Visor>

                <Teclado>

                 <CaixaDosNumeros>
                    <input type="number" onChange={CapturarValor} />
                    <input type="number" onChange={CapturarSegundoValor
                    } />
                 </CaixaDosNumeros>
                

                    <SecaoDosOperadores>
                        <Sinais onClick={Dividir}>÷</Sinais>
                        <Sinais onClick={Multiplicacao}>x</Sinais>
                        <Sinais onClick={Subtracao}>-</Sinais>
                        <Sinais onClick={Soma}>+</Sinais>
                    </SecaoDosOperadores>
                </Teclado>


            </Calculadora>
        </MainStyle>
    )
}