import PropTypes from "prop-types"
import React, { Component } from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"

function LanguageSelector({ classes, lang, location, className }) {
  if (lang === "default") {
    return (
      <Link className={className} to={`/en/${location.pathname}`}>
        Eng
      </Link>
    )
  } else {
    return (
      <Link
        className={className}
        to={location.pathname.replace("/" + lang + "/", "/")}
      >
        Ita
      </Link>
    )
  }
}

export default LanguageSelector