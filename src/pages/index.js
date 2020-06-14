import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import CreativeCommons from "../components/CreativeCommons";
import Feature from "../components/Feature";
import Intro from "../components/Intro";
import LinkBar from "../components/LinkBar";
import Projects from "../components/Projects";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SEO from "../components/seo";
import Stats from "../components/Stats";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      home: dataJson(name: { eq: "home" }) {
        intro {
          title
          subTitle
          links {
            href
            title
            subTitle
          }
        }
        sections {
          type
          header {
            title
            subTitle
            copy
          }
          stats {
            key
            value
          }
          links {
            title
            subTitle
            href
          }
        }
      }
    }
  `);

  const intro = data.home.intro;

  const sections = data.home.sections.reduce(
    (out, { type, ...props }) => ({
      ...out,
      [type]: props,
    }),
    {}
  );

  return (
    <>
      <SEO title="Welcome" />

      <Intro {...intro} />

      <Section>
        <SectionHeader {...sections.colonisation.header} />
        <CreativeCommons />
        <Feature />
      </Section>

      <Section>
        <Projects />
        <Stats stats={sections.projects.stats} />
        <LinkBar links={sections.projects.links} />
      </Section>

      <Section>
        <SectionHeader {...sections.volunteer.header} />
        <Feature />
        <Stats stats={sections.volunteer.stats} />
        <LinkBar links={sections.projects.links} />
      </Section>

      <Section>
        <SectionHeader {...sections.discord.header} />
        <Feature />
        <LinkBar links={sections.discord.links} />
      </Section>

      <Section dark>
        <SectionHeader {...sections.vr.header} />
        <LinkBar links={sections.vr.links} />
      </Section>
    </>
  );
};

export default IndexPage;
