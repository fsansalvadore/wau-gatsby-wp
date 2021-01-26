import React from "react"
import { Link } from "gatsby"

const LanguageSelector = ({ classes, className }) => {
  let location = "it"

  if (typeof window !== `undefined`) {
      location = window.location.href
  }
  
  if (location && location.includes("/en")) {
    return (
      <Link
        className={className}
        to={"/"}
      >
        Italiano
      </Link>
    )
  } else {
    return (
      <Link className={className} to={`/en/`}>
        English
      </Link>
    )
  }
}

export default LanguageSelector