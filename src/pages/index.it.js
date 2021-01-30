import React from "react"
import Layout from "../components/LayoutComponent"
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Home Page</title>
      </Helmet>
      <div>
        <h1>WAU ARCHITETTI ITA</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
