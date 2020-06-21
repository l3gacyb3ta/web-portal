import styled from "styled-components";

export const Wrapper = styled.ul`
  background-color: grey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  list-style: none;
  padding-left: 0;
`;

export const Project = styled.li`
  background-image: url(${({ image }) => image});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16pt;
`;

export const SubTitle = styled.h4`
  margin: 0;
  text-align: center;
  font-size: 12pt;
  background-color: #f00000;
  border-radius: 20px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
`;
