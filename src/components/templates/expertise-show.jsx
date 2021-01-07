import React from "react"
import { Link } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../layout"

const ExpertisePage = props => {
  const { content, title, lang } = props.pageContext;
  console.log(lang)
  return (
    <Layout>
      <Heading>
        <p className="breadcrumbs mono">
          <Link to={lang.code === "EN" ? "/en/expertise/" : "/expertise/"}>
            {lang.code === "EN" ? "Expertise" : "Expertise"}</Link> /
        </p>
        <h1>{title}</h1>
      </Heading>
      <article dangerouslySetInnerHTML={{ __html: content }}/>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default ExpertisePage