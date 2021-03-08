import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../../elements/Heading/Heading"
import HeadingIntroHalf from "../../elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import TeamMemberCard from '../../elements/Team/TeamMemberCard'
import GridMaxWidthContainer from '../../elements/Atoms/GridMaxWidthContainer'

const TeamPageLayout = ({data, lang}) => {
  const [teamMembers, setTeamMembers] = useState(null)
  const [collaborators, setCollaborators] = useState(null)
  const [page, setPage] = useState(null)

  useEffect(() => {
    if(data) {
      setPage(data.wordpress.pages.nodes[0])
    }
  }, [data, setPage])
  
  useEffect(() => {
    if (data && data.wordpress.team_members) {
      setTeamMembers(data.wordpress.team_members.nodes
        .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
        setCollaborators(data.wordpress.collaborators.nodes
        .sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.title > b.title) ? 1 : -1) : -1 ))
    }
  }, [setTeamMembers])

  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Team</title>
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb={page && page.pagesACF && page.pagesACF.titoletto}
            heading={page && page.pagesACF && page.pagesACF.title}
            subheading={page && page.pagesACF && page.pagesACF.introduzione}
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
            <GridMaxWidthContainer tw="my-16 lg:mt-32 mb-16 md:mb-32">
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

export default TeamPageLayout
