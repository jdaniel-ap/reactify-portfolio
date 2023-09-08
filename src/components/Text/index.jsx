import React from "react";
import { Container } from "./styles";

function Text({ children, size, weight, height, family, align, ...rest }) {
  return (
    <Container
      size={size}
      weight={weight}
      height={height}
      family={family}
      align={align}
      {...rest}
    >
      {children}
    </Container>
  );
}

export default Text;
