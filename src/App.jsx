import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from "../src/Components/Header/Header"
import Main from "../src/Components/Main/Main"


const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EstiloGlobal />
      <Main />
    </>
  )
}

export default App
