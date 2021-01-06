import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const ProjectsPageIta = ({data}) => {
  const [projects, setProjects] = useState(null)
  const [term, setTerm] = useState("")

  useEffect(() => {
    if(data.wordpress.projects) {
      setProjects(data.wordpress.projects.nodes.filter(p => p.language.code === "IT")
              .filter(item => item.title.toLowerCase().includes(term.toLowerCase())
              // || item.custom_post_type_Project.ambiti.join().toLowerCase().includes(term.toLowerCase())
              // || item.custom_post_type_Project.anno.toString().includes(term)
              || !term)
              .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
    }
  }, [setProjects, term, data.wordpress.projects])
  
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Progetti</title>
      </Helmet>
      <div>
        <h1>Progetti ITA</h1>
        <div className="search-form">
          <form>
            <i className="search-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6743 15.3094L11.291 11.9261M13.1188 7.53158C13.1188 10.968 10.333 13.7538 6.89657 13.7538C3.46012 13.7538 0.674316 10.968 0.674316 7.53158C0.674316 4.09512 3.46012 1.30933 6.89657 1.30933C10.333 1.30933 13.1188 4.09512 13.1188 7.53158Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </i>
            <input
              type="text"
              onChange={e => setTerm(e.target.value)}
              value={term}
              placeholder="Cerca per titolo, anno o ambito"
            />
          </form>
        </div>
        <ul className="proj_content" >
          {
            projects && projects.length > 0 ?
            projects.map(proj => (
              <li
                key={`${proj.id}-${proj.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
                className="pseudo content"
                data-fx="1"
                data-img={proj.featuredImage ? proj.featuredImage.node.link : ""}
              >
                <Link
                  to={`/progetti/${proj.slug}`}
                  className={`block__link `}
                  >
                  <div className="proj_item-left prog_list-item">
                    <h3>{proj.title}</h3>
                    {/* {
                      proj.custom_post_type_Project.visitabile &&
                      <div className="visible_arrow"><img src="" alt="active link"/></div>
                    } */}
                  </div>
                  <div className="proj_item-right">
                    <div className="proj_year">
                      {/* {proj.custom_post_type_Project.anno && proj.custom_post_type_Project.anno} */}
                    </div>
                    <div className="proj_ambiti">
                      {/* {
                        proj.custom_post_type_Project.ambiti &&
                        proj.custom_post_type_Project.ambiti.map(ambito => (
                          <div key={`${ambito}-${Math.floor(Math.random() * (100 - 999) + 100)}`}>{ambito}</div>
                        ))
                      } */}
                    </div>
                  </div>
                </Link>
                <span className="divider"></span>
              </li>
            )) : (
              <li className="pseudo content">
                <span className="divider"></span>
                  <Link to="/progetti" className="block__link no_link">
                    <div className="proj_item-left prog_list-item">
                      <p className="not-found">Nessun progetto trovato</p>
                    </div>
                  </Link>
                </li>
              )
          }
          <span className="last_divider"></span>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsItaQuery {
    wordpress {
      projects(first: 100, where: { status: PUBLISH, language: IT }) {
        nodes {
          content
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

export default ProjectsPageIta
