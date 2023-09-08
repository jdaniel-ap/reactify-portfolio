import React from 'react';
import { Container } from './styles';

function Flex({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Flex;
