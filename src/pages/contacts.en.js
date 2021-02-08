import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ContactsPageLayout from '../components/elements/Contacts/ContactsPageLayout'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const ContactsEngPage = () => {
  const data = useStaticQuery(graphql`
    query ContactsEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "Contacts" }) {
          nodes {
            slug
            title
            pagesACF {
              titoletto
              title
              introduzione
            }
            contactsACF {
              emails {
                email1 {
                  email
                  etichetta
                }
                email2 {
                  email
                  etichetta
                }
                email3 {
                  email
                  etichetta
                }
                email4 {
                  email
                  etichetta
                }
              }
              form {
                titolo
                sottotitolo
              }
            }
          }
        }
        menu(id: "dGVybTozMQ==") {
          name
          menuItems {
            nodes {
              id
              databaseId
              title
              url
              cssClasses
              description
              label
              linkRelationship
              target
              parentId
              path
            }
          }
        }
      }
    }
  `)

  return(
    <ContactsPageLayout
      data={data.wordpress.pages.nodes[0]}
      socials={data.wordpress.menu}
      lang="en"
    />
  )
}

export default ContactsEngPage
