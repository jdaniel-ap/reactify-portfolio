import React from "react";
import { Heart } from "@phosphor-icons/react";

import Text from "../Text";
import { Container } from "./styles";
import Flex from "../Flex";
import { data } from "../../utils/data";

function Footer() {
  const year = new Date().getFullYear();
  const city = data.city;
  return (
    <Container>
      <Flex align="center" gap="0.5">
        <Text color="500" size="sm">
          Made with
        </Text>
        <Heart weight="fill" fill="500" />
      </Flex>
      <Text color="500" size="sm">
        {city} {year}
      </Text>
    </Container>
  );
}

export default Footer;
