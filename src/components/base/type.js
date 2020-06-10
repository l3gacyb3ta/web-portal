import { css } from "styled-components";

export const base = css`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const small = css`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const large = css`
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
