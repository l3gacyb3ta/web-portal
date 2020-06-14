import PropTypes from "prop-types";
import React from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import GlobalStyle from "../theme/global";
import { Wrapper } from "./styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
