import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'

const ExpertisesPageIta = ({data}) => {
  const [expertises, setExpertises] = useState(null)
  const [term, setTerm] = useState("")

  useEffect(() => {
    if(data.wordpress.expertises) {
      setExpertises(data.wordpress.expertises.nodes)
    }
  }, [setExpertises, term, data.wordpress.expertises])
  
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Expertise</title>
      </Helmet>
      <div>
        <Heading>
          <p className="breadcrumbs mono">Expertise</p>
          <h1>Expertise ENG</h1>
        </Heading>
        <ul >
          {
            expertises && expertises.length > 0 ?
            expertises.map(expertise => (
              <li
                key={`${expertise.id}-${expertise.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
              >
                <Link
                  to={`/en/expertise/${expertise.slug}`}
                  >
                    <h3>{expertise.title}</h3>
                </Link>
              </li>
            )) : (
              <li>
                <p className="not-found">No expertise found</p>
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ExpertisesEngQuery {
    wordpress {
      expertises(first: 100, where: { status: PUBLISH, language: EN }) {
        nodes {
          date
          status
          slug
          id
          title
          language {
            code
            locale
            slug
          }
        }
      }
    }
  }
`

export default ExpertisesPageIta
