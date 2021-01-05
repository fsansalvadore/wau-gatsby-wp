import React from "react"
import { Link } from "gatsby"

import Layout from "../../layout"

const StudioPage = props => {
  const { content, title } = props.pageContext;

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>Studio page</h2>
      <article dangerouslySetInnerHTML={{ __html: content }}/>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default StudioPage