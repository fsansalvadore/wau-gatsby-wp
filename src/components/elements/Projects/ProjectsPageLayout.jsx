import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Heading from "../../elements/Heading/Heading"
import HeadingIntroHalf from "../../elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import ProjectPreviewCard from "../../elements/Projects/ProjectPreviewCard/ProjectPreviewCard"
import FilterForm from '../Forms/FilterForm'
import { Select } from 'antd';

const { Option } = Select;

const ProjectsPageLayout = ({data, lang}) => {
  const [projects, setProjects] = useState(null)
  const [term, setTerm] = useState("")
  const [tagList, setTagList] = useState(null)
  const [page, setPage] = useState(null)

  useEffect(() => {
    if(data.wordpress.projects) {
      setProjects(data.wordpress.projects.nodes
        .filter(item => item.title.toLowerCase().includes(term.toLowerCase())
              || item.ProjectAFC.location && item.ProjectAFC.location.toLowerCase().includes(term.toLowerCase())
              || item.ProjectAFC.projectdate && item.ProjectAFC.projectdate.toString().includes(term)
              || item.tags.nodes && Array.from(item.tags.nodes.map(node => node.name)).join().toLowerCase().includes(term)
              // || item.custom_post_type_Project.ambiti.join().toLowerCase().includes(term.toLowerCase())
              // || item.custom_post_type_Project.anno.toString().includes(term)
              || !term)
        .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
    }
  }, [setProjects, term, data.wordpress.projects])

  const handleChange = (value) => {
    setTerm(value.toLowerCase())
  }

  console.log("Array.from", data.wordpress.projects.nodes.map(item => Array.from(item.tags.nodes.map(node => node.name.toLowerCase())).join()))

  useEffect(() => {
    if(data) {
      setPage(data.wordpress.pages.nodes[0])
    }
  }, [data, setPage])

  let tags = []

  if(data.wordpress.projects.nodes) {
    data.wordpress.projects.nodes.map(node => {
      if(node.tags.nodes) {
        node.tags.nodes.map(tag => {
          if(!tags.includes(tag.name)) {
            tags.push(tag.name)
          }
        })
      }
    })
  }

  return(
    <Layout>
      <Helmet>
        <title>{lang === "it" ? `${page && page.title} • WAU Architetti` : `${page && page.title} • WAU Architects`}</title>
        <link rel="canonical" href={lang === "it" ? `https://www.wauarchitetti.com/progetti` : `https://www.wauarchitetti.com/en/projects`} />
        <meta property="og:site_name" content={lang === "it" ? `${page && page.title} • WAU Architetti` : `${page && page.title} • WAU Architects`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={lang === "it" ? `https://www.wauarchitetti.com/progetti` : `https://www.wauarchitetti.com/en/projects`} />
        <meta property="og:title" content={lang === "it" ? `${page && page.title} • WAU Architetti` : `${page && page.title} • WAU Architects`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={lang === "it" ? `https://www.wauarchitetti.com/progetti` : `https://www.wauarchitetti.com/en/projects`} />
        <meta name="twitter:title" content={lang === "it" ? `${page && page.title} • WAU Architetti` : `${page && page.title} • WAU Architects`} />
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb={page ? page.title : "Projects"}
            heading={page ? page.pagesACF.title : ""}
          />
          <FilterForm>
            <Select defaultValue="Tutti i progetti" style={{ width: 300 }} onChange={handleChange}>
              <Option value="">Tutti i progetti</Option>
              {
                tags && tags.map(tag => (
                  <Option value={tag}>{tag}</Option>
                ))
              }
            </Select>
          </FilterForm>
        </Heading>
        <div className="search-form">
        </div>
        <ul className="proj_content" tw="grid grid-cols-1 md:grid-cols-2 m-0">
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
                  projectdate={proj.ProjectAFC.projectdate ? proj.ProjectAFC.projectdate : null}
                  location={proj.ProjectAFC.location && proj.ProjectAFC.location}
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

export default ProjectsPageLayout
