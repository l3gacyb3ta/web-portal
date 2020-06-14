import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import PropTypes from "prop-types";
import React from "react";

const Link = ({ link, children, ...rest }) =>
  link.startsWith("http") ? (
    <OutboundLink href={link} target="_blank" {...rest}>
      {children}
    </OutboundLink>
  ) : (
    <GatsbyLink to={link} {...rest}>
      {children}
    </GatsbyLink>
  );

Link.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Link;
