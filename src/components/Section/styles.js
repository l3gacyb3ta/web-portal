import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ dark }) =>
    dark ? "rgb(50, 50, 50)" : "rgb(200, 200, 200)"};
  margin-bottom: 20px;
  padding: 16px;
`;
