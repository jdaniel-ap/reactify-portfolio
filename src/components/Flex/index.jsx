import React from "react";
import { Container } from "./styles";

function Flex({ children, direction, align, wrap, gap, justify, margin }) {
  return (
    <Container
      direction={direction}
      align={align}
      wrap={wrap}
      gap={gap}
      justify={justify}
      margin={margin}
    >
      {children}
    </Container>
  );
}

export default Flex;
