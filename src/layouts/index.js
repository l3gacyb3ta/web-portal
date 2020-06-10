import PropTypes from "prop-types";
import React from "react";

import GlobalStyle from "../theme/global";
import { Wrapper } from "./styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
