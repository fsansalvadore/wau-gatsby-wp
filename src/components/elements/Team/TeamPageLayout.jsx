import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import tw from "twin.macro";
import Layout from "../../LayoutComponent";
import Heading from "../../elements/Heading/Heading";
import HeadingIntroHalf from "../../elements/Heading/HeadingIntroHalf";
import TeamMemberCard from "../../elements/Team/TeamMemberCard";
import GridMaxWidthContainer from "../../elements/Atoms/GridMaxWidthContainer";
import { MemberModal } from "./MemberModal";

const Role = tw.div`text-base`;

const TeamPageLayout = ({ data, lang }) => {
  const [founders, setFounders] = useState(null);
  const [teamMembers, setTeamMembers] = useState(null);
  const [collaborators, setCollaborators] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (data) {
      setPage(data.wordpress.pages.nodes[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.wordpress.team_members) {
      setFounders(
        data.wordpress.team_members.nodes
          .filter((member) => !!member.teamMemberAFC.founder)
          .sort((a, b) =>
            a.date < b.date
              ? 1
              : a.date === b.date
              ? a.title > b.title
                ? 1
                : -1
              : -1
          )
      );
      setTeamMembers(
        data.wordpress.team_members.nodes
          .filter((member) => !member.teamMemberAFC.founder)
          .sort((a, b) =>
            a.date < b.date
              ? 1
              : a.date === b.date
              ? a.title > b.title
                ? 1
                : -1
              : -1
          )
      );
      setCollaborators(
        data.wordpress.collaborators.nodes.sort((a, b) =>
          a.date < b.date
            ? 1
            : a.date === b.date
            ? a.title > b.title
              ? 1
              : -1
            : -1
        )
      );
    }
  }, [data]);

  return (
    <Layout>
      <Helmet>
        <title>WAU Architetti • Team</title>
      </Helmet>
      <div tw="background-color[#ffffff]">
        <MemberModal
          activeMember={activeMember}
          isOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <Heading>
          <HeadingIntroHalf
            breadcrumb={page && page.pagesACF && page.pagesACF.titoletto}
            heading={page && page.pagesACF && page.pagesACF.title}
            subheading={page && page.pagesACF && page.pagesACF.introduzione}
          />
        </Heading>
        <section>
          <GridMaxWidthContainer tw="my-4 lg:mb-16 lg:mt-0">
            <hr tw="col-span-12 mb-8 lg:mb-16" />
            <h2 tw="col-span-12 text-3xl md:text-5xl">
              {lang === "it" ? "Soci" : "Founders"}
            </h2>
            <ul
              className="team_content"
              tw="col-span-12 grid grid-cols-2 lg:grid-cols-4 mt-8 lg:mt-16"
            >
              {founders && founders.length > 0 ? (
                founders.map((member) => (
                  <li
                    key={`team-${Math.floor(
                      Math.random() * (100 - 999) + 100
                    )}`}
                    tw="p-px"
                  >
                    <TeamMemberCard
                      title={member.title}
                      featuredImage={member.featuredImage}
                      date={member.date}
                      afc={member.teamMemberAFC}
                      setModalIsOpen={setModalIsOpen}
                      setActiveMember={setActiveMember}
                      member={member}
                      lang={lang}
                    />
                  </li>
                ))
              ) : (
                <li className="">
                  <span className="divider" />
                  <div className="">
                    <p className="not-found">Nessun founder trovato</p>
                  </div>
                </li>
              )}
            </ul>
          </GridMaxWidthContainer>
        </section>
        <section>
          <GridMaxWidthContainer tw="my-4 lg:my-8">
            <hr tw="col-span-12 mb-8 lg:mb-16" />
            <h2 tw="col-span-12 text-3xl md:text-5xl">
              {lang === "it" ? "Team operativo" : "Operations Team"}
            </h2>
            <ul
              className="team_content"
              tw="col-span-12 grid grid-cols-2 lg:grid-cols-4 mt-8 lg:mt-16"
            >
              {teamMembers && teamMembers.length > 0 ? (
                teamMembers.map((member) => (
                  <li
                    key={`team-${Math.floor(
                      Math.random() * (100 - 999) + 100
                    )}`}
                    tw="p-px"
                  >
                    <TeamMemberCard
                      title={member.title}
                      featuredImage={member.featuredImage}
                      date={member.date}
                      afc={member.teamMemberAFC}
                      setModalIsOpen={setModalIsOpen}
                      setActiveMember={setActiveMember}
                      member={member}
                      lang={lang}
                    />
                  </li>
                ))
              ) : (
                <li className="">
                  <span className="divider" />
                  <div className="">
                    <p className="not-found">
                      Nessun componente del team trovato
                    </p>
                  </div>
                </li>
              )}
            </ul>
          </GridMaxWidthContainer>
        </section>
        {collaborators && collaborators.length > 0 && (
          <section tw="w-full flex justify-center">
            <GridMaxWidthContainer tw="my-4 lg:mb-8">
              <hr tw="col-span-12 mb-8 lg:mb-16" />
              <h2 tw="col-span-12 md:col-span-4 md:col-start-1 text-3xl md:text-5xl">
                {lang === "it" ? "Referenti" : "Referents"}
              </h2>
              <ul tw="col-span-12 md:col-span-5 md:col-start-7 mt-8 md:mt-0">
                {collaborators.map((collaborator) => (
                  <li
                    key={`team-${Math.floor(
                      Math.random() * (100 - 999) + 100
                    )}`}
                    tw="p-px text-2xl mb-4"
                  >
                    <div>{collaborator.title}</div>
                    <Role>{collaborator.collaboratorsACF.ruolo}</Role>
                  </li>
                ))}
              </ul>
            </GridMaxWidthContainer>
          </section>
        )}
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default TeamPageLayout;
