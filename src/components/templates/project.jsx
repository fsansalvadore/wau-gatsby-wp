import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
// import ComponentParser from '../ComponentParser'

const ProjectPage = (props) => {
  const {
    slug,
    blocks,
    index,
    title,
    featuredImage,
    seo,
    tags
  } = props.pageContext;
  const {data} = props;
  
  return (
    <div>
          <Link to="/">
            Home Page
          </Link>
          <h1>{title}</h1>
    </div>
  )
}

export const query = graphql`
  query PrevNextQuery {
    wordpress {
      projects(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          title
          date
          slug
        }
      }
    }
  }
`

export default ProjectPage