import React from "react"
import { Link } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../layout"
import ProjectPreviewCard from "../elements/Projects/ProjectPreviewCard/ProjectPreviewCard"
import tw from 'twin.macro'
import Img from 'gatsby-image'

const ExpertisePage = props => {
  const {
    content,
    expertiseACF,
    featuredImage,
    title,
    lang
  } = props.pageContext;
  
  return (
    <Layout>
      <div className="gradientBg">
        <Heading>
          <p className="breadcrumbs mono">
            <Link to={lang.code === "EN" ? "/en/expertise/" : "/expertise/"}>
              {lang.code === "EN" ? "Expertise" : "Expertise"}</Link> /
          </p>
          <div tw="w-full md:w-3/4">
            <div tw="w-full">
              <h1 tw="leading-10">{title}</h1>
            </div>
            {
              expertiseACF && expertiseACF.introduzione &&
              <div className="intro" tw="w-full">
                {expertiseACF.introduzione}
              </div>
            }
          </div>
        </Heading>
        {
          featuredImage &&
            <figure className="cover-image" tw="mb-10 md:mb-16 xl:mb-32">
              {
                featuredImage.node.imageFile ?
                <Img
                    tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    fixed={featuredImage.node.imageFile.childImageSharp.fixed}
                    // fluid={proj.featuredImage.node.imageFile.childImageSharp.fluid}
                /> :
                <img
                  src={featuredImage.node.sourceUrl}
                  alt={featuredImage.node.altText}
                  tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                />
              }
            </figure>
        }
        <article dangerouslySetInnerHTML={{ __html: content }}/>
        {
          expertiseACF && expertiseACF.progetti && expertiseACF.progetti &&
          <section>
            <p tw="text-center text-3xl py-8 md:py-16">Ecco qualche esempio:</p>
            <ul tw="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-px">
              {
                expertiseACF.progetti.map(project => (
                  <li key={`exp-proj-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px">
                    <ProjectPreviewCard
                      link={lang.code === "EN" ? `/en/projects/${project.slug}` : `/progetti/${project.slug}`}
                      title={project.title}
                      featuredImage={project.featuredImage}
                      imgSrc={project.featuredImage ? project.featuredImage.node.link : ""}
                      imgAlt={project.featuredImage ? project.featuredImage.node.altText : ""}
                      projectdate={project.ProjectAFC.projectdate ? project.ProjectAFC.projectdate : null}
                      location={project.ProjectAFC.location && project.ProjectAFC.location}
                    />
                  </li>
                ))
              }
            </ul>
          </section>
        }
      </div>
      <Link to="/">Go to Home Page</Link>
    </Layout>
  )
}

export default ExpertisePage