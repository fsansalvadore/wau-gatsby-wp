import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import GenericMetadata from './GenericMetadata'
import MenuIta from "./elements/Menu/Menu"

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
      <MenuIta lang={lang} />
      {children}
    </>
  )
}

export default Layout
