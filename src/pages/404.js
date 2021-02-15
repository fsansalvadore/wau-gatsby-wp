import React, { useEffect, useState } from "react"
import MainNav from '../components/elements/MainNav/MainNav'
import "../styles/global.css"
import Footer from '../components/elements/Atoms/Footer'
import { Link } from "gatsby"
import tw from 'twin.macro'
import styled from 'styled-components'
import GridMaxWidthContainer from "../components/elements/Atoms/GridMaxWidthContainer"
import Button from '../components/elements/Atoms/Button'

const ErrorPage = () => {
  let location
  const [lang, setLang] = useState("it")

  useEffect(() => {
    if (typeof window !== `undefined`) {
        location = window.location.href
        if(location.includes("00/en") || location.includes("app/en") || location.includes("com/en")) {
          setLang("en")
        }
    }
  }, [lang])

  return (
    <>
      {/* <GlobalStyles /> */}
      <MainNav lang={lang} />
        <StyledErrorPage>
            <GridMaxWidthContainer>
                <div tw="col-span-full leading-9 text-center">
                    {
                        lang === "it" ?
                        <h1>Errore 404.<br/>Pagina non trovata.</h1> :
                        <h1>Error 404.<br/>Page not found.</h1>
                    }
                    <div tw="mt-8">
                        <Button as={Link} to="/">{lang === "it" ? "Torna alla Home Page" : "Go to Home Page"}</Button>
                    </div>
                </div>
            </GridMaxWidthContainer>
        </StyledErrorPage>
      <Footer lang={lang} />
    </>
  )
}

const StyledErrorPage = styled.div`
    min-height: 75vh;
    ${tw`p-8 flex flex-col justify-center items-center`}
`

export default ErrorPage
