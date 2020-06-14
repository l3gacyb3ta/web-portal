import PropTypes from "prop-types";
import React from "react";

import LinkBar from "../LinkBar";
import { SubTitle, Title, Wrapper } from "./styles";

const Intro = ({ title, subTitle, links }) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <LinkBar links={links} />
  </Wrapper>
);

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
    })
  ).isRequired,
};

export default Intro;
