import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import LinkBar from "../components/LinkBar";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        discord {
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

  const { links, intro } = data.dataJson.discord;

  return (
    <>
      <SEO title="Welcome" />
      <p>{intro}</p>
      <LinkBar links={links} />
    </>
  );
};

export default IndexPage;
