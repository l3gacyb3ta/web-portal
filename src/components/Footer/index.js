import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import {
  Founder,
  Founders,
  Legal,
  LegalItem,
  LegalItemLink,
  People,
  Person,
  Social,
  SocialItem,
  SocialItemLink,
  Title,
  Wrapper,
} from "./styles";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson(name: { eq: "footer" }) {
        people {
          name
        }
        founders {
          name
        }
        social {
          title
          href
        }
        legal {
          title
          href
        }
      }
    }
  `);

  const { people, social, legal, founders } = data.dataJson;

  return (
    <Wrapper>
      <Title>Coordinated by:</Title>
      <People>
        {people.map(({ name }) => (
          <Person key={name}>{name}</Person>
        ))}
      </People>
      <Social>
        {social.map(({ title, href }) => (
          <SocialItem key={href}>
            <SocialItemLink link={href}>{title}</SocialItemLink>
          </SocialItem>
        ))}
      </Social>
      <Legal>
        {legal.map(({ title, href }) => (
          <LegalItem key={href}>
            <LegalItemLink link={href}>{title}</LegalItemLink>
          </LegalItem>
        ))}
      </Legal>
      <Founders>
        {founders.map(({ name }) => (
          <Founder key={name}>{name}</Founder>
        ))}
      </Founders>
    </Wrapper>
  );
};

export default Footer;
