import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import styled from "styled-components";
import tw, { css } from "twin.macro";
import parse from "html-react-parser";
import GridMaxWidthContainer from "../elements/Atoms/GridMaxWidthContainer";
import Layout from "../LayoutComponent";
import Heading from "../elements/Heading/Heading";
import "../../styles/gallery.style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ComponentParser from "../elements/Articles/ArticleComponentParser"
import { months } from "../../helpers/utils";
import SocialShare from "../elements/Atoms/SocialShare";
import fallbackImg from "../../images/Wau-Architetti-social-logo.jpg";

const ArticleShowPage = (props) => {
  const {
    content,
    slug,
    title,
    date,
    seo,
    tags,
    lang,
    categories,
    ArticleACF,
    featuredImage,
  } = props.pageContext;

  const data = useStaticQuery(graphql`
    query ArticlesMediaQuery {
      wordpress {
        articles(first: 100, where: { status: PUBLISH }) {
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

  const [aDate, setADate] = useState(new Date(date));
  const [articleDate, setArticleDate] = useState(null);

  useEffect(() => {
    if (aDate) {
      if (lang.code === "EN") {
        setArticleDate(
          `${
            months.eng[aDate.getMonth()]
          } ${aDate.getDay()}, ${aDate.getFullYear()}`
        );
      } else {
        setArticleDate(
          `${aDate.getDay()} ${
            months.ita[aDate.getMonth()]
          } ${aDate.getFullYear()}`
        );
      }
    }
  }, [setArticleDate, lang, aDate]);

  return (
    <Layout>
      <Helmet>
        <title>
          {seo && seo.title
            ? `${seo.title}`
            : lang.code === "IT"
            ? `${title} • Notizie • WAU Architetti`
            : `${title} • News • WAU Architects`}
        </title>
        <link
          rel="canonical"
          href={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/notizie/${slug}`
              : `https://www.wauarchitetti.com/en/news/${slug}`
          }
        />
        <meta name="description" content={`${seo && seo.metaDesc}`} />
        <meta
          name="keywords"
          content={
            tags
              ? tags.nodes.map((tag) => (tag.name ? ` ${tag.name},` : ""))
              : "WAU Architetti, architetti a torino, studio di architetti"
          }
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
              ? `${title} • Notizie • WAU Architetti`
              : `${title} • News • WAU Architects`
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/notizie/${slug}`
              : `https://www.wauarchitetti.com/en/news/${slug}`
          }
        />
        <meta
          property="og:title"
          content={
            lang.code === "IT"
              ? `${title} • Notizie • WAU Architetti`
              : `${title} • News • WAU Architects`
          }
        />
        <meta
          property="og:image"
          content={`${
            featuredImage ? featuredImage.node.sourceUrl : fallbackImg
          }`}
        />
        <meta property="og:description" content={`${seo && seo.metaDesc}`} />
        <meta property="og:locale" content={lang.locale} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content={
            lang.code === "IT"
              ? `https://www.wauarchitetti.com/notizie/${slug}`
              : `https://www.wauarchitetti.com/en/news/${slug}`
          }
        />
        <meta
          name="twitter:title"
          content={
            lang.code === "IT"
              ? `${title} • Notizie • WAU Architetti`
              : `${title} • News • WAU Architects`
          }
        />
        <meta name="twitter:description" content={`${seo && seo.metaDesc}`} />
        <meta
          name="twitter:image"
          content={`${
            featuredImage ? featuredImage.node.sourceUrl : fallbackImg
          }`}
        />
      </Helmet>
      <ProjectContainer>
        <div tw="w-full flex justify-center">
          <GridMaxWidthContainer
            className="container-max-1000"
            tw="w-full grid grid-cols-12"
          >
            <Heading className="article-heading" tw="col-span-12">
              <p className="breadcrumbs mono opacity-80">
                <Link
                  to={lang.code === "EN" ? "/en/news/" : "/notizie/"}
                  tw="block opacity-80 hover:opacity-100"
                >
                  {lang.code === "EN" ? "News" : "Notizie"} /
                </Link>
              </p>
              <h1>{title}</h1>
              {ArticleACF && ArticleACF.introduzione && (
                <div tw="text-xl">
                  <p>{ArticleACF.introduzione}</p>
                </div>
              )}
              <div tw="mt-3 md:mt-8 text-xs">
                <span tw="font-bold mr-2">{articleDate && articleDate}</span>
                {categories.nodes.length > 0 && (
                  <ul tw="block md:inline ml-0 md:ml-2">
                    {categories.nodes.map((category) => (
                      <li
                        key={`art-cat-${Math.floor(
                          Math.random() * (100 - 999) + 100
                        )}`}
                        tw="inline mr-2"
                      >
                        / {category.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Heading>
            {featuredImage ? (
              <figure
                className="cover-image cover-image-fullscreen"
                tw="col-span-12 mb-10 md:mb-16 xl:mb-32"
              >
                {data.wordpress.articles.nodes.find(
                  (project) => project.title === title
                ).featuredImage.node.imageFile ? (
                  <Img
                    tw="absolute w-full h-64 top-0 right-0 bottom-0 left-0"
                    fixed={
                      data.wordpress.articles.nodes.find(
                        (project) => project.title === title
                      ).featuredImage.node.imageFile.childImageSharp.fixed
                    }
                  />
                ) : (
                  <img
                    src={featuredImage.node.sourceUrl}
                    alt={featuredImage.node.altText}
                    tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                  />
                )}
              </figure>
            ) : (
              <hr tw="my-8 md:my-16 w-full col-span-full opacity-50" />
            )}
          </GridMaxWidthContainer>
        </div>
        <article tw="w-full flex justify-center">
          <GridMaxWidthContainer
            className="container-max-900"
            tw="w-full grid grid-cols-12 pb-8 md:pb-16 mb-16 md:mb-32"
          >
            {content && parse(content)}
            <SocialShare lang={lang.slug} />
          </GridMaxWidthContainer>
        </article>
      </ProjectContainer>
    </Layout>
  );
};

const ProjectContainer = styled.div(() => [
  css`
    .article-heading {
      padding-left: 0;
    }
    article > div {
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
        ${tw`my-4 mb-8 md:mb-8 xl:mb-8`}
      }

      ul {
        ${tw`pl-4`}

        li {
          ${tw`list-disc`}
        }
      }

      p {
        line-height: 1.6rem;
        font-weight: 200;
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

      .wp-block-embed {
        iframe {
          width: 100%;
          height: 57vw;
        }
      }

      > .wp-block-image.size-large {
        grid-column: 1 / span 12;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 1000%;
        width: auto;

        img {
          width: 100%;
          height: auto;
        }

        figcaption {
          max-width: 900px;
          ${tw`mx-auto px-8 py-4 md:px-16`}
        }
      }

      .wp-block-separator {
        ${tw`my-4 md:my-8 xl:my-16`}
      }
      .wp-block-image {
        ${tw`my-4 md:my-8 xl:my-16`}

        img {
          ${tw`w-full h-auto`}
        }
      }

      .wp-block-gallery {
        ${tw`my-4 md:my-8 xl:my-16`}
      }

      .wp-block-eedee-block-gutenslider {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: visible;

        .slick-slider,
        .slick-list {
          overflow: visible;
          line-height: 0;
        }

        .slick-slider {
          overflow: visible;
          img {
            cursor: ew-resize !important;
          }
        }

        .slick-slide {
          padding: 0px;
        }
        * {
          outline: none !important;
          box-shadow: none !important;
        }
      }
    }
  `,
]);

export default ArticleShowPage;
