import PropTypes from "prop-types";
import React from "react";

import icons from "../base/icons";
import { ExternalLink, InternalLink, LinkItem, Title, Wrapper } from "./styles";

const LinkBar = ({ links }) => (
  <Wrapper>
    {links.map(({ href, title, external, icon }) => {
      const Icon = icons[icon];
      return (
        <LinkItem key={href}>
          {external ? (
            <ExternalLink href={href} target="_blank">
              {Icon && <Icon />}
              <Title>{title}</Title>
            </ExternalLink>
          ) : (
            <InternalLink to={href}>
              {Icon && <Icon />}
              <Title>{title}</Title>
            </InternalLink>
          )}
        </LinkItem>
      );
    })}
  </Wrapper>
);

LinkBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(Object.keys(icons)),
      external: PropTypes.bool,
    })
  ).isRequired,
};

export default LinkBar;
