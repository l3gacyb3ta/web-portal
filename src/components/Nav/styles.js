import styled, { css } from "styled-components";

import LinkComponent from "../Link";

export const Wrapper = styled.nav``;

export const Logo = styled.h1``;

export const Links = styled.ul``;

export const LinkItem = styled.li`
  ${({ feature }) =>
    feature &&
    css`
      font-weight: bold;
    `}
`;
export const Link = styled(LinkComponent)``;
