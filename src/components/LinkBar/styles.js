import styled from "styled-components";

import { base } from "../base/type";
import LinkComponent from "../Link";

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

export const Link = styled(LinkComponent)`
  ${base}

  display: flex;
  border: 2px solid white;
  border-radius: 4px;
  padding: 4px;
  color: white;
  text-transform: uppercase;
`;

export const Title = styled.span`
  margin: 0 4px;
`;

export const SubTitle = styled.span`
  margin: 0 4px;
`;
