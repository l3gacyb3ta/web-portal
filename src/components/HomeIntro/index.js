import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import LinkBar from "../LinkBar";
import { Intro, Wrapper } from "./styles";

const HomeIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        home {
          intro
          links {
            external
            href
            icon
            title
          }
        }
      }
    }
  `);

  const { links, intro } = data.dataJson.home;

  return (
    <Wrapper>
      <Intro>{intro}</Intro>
      <LinkBar links={links} />
    </Wrapper>
  );
};

export default HomeIntro;
