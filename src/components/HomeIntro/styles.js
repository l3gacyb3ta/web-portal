import styled from "styled-components";

import { base } from "../base/type";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Intro = styled.p`
  ${base}
  color: white;
  margin: 0;
  margin-bottom: 1em;
`;
