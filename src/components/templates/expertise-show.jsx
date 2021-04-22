import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import parse from "html-react-parser";
import styled from "styled-components";
import tw, { css } from "twin.macro";
import { Helmet } from "react-helmet";
import GridMaxWidthContainer from "../elements/Atoms/GridMaxWidthContainer";
import ProjectPreviewCard from "../elements/Projects/ProjectPreviewCard/ProjectPreviewCard";
import Layout from "../LayoutComponent";
import Heading from "../elements/Heading/Heading";
import fallbackImg from "../../images/Wau-Architetti-social-logo.jpg";

const ExpertisePage = (props) => {
  const {
    content,
    slug,
    expertiseACF,
    featuredImage,
    seo,
    tags,
    title,
    lang,
  } = props.pageContext;

  const data = useStaticQuery(graphql`
    query ExpertiseMediaQuery {
      wordpress {
        expertises(first: 100, where: { status: PUBLISH }) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl(size: LARGE)
                imageFile {
                  childImageSharp {
                    fixed(width: 1500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout isMenuLight>
      <Helmet>
        <title>
          {seo && seo.title
            ? `${parse(seo.title)}`
            : lang.code === "IT"
            ? `${title} • Expertise • WAU Architetti`
            : `${title} • Expertise • WAU Architects`}
        </title>
        <link
          rel="canonical"
          href={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/expertise/${slug}`
              : `https://www.wauarchitetti.com/en/expertise/${slug}`
          }
        />
        <meta
          name="description"
          content={`${seo && seo.metaDesc && seo.metaDesc}`}
        />
        <meta
          name="keywords"
          content={`${seo && seo.metaKeywords && seo.metaKeywords}`}
        />
        <meta
          itemprop="image"
          content={`${
            featuredImage ? featuredImage.node.sourceUrl : fallbackImg
          }`}
        />
        <meta
          property="og:site_name"
          content={
            lang.code === "IT"
              ? `${title} • Expertise • WAU Architetti`
              : `${title} • Expertise • WAU Architects`
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/expertise/${slug}`
              : `https://www.wauarchitetti.com/en/expertise/${slug}`
          }
        />
        <meta
          property="og:title"
          content={
            lang.code === "IT"
              ? `${title} • Expertise • WAU Architetti`
              : `${title} • Expertise • WAU Architects`
          }
        />
        <meta
          property="og:image"
          content={`${
            featuredImage ? featuredImage.node.sourceUrl : fallbackImg
          }`}
        />
        <meta
          property="og:description"
          content={`${seo && seo.metaDesc && seo.metaDesc}`}
        />
        <meta property="og:locale" content={lang.locale} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/expertise/${slug}`
              : `https://www.wauarchitetti.com/en/expertise/${slug}`
          }
        />
        <meta
          name="twitter:title"
          content={
            lang.code === "IT"
              ? `${title} • Expertise • WAU Architetti`
              : `${title} • Expertise • WAU Architects`
          }
        />
        <meta
          name="twitter:description"
          content={`${seo && seo.metaDesc && seo.metaDesc}`}
        />
        <meta
          name="twitter:image"
          content={`${
            featuredImage ? featuredImage.node.sourceUrl : fallbackImg
          }`}
        />
      </Helmet>
      <ExpertiseContainer className="gradientBg">
        <Heading>
          <p className="breadcrumbs mono">
            <Link to={lang.code === "EN" ? "/en/expertise/" : "/expertise/"}>
              {lang.code === "EN" ? "Expertise" : "Expertise"}
            </Link>{" "}
            /
          </p>
          <div tw="w-full md:w-3/4">
            <div tw="w-full">
              <h1 tw="leading-10">{title}</h1>
            </div>
            {expertiseACF && expertiseACF.introduzione && (
              <div className="intro" tw="w-full">
                {parse(expertiseACF.introduzione)}
              </div>
            )}
          </div>
        </Heading>
        <article tw="w-full flex justify-center pt-4 pb-8 md:pb-16">
          <GridMaxWidthContainer
            className="expertise-content"
            tw="w-full grid grid-cols-12"
          >
            {content && parse(content)}
          </GridMaxWidthContainer>
        </article>
        {expertiseACF && expertiseACF.progetti && expertiseACF.progetti && (
          <section>
            <p tw="text-center text-3xl pt-8 pb-16 md:pb-28">
              Ecco qualche esempio:
            </p>
            <ul tw="w-full grid grid-cols-1 m-0 md:grid-cols-2 lg:grid-cols-3 pb-px">
              {expertiseACF.progetti.map((project) => (
                <li
                  key={`exp-proj-${Math.floor(
                    Math.random() * (100 - 999) + 100
                  )}`}
                  tw="p-px"
                >
                  <ProjectPreviewCard
                    link={
                      lang.code === "EN"
                        ? `/en/projects/${project.slug}`
                        : `/progetti/${project.slug}`
                    }
                    title={project.title}
                    featuredImage={project.featuredImage}
                    imgSrc={
                      project.featuredImage
                        ? project.featuredImage.node.sourceUrl
                        : ""
                    }
                    imgAlt={
                      project.featuredImage
                        ? project.featuredImage.node.altText
                        : ""
                    }
                    projectdate={
                      project.ProjectAFC.projectdate
                        ? project.ProjectAFC.projectdate
                        : null
                    }
                    location={
                      project.ProjectAFC.location && project.ProjectAFC.location
                    }
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </ExpertiseContainer>
    </Layout>
  );
};

const ExpertiseContainer = styled.div(() => [
  css`
    article {
      .expertise-content {
        // max-width: 1600px;

        > * {
          ${tw`col-span-12`}
        }

        > p,
        > ul,
        > ol,
        > h1,
        > h2,
        > h3,
        > h4,
        > .wp-block-quote {
          ${tw`col-span-12 md:col-span-7 md:col-start-6 my-4 mb-8 md:mb-8 xl:mb-8`}
        }

        ul {
          ${tw`pl-4`}

          li {
            ${tw`list-disc`}
          }
        }

        p {
          line-height: 1.6rem;
          /* font-weight: 200; */
          ${tw`md:text-lg`}
        }

        > .wp-block-columns {
          ${tw`flex flex-col md:flex-row`}

          .wp-block-column {
            flex-grow: 1;
            ${tw`mr-0 md:mr-4`}
          }

          .wp-block-column:last-of-type {
            ${tw`mr-0`}
          }
        }

        > *:last-of-type {
          ${tw`mb-0!`}
        }

        .wp-block-embed {
          iframe {
            width: 100%;
            height: 57vw;
          }
        }

        > .wp-block-image.size-large {
          img {
            width: 100%;
            height: auto;
          }
        }

        .wp-block-separator {
          ${tw`my-6 md:my-12 xl:my-32`}
        }
        .wp-block-image {
          ${tw`mb-4 md:mb-8`}

          img {
            ${tw`w-full h-auto`}
          }
        }
      }
    }
  `,
]);

// eslint-disable-next-line import/no-default-export
export default ExpertisePage;
