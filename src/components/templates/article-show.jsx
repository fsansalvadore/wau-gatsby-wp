import React from "react"
import { Link } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../layout"

const ArticleShowPage = props => {
  const {
    content,
    title,
    lang
  } = props.pageContext;

  return (
    <Layout>
      <Heading>
        <p className="breadcrumbs mono">
          <Link to={lang.code === "EN" ? "/en/news/" : "/notizie/"}>
            {lang.code === "EN" ? "News" : "Notizie"}</Link> /
        </p>
        <h1>{title}</h1>
      </Heading>
      <article dangerouslySetInnerHTML={{ __html: content }}/>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default ArticleShowPage