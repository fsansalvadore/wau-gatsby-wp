import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import GenericMetadata from './GenericMetadata'

const Layout = ({ children }) => {

  return (
    <>
      <GenericMetadata/>
      {children}
    </>
  )
}

export default Layout
