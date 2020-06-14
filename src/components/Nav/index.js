import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Link, LinkItem, Links, Logo, Wrapper } from "./styles";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      dataJson(name: { eq: "nav" }) {
        links {
          title
          href
          feature
        }
      }
    }
  `);

  const links = data.dataJson.links;
  const title = data.site.siteMetadata.title;

  return (
    <Wrapper>
      <Logo>{title}</Logo>
      <Links>
        {links.map(({ title, href, feature }) => (
          <LinkItem key={href} feature={feature}>
            <Link link={href}>{title}</Link>
          </LinkItem>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Nav;
