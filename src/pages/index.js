import React from "react";

import HomeIntro from "../components/HomeIntro";
import SEO from "../components/seo";
import SpaceMan from "../components/SpaceMan";

const IndexPage = () => (
  <>
    <SEO title="Welcome" />
    <HomeIntro />
    <SpaceMan />
  </>
);

export default IndexPage;
