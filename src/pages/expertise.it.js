import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

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
        <h1>Expertise Ita</h1>
        <ul >
          {
            expertises && expertises.length > 0 ?
            expertises.map(expertise => (
              <li
                key={`${expertise.id}-${expertise.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
              >
                <Link
                  to={`/expertise/${expertise.slug}`}
                  >
                    <h3>{expertise.title}</h3>
                </Link>
              </li>
            )) : (
              <li>
                <p className="not-found">Nessuna expertise trovata</p>
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ExpertisesItaQuery {
    wordpress {
      expertises(first: 100, where: { status: PUBLISH, language: IT }) {
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
