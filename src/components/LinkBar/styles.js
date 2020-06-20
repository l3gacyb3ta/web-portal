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
  border-radius: 25px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #f00000;
  text-transform: uppercase;
`;

export const Title = styled.span`
  margin: 0 4px;
`;

export const SubTitle = styled.span`
  margin: 4px;
  color: #fff;
`;
