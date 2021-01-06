const path = require(`path`)

const language = `
language {
  code
  locale
  slug
}
`

const query = `
  query {
    wordpress {
      projects(first: 100, where: { status: PUBLISH }) {
        nodes {
          content
          date
          status
          slug
          id
          title
          ${language}
        }
      }
      expertises(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          title(format: RENDERED)
          ${language}
        }
      }
      articles(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          id
          title(format: RENDERED)
          ${language}
        }
      }
    }
  }
`

// const queryPagesEng = `
//   query {
//     wordpress {
//       pages(first: 100, where: { status: PUBLISH, language: EN }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${languages}
//         }
//       }
//     }
//   }
// `

// const queryProjectsIta = `
//   query {
//     wordpress {
//       projects(first: 100, where: { status: PUBLISH, language: IT }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${language}
//         }
//       }
//     }
//   }
// `

// const queryProjectsEng = `
//   query {
//     wordpress {
//       projects(first: 100, where: { status: PUBLISH, language: EN }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${language}
//         }
//       }
//     }
//   }
// `

// const queryExpertisesIta = `
//   query {
//     wordpress {
//       expertises(first: 100, where: { status: PUBLISH, language: IT }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${languages}
//         }
//       }
//     }
//   }
// `

// const queryExpertisesEng = `
//   query {
//     wordpress {
//       expertises(first: 100, where: { status: PUBLISH, language: EN }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${languages}
//         }
//       }
//     }
//   }
// `

// const queryArticlesIta = `
//   query {
//     wordpress {
//       articles(first: 100, where: { status: PUBLISH, language: IT }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${languages}
//         }
//       }
//     }
//   }
// `

// const queryArticlesEng = `
//   query {
//     wordpress {
//       articles(first: 100, where: { status: PUBLISH, language: EN }) {
//         nodes {
//           content
//           date
//           status
//           slug
//           id
//           title
//           ${languages}
//         }
//       }
//     }
//   }
// `

exports.createPages = async ({ actions, graphql }) => {
  // const { data } = await graphql(`
  //   ${queryProjectsIta}
  //   ${queryProjectsEng}
  //   ${queryExpertisesIta}
  //   ${queryExpertisesEng}
  //   ${queryArticlesIta}
  //   ${queryArticlesEng}
  // `)
  const { data } = await graphql(`${ query }`)
  // const { projectsEng } = await graphql(`${queryProjectsEng}`)
  // const { expertisesIta } = await graphql(`${queryExpertisesIta}`)
  // const { expertisesEng } = await graphql(`${queryExpertisesEng}`)
  // const { articlesIta } = await graphql(`${queryArticlesIta}`)
  // const { articlesEng } = await graphql(`${queryArticlesEng}`)
  
  // get available languages
  // const { langs } = await graphql(`${languages}`)

  // loop through languages and set Types based on language
  // langs.wordpress.languages.nodes.forEach(lang => {
    // let currentLang = `${lang.slug}`
    // if(lang.code === "IT") {
    //   currentLang = "/"
    // }
    // const pages = [
    //   {
    //     name: "progetto",
    //     pathUrl: i => `/progetti/${i}`,
    //     lang: "IT"
    //   },
    //   {
    //     name: "progetto",
    //     pathUrl: i => `/progetti/${i}`,
    //     lang: "IT"
    //   },
    //   {
    //     name: "progetto",
    //     pathUrl: i => `/progetti/${i}`,
    //     lang: "IT"
    //   },
    //   {
    //     name: "progetto",
    //     pathUrl: i => `/progetti/${i}`,
    //     lang: "IT"
    //   },
    //   {
    //     name: "progetto",
    //     pathUrl: i => `/progetti/${i}`,
    //     lang: "IT"
    //   },

    // ]

    // create ita projects pages
    data.wordpress.projects.nodes.filter(p => p.language.code === "IT").forEach(project => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/progetti/${project.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/project.jsx`),
        context: {
          ...project,
          index: data.wordpress.projects.nodes.indexOf(project),
          id: project.id,
          title: project.title,
        },
      })
    })

    // create ita projects pages
    data.wordpress.projects.nodes.filter(p => p.language.code === "EN").forEach(project => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/en/projects/${project.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/project.jsx`),
        context: {
          ...project,
          index: data.wordpress.projects.nodes.indexOf(project),
          id: project.id,
          title: project.title,
        },
      })
    })
    
    // create ita expertises pages
    data.wordpress.expertises.nodes.filter(e => e.language.code === "IT").forEach(expertise => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/expertise/${expertise.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/expertise-show.jsx`),
        context: {
          ...expertise,
          index: data.wordpress.expertises.nodes.indexOf(expertise),
          id: expertise.id,
          title: expertise.title,
        },
      })
    })

    // create ita expertises pages
    data.wordpress.expertises.nodes.filter(e => e.language.code === "EN").forEach(expertise => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/en/expertise/${expertise.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/expertise-show.jsx`),
        context: {
          ...expertise,
          index: data.wordpress.expertises.nodes.indexOf(expertise),
          id: expertise.id,
          title: expertise.title,
        },
      })
    })
    
    // create ita articles pages
    data.wordpress.articles.nodes.filter(a => a.language.code === "IT").forEach(article => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/progetti/${article.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/article-show.jsx`),
        context: {
          ...article,
          index: data.wordpress.articles.nodes.indexOf(article),
          id: article.id,
          title: article.title,
        },
      })
    })

    // create ita articles pages
    data.wordpress.articles.nodes.filter(a => a.language.code === "EN").forEach(article => {
      // createPage action
      actions.createPage({
        // set path base on language
        path: `/en/articles/${article.slug}`,
        // set template and context
        component: path.resolve(`./src/components/templates/article-show.jsx`),
        context: {
          ...article,
          index: data.wordpress.articles.nodes.indexOf(article),
          id: article.id,
          title: article.title,
        },
      })
    })
}