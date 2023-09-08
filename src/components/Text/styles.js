import styled, { css } from "styled-components";

const sizes = {
  xs: 11,
  sm: 14,
  rg: 18,
  md: 20,
  lg: 24,
  xl: 32,
  "2xl": 62,
};

export const Container = styled.p`
  ${({
    size = "rg",
    weight = "400",
    color = "#444444",
    align = "left",
    height = "normal",
    family,
  }) => css`
    color: ${color};
    font-size: ${sizes[size]}px;
    font-weight: ${weight};
    line-height: ${height};
    text-align: ${align};
    font-family: ${family === "secondary" ? "Manrope" : "Poppins, sans-serif"};
  `}
`;
