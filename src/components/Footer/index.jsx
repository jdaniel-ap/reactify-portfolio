import React from "react";
import { Heart } from "@phosphor-icons/react";

import Text from "../Text";
import { colors } from "../../utils/colors";
import { Container } from "./styles";
import Flex from "../Flex";
import { data } from "../../utils/data";

function Footer() {
  const year = new Date().getFullYear();
  const city = data.city;
  return (
    <Container>
      <Flex align="center" gap="0.5">
        <Text color={colors.gray} size="sm">
          Made with
        </Text>
        <Heart weight="fill" fill={colors.gray} />
      </Flex>
      <Text color={colors.gray} size="sm">
        {city} {year}
      </Text>
    </Container>
  );
}

export default Footer;
