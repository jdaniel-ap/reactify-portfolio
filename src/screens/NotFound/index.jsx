import React from "react";
import { Container } from "./styles";
import Text from "../../components/Text";

function NotFound() {
  return (
    <Container>
      <Text weight="700" size="2xl" family="secondary" align="center">
        Error 404
      </Text>
      <Text weight="400" size="md" family="secondary" align="center">
        Woops. Looks like this page doesn't exist
      </Text>
    </Container>
  );
}

export default NotFound;
