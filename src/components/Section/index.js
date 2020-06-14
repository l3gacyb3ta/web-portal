import PropTypes from "prop-types";
import React from "react";

import { Wrapper } from "./styles";

const Section = ({ children, dark }) => (
  <Wrapper dark={dark}>{children}</Wrapper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
};

export default Section;
