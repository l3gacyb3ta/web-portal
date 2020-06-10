import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled, { css } from "styled-components";

import { base } from "../base/type";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-right: 32px;
  margin-bottom: 32px;
`;

export const LinkBase = css`
  ${base}

  display: flex;
  border: 2px solid white;
  border-radius: 4px;
  padding: 4px;
  color: white;
  text-transform: uppercase;
`;

export const ExternalLink = styled(OutboundLink)`
  ${LinkBase}
`;

export const InternalLink = styled(Link)`
  ${LinkBase}
`;

export const Title = styled.span`
  margin: 0 4px;
`;
