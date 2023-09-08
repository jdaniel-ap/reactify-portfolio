import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: 800px) {
  }

  @media only screen and (min-width: 1100px) {
  }
`;

export const Card = styled.div`
  background-color: ${({ isVisited }) => (isVisited ? 'red' : '#c6c6c6')};
  border-radius: 1rem;
  border: solid 1px #c6c6c6;
  height: 100vh;
  margin: 1rem;
  width: 100%;

  @media only screen and (min-width: 1100px) {
    width: 200px;
    height: 300px;
  }
`;
