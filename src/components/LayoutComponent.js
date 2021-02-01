import React from "react"
import GenericMetadata from './GenericMetadata'
import MainNav from "./elements/MainNav/MainNav"
// import { GlobalStyles } from 'twin.macro'
import "../styles/global.css"
import "../styles/locomotive-scroll.css"
import { Footer } from "antd/lib/layout/layout"

const Layout = ({ isMenuLight, children }) => {
  let location
  let lang = "it"
  if (typeof window !== `undefined`) {
      location = window.location.href
      if(location.includes("00/en") || location.includes("app/en") || location.includes("com/en")) {
        lang = "en"
      }
  }

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
