import React from "react"
import { Link } from "gatsby"

const LanguageSelector = ({ classes, className }) => {
  let location

  if (typeof window !== `undefined`) {
      location = window.location.href
  }
  
  if (location.includes("00/en")) {
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