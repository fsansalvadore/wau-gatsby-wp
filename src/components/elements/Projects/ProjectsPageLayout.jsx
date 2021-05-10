import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Select from "react-select";
import { Helmet } from "react-helmet";
import Layout from "../../LayoutComponent";
import "twin.macro";
import Heading from "../../elements/Heading/Heading";
import HeadingIntroHalf from "../../elements/Heading/HeadingIntroHalf";
import ProjectPreviewCard from "../../elements/Projects/ProjectPreviewCard/ProjectPreviewCard";
import FilterForm from "../Forms/FilterForm";

const SelectStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#eee" : "transparent",
    color: "#111",
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 0,
  }),
  container: (provided, state) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    width: "100%",
    maxWidth: 400,
    border: state.isFocused ? "transparent" : "transparent",
  }),
  indicatorSeparator: (provided, state) => ({
    display: "none",
  }),
};

const ProjectsPageLayout = ({ data, lang }) => {
  const [projects, setProjects] = useState(null);
  const [term, setTerm] = useState("");
  const [tagList, setTagList] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (data.wordpress.projects) {
      setProjects(
        data.wordpress.projects.nodes
          .filter(
            (item) =>
              item.title.toLowerCase().includes(term.toLowerCase()) ||
              (item.ProjectAFC.location &&
                item.ProjectAFC.location
                  .toLowerCase()
                  .includes(term.toLowerCase())) ||
              (item.ProjectAFC.projectdate &&
                item.ProjectAFC.projectdate.toString().includes(term)) ||
              (item.tags.nodes &&
                Array.from(item.tags.nodes.map((node) => node.name))
                  .join()
                  .toLowerCase()
                  .includes(term.toLowerCase())) ||
              // || item.custom_post_type_Project.ambiti.join().toLowerCase().includes(term.toLowerCase())
              // || item.custom_post_type_Project.anno.toString().includes(term)
              !term
          )
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
    }
  }, [term, data.wordpress.projects]);

  const handleChange = (value) => {
    setTerm(value.value);
  };

  useEffect(() => {
    if (data) {
      setPage(data.wordpress.pages.nodes[0]);
    }
  }, [data]);

  const AllProjects = {
    value: "",
    label: lang === "it" ? "Tutti i progetti" : "All projects",
  };
  const tags = [];

  if (data.wordpress.projects.nodes) {
    data.wordpress.projects.nodes.map((node) => {
      if (node.tags.nodes) {
        node.tags.nodes.map((tag) => {
          if (!tags.includes(tag.name)) {
            tags.push(tag.name);
          }
        });
      }
    });
  }

  return (
    <Layout>
      <Helmet>
        <title>
          {lang === "it"
            ? `${page && page.title} • WAU Architetti`
            : `${page && page.title} • WAU Architects`}
        </title>
        <link
          rel="canonical"
          href={
            lang === "it"
              ? `https://www.wauarchitetti.com/progetti`
              : `https://www.wauarchitetti.com/en/projects`
          }
        />
        <meta
          name="description"
          content={`${page && page.seo && page.seo.metaDesc}`}
        />
        <meta
          property="og:site_name"
          content={
            lang === "it"
              ? `${page && page.title} • WAU Architetti`
              : `${page && page.title} • WAU Architects`
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            lang === "it"
              ? `https://www.wauarchitetti.com/progetti`
              : `https://www.wauarchitetti.com/en/projects`
          }
        />
        <meta
          property="og:title"
          content={
            lang === "it"
              ? `${page && page.title} • WAU Architetti`
              : `${page && page.title} • WAU Architects`
          }
        />
        <meta
          property="og:description"
          content={`${page && page.seo && page.seo.metaDesc}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content={
            lang === "it"
              ? `https://www.wauarchitetti.com/progetti`
              : `https://www.wauarchitetti.com/en/projects`
          }
        />
        <meta
          name="twitter:title"
          content={
            lang === "it"
              ? `${page && page.title} • WAU Architetti`
              : `${page && page.title} • WAU Architects`
          }
        />
        <meta
          name="twitter:description"
          content={`${page && page.seo && page.seo.metaDesc}`}
        />
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb={page ? page.title : "Projects"}
            heading={page ? page.pagesACF.title : ""}
          />
          <FilterForm>
            {!!tags.length && (
              <Select
                value={{
                  value: term,
                  label: !!term.length ? term : AllProjects.label,
                }}
                defaultValue={AllProjects}
                placeholder={
                  lang === "it" ? "Cerca progetti" : "Search projects"
                }
                indicator={false}
                styles={SelectStyles}
                onChange={(value) => handleChange(value)}
                options={[
                  AllProjects,
                  ...tags.map((tag, i) => ({ value: tag, label: tag })),
                ]}
              />
            )}
          </FilterForm>
        </Heading>
        <ul className="proj_content" tw="grid grid-cols-1 md:grid-cols-2 m-0">
          {projects && projects.length > 0 ? (
            projects.map((proj) => (
              <li
                key={`${proj.id}-${proj.slug}-${Math.floor(
                  Math.random() * (100 - 999) + 100
                )}`}
                tw="p-px"
              >
                <ProjectPreviewCard
                  link={proj.slug}
                  title={proj.title}
                  featuredImage={proj.featuredImage}
                  imgSrc={
                    proj.featuredImage ? proj.featuredImage.node.link : ""
                  }
                  imgAlt={
                    proj.featuredImage ? proj.featuredImage.node.altText : ""
                  }
                  projectdate={
                    proj.ProjectAFC.projectdate
                      ? proj.ProjectAFC.projectdate
                      : null
                  }
                  location={
                    proj.ProjectAFC.location && proj.ProjectAFC.location
                  }
                />
              </li>
            ))
          ) : (
            <li className="pseudo content">
              <span className="divider" />
              <Link to="/progetti" className="block__link no_link">
                <div className="proj_item-left prog_list-item">
                  <p className="not-found">Nessun progetto trovato</p>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default ProjectsPageLayout;
