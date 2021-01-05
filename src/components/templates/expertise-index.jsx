import React from "react"
import { Link } from "gatsby"

import Layout from "../../layout"

const ExpertisesIndexPage = props => {
  const { content, title } = props.pageContext;

  return (
    <Layout>
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }}/>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default ExpertisesIndexPage