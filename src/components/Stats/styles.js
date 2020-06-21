import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Stat = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
`;

export const Value = styled.p`
  font-size: 24pt;
  margin: 0;
  font-weight: bold;
  color: brown;
`;

export const Key = styled.p`
  margin: 0;
  font-weight: bold;
  color: brown;
`;
