import React, { useEffect, useState } from "react"
import MainNav from '../components/elements/MainNav/MainNav'
import "../styles/global.css"
import Footer from '../components/elements/Atoms/Footer'
import { Link } from "gatsby"
import tw from 'twin.macro'
import styled from 'styled-components'

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
            <h1>404. Page not found.</h1>
        </StyledErrorPage>
        <Link to="/">Go to Home Page</Link>
      <Footer lang={lang} />
    </>
  )
}

const StyledErrorPage = styled.div`
    min-width: 50vh;
    ${tw`p-8 flex items-center`}
`

export default ErrorPage
