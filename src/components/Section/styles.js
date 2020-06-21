import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ dark }) => (dark ? "#000" : "#fff")};
  margin-bottom: 20px;
  padding: 16px;
`;
