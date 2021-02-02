import React, { useEffect, useState } from "react"
import GenericMetadata from './GenericMetadata'
import MainNav from "./elements/MainNav/MainNav"
// import { GlobalStyles } from 'twin.macro'
import "../styles/global.css"
import "../styles/locomotive-scroll.css"
import Footer from './elements/Atoms/Footer'

const Layout = ({ isMenuLight, children }) => {
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
      <GenericMetadata lang={lang} />
      {/* <GlobalStyles /> */}
      <MainNav lang={lang} isMenuLight={isMenuLight} />
      {children}
      <Footer lang={lang} />
    </>
  )
}

export default Layout
