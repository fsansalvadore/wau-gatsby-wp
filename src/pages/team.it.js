import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'
import Heading from "../components/elements/Heading/Heading"
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import TeamMemberCard from '../components/elements/Team/TeamMemberCard'
import GridMaxWidthContainer from '../components/elements/Atoms/GridMaxWidthContainer'

const TeamPageIta = ({data}) => {
  const [teamMembers, setTeamMembers] = useState(null)
  const [collaborators, setCollaborators] = useState(null)

  useEffect(() => {
    if (data && data.wordpress.team_members) {
      setTeamMembers(data.wordpress.team_members.nodes
        .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
        setCollaborators(data.wordpress.collaborators.nodes
        .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
    }
  }, [data, setTeamMembers, setCollaborators])

  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Team</title>
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb="Team ita"
            heading="Lorem ipsum dolor sit amet, consectetur."
            subheading="Crediamo che la forza di un gruppo si misuri nella capacità di mettere a frutto la diversità - di stile, di approccio, di opinione - verso un risultato comune che è sempre superiore alle singole componenti del progetto."
          />
        </Heading>
        <section>
          <ul className="team_content" tw="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {
              teamMembers && teamMembers.length > 0 ?
              teamMembers.map(member => (
                <li key={`team-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px">
                  <TeamMemberCard
                    title={member.title}
                    featuredImage={member.featuredImage}
                    date={member.date}
                    afc={member.teamMemberAFC}
                  />
                </li>
              )) : (
                <li className="">
                  <span className="divider"></span>
                    <div className="">
                      <p className="not-found">Nessun membro del team trovato</p>
                    </div>
                  </li>
                )
            }
          </ul>
        </section>
        <section tw="w-full flex justify-center">
          {
            collaborators && collaborators.length > 0 &&
            <GridMaxWidthContainer tw="my-16 lg:mt-32">
              <h2 tw="col-span-12 md:col-span-4 md:col-start-1 text-3xl md:text-5xl">Collaboratori</h2>
              <ul tw="col-span-12 md:col-span-5 md:col-start-7 mt-8 md:mt-0">
                {
                  collaborators.map(collaborator => (
                    <li key={`team-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="p-px text-2xl mb-4">
                      {collaborator.title}
                    </li>
                  ))
                }
              </ul>
            </GridMaxWidthContainer>
          }
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TeamItaQuery {
    wordpress {
      team_members(first: 100, where: { status: PUBLISH, language: IT }) {
        nodes {
          date
          title
          featuredImage {
            node {
              altText
              link
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(width: 1200, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          teamMemberAFC {
            ruolo
            descrizione
            email
          }
          language {
            code
            locale
            slug
          }
        }
      }
      collaborators(first: 100, where: { status: PUBLISH }) {
        nodes {
          date
          title
        }
      }
    }
  }
`

export default TeamPageIta
