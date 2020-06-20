import styled, { css } from "styled-components";

import LinkComponent from "../Link";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justfy-content: center;
`;

export const Logo = styled.h1`
  margin-left: 5px;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justfy-content: center;
  margin-left: auto;
  padding: 5px;
`;

export const LinkItem = styled.li`
  margin: 10px;
  list-style: none;
  ${({ feature }) =>
    feature &&
    css`
      font-weight: bold;
    `}
`;
export const Link = styled(LinkComponent)``;
