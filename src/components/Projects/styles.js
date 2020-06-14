import styled from "styled-components";

export const Wrapper = styled.ul`
  background-color: grey;
`;

export const Project = styled.li`
  background-image: url(${({ image }) => image});
`;

export const Title = styled.h3``;

export const SubTitle = styled.h4``;
