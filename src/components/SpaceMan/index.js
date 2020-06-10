import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Image } from "./styles";

const HomeIntro = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image fluid={file.childImageSharp.fluid} />;
};

export default HomeIntro;
