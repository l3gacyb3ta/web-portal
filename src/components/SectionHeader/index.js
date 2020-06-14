import PropTypes from "prop-types";
import React from "react";

import { Copy, SubTitle, Title, Wrapper } from "./styles";

const SectionHeader = ({ title, subTitle, copy }) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Copy>{copy}</Copy>
  </Wrapper>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};

export default SectionHeader;
