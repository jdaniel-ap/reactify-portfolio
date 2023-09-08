import React from 'react';
import { Card, Container } from './styles';

function Test() {
  return (
    <Container>
      {Array.from({ length: 10 }).map((item, index) => (
        <Card key={index} isVisited={index % 2 === 0} />
      ))}
    </Container>
  );
}

export default Test;
