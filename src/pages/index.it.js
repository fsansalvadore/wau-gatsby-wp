import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomePageLayout from '../components/elements/HomePage/HomePageLayout'

const IndexIta = () => {
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
  
  return(
    <HomePageLayout lang={lang} />
  )
}

export default IndexIta
