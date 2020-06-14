import PropTypes from "prop-types";
import React from "react";

import icons from "../base/icons";
import { Link, LinkItem, SubTitle, Title, Wrapper } from "./styles";

const LinkBar = ({ links }) => (
  <Wrapper>
    {links.map(({ href, title, subTitle, icon }) => {
      const Icon = icons[icon];
      return (
        <LinkItem key={href}>
          <Link link={href}>
            {Icon && <Icon />}
            <Title>{title}</Title>
          </Link>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
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
      subTitle: PropTypes.string,
      icon: PropTypes.oneOf(Object.keys(icons)),
    })
  ).isRequired,
};

export default LinkBar;
