import React from "react"
import { Link } from "gatsby"
import Heading from "../elements/Heading/Heading"
import Layout from "../../LayoutComponent"

const NewsShowPage = props => {
  const { content, title } = props.pageContext;

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>News Show page</h2>
      <article dangerouslySetInnerHTML={{ __html: content }}/>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default NewsShowPage