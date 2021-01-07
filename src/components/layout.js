import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import GenericMetadata from './GenericMetadata'
import Menu from "./elements/Menu/Menu"
import "../styles/global.css"
import MainNav from "./elements/MainNav/MainNav"

const Layout = ({ children }) => {
  let location
  let lang = "it"
  if (typeof window !== `undefined`) {
      location = window.location.href
      if(location.includes("00/en")) {
        lang = "en"
      }
  }

  return (
    <>
      <GenericMetadata/>
      <MainNav lang={lang} />
      {children}
    </>
  )
}

export default Layout
