import React, { useEffect, useState, useRef } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Heading from "../components/elements/Heading/Heading"
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import ProjectPreviewCard from "../components/elements/Projects/ProjectPreviewCard/ProjectPreviewCard"

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
        <Heading>
          <HeadingIntroHalf
            breadcrumb="Progetti"
            heading="Duis aute irure dolor in reprehenderit."
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <form>
            <i className="search-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6743 15.3094L11.291 11.9261M13.1188 7.53158C13.1188 10.968 10.333 13.7538 6.89657 13.7538C3.46012 13.7538 0.674316 10.968 0.674316 7.53158C0.674316 4.09512 3.46012 1.30933 6.89657 1.30933C10.333 1.30933 13.1188 4.09512 13.1188 7.53158Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </i>
            <input
              type="text"
              onChange={e => setTerm(e.target.value)}
              value={term}
              placeholder="Cerca per titolo, anno o ambito"
            />
          </form>
        </Heading>
        <div className="search-form">
        </div>
        <ul className="proj_content" tw="grid grid-cols-1 md:grid-cols-2">
          {
            projects && projects.length > 0 ?
            projects.map(proj => (
              <li key={`${proj.id}-${proj.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px">
                <ProjectPreviewCard
                  link={proj.slug}
                  title={proj.title}
                  featuredImage={proj.featuredImage}
                  imgSrc={proj.featuredImage ? proj.featuredImage.node.link : ""}
                  imgAlt={proj.featuredImage ? proj.featuredImage.node.altText : ""}
                  year={proj.ProjectAFC && proj.ProjectAFC.projectdate}
                  location={proj.ProjectAFC && proj.ProjectAFC.location && proj.ProjectAFC.location}
                />
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
          featuredImage {
            node {
              altText
              link
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ProjectAFC {
            projectdate
            location
          }
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
