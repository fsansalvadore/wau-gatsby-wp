const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// Query language fields
const language = `
language {
  code
  locale
  slug
}
`

const query = `
  query GlobalQuery {
    wordpress {
      projects(first: 100, where: { status: PUBLISH }) {
        nodes {
          content
          date
          status
          slug
          id
          title
          ProjectAFC {
            introduzione
            projectdate
            location
          }
          tags {
            nodes {
              name
              id
            }
          }
          ${language}
        }
      }
      team_members(first: 100, where: { status: PUBLISH }) {
        nodes {
          date
          status
          slug
          title
          teamMemberAFC {
            ruolo
            descrizione
            email
          }
          ${language}
        }
      }
      expertises(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          content
          title(format: RENDERED)
          ${language}
          featuredImage {
            node {
              sourceUrl(size: LARGE)
              altText
            }
          }
          expertiseACF {
            introduzione
            progetti {
              ... on WORDPRESS_Project {
                id
                title
                date
                slug
                language {
                  code
                }
                ProjectAFC {
                  location
                }
                featuredImage {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
              }
            }
          }
        }
      }
      articles(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          title(format: RENDERED)
          content
          date
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
          categories {
            nodes {
              name
              id
            }
          }
          ArticleACF {
            anteprima
            introduzione
          }
          ${language}
        }
      }
      collaborators(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          title(format: RENDERED)
        }
      }
      pages(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          title(format: RENDERED)
          pagesACF {
            title
            introduzione
          }
          studioACF {
            valuesSection {
              values {
                value1 {
                  title
                  description
                }
                value2 {
                  title
                  description
                }
                value3 {
                  title
                  description
                }
              }
              title
            }
            video
            videonative {
              sourceUrl
              uri
              altText
              mediaItemUrl
            }
            image1 {
              sourceUrl(size: LARGE)
            }
            image2 {
              sourceUrl(size: LARGE)
            }
            sectionEnd {
              title
              content
            }
            sectionApproach {
              title
              content
            }
          }
        }
      }
    }
  }
`

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WORDPRESS_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`${ query }`)
  
    // create ita projects pages
    data.wordpress.projects.nodes.filter(p => p.language.code === "IT").forEach(project => {
      actions.createPage({
        path: `/progetti/${project.slug}`,
        component: path.resolve(`./src/components/templates/project.jsx`),
        context: {
          ...project,
          index: data.wordpress.projects.nodes.indexOf(project),
          id: project.id,
          title: project.title,
          lang: project.language,
          featuredImage: project.featuredImage,
          content: project.content
        },
      })
    })

    // create ita projects pages
    data.wordpress.projects.nodes.filter(p => p.language.code === "EN").forEach(project => {
      actions.createPage({
        path: `/en/projects/${project.slug}`,
        component: path.resolve(`./src/components/templates/project.jsx`),
        context: {
          ...project,
          index: data.wordpress.projects.nodes.indexOf(project),
          id: project.id,
          title: project.title,
          lang: project.language,
          featuredImage: project.featuredImage,
          content: project.content
        },
      })
    })
    
    // create ita expertises pages
    data.wordpress.expertises.nodes.filter(e => e.language.code === "IT").forEach(expertise => {
      actions.createPage({
        path: `/expertise/${expertise.slug}`,
        component: path.resolve(`./src/components/templates/expertise-show.jsx`),
        context: {
          ...expertise,
          index: data.wordpress.expertises.nodes.indexOf(expertise),
          id: expertise.id,
          title: expertise.title,
          lang: expertise.language
        },
      })
    })

    // create ita expertises pages
    data.wordpress.expertises.nodes.filter(e => e.language.code === "EN").forEach(expertise => {
      actions.createPage({
        path: `/en/expertise/${expertise.slug}`,
        component: path.resolve(`./src/components/templates/expertise-show.jsx`),
        context: {
          ...expertise,
          index: data.wordpress.expertises.nodes.indexOf(expertise),
          id: expertise.id,
          title: expertise.title,
          lang: expertise.language
        },
      })
    })
    
    // create ita articles pages
    data.wordpress.articles.nodes.filter(a => a.language.code === "IT").forEach(article => {
      actions.createPage({
        path: `/notizie/${article.slug}`,
        component: path.resolve(`./src/components/templates/article-show.jsx`),
        context: {
          ...article,
          index: data.wordpress.articles.nodes.indexOf(article),
          id: article.id,
          title: article.title,
          lang: article.language
        },
      })
    })

    // create ita articles pages
    data.wordpress.articles.nodes.filter(a => a.language.code === "EN").forEach(article => {
      actions.createPage({
        path: `/en/news/${article.slug}`,
        component: path.resolve(`./src/components/templates/article-show.jsx`),
        context: {
          ...article,
          index: data.wordpress.articles.nodes.indexOf(article),
          id: article.id,
          title: article.title,
          lang: article.language
        },
      })
    })
}