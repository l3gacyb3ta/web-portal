import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Project, SubTitle, Title, Wrapper } from "./styles";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(sort: { order: ASC, fields: index }, limit: 8) {
        edges {
          node {
            title
            subTitle
            slug
            image {
              childImageSharp {
                resize(width: 320) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges.map((edge) => edge.node);

  return (
    <Wrapper>
      {projects.map(({ slug, title, subTitle, image }) => (
        <Project key={slug} image={image.childImageSharp.resize.src}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Project>
      ))}
    </Wrapper>
  );
};

export default Projects;
