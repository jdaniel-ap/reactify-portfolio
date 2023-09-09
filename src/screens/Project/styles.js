import { motion } from "framer-motion";
import styled from "styled-components";
import { data } from "../../utils/data";

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  padding: 100px 50px 50px;
  width: 100%;

  svg {
    fill: var(--grey-500);
  }
`;

export const Link = styled.a`
  color: var(--grey-300);
  text-decoration: underline;
  text-transform: capitalize;
`;

export const Card = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export const Box = styled.section`
  width: 60vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const ProductHero = styled(motion.section)`
  background-color: ${({ color = "#fff" }) => color};
  border-radius: 20px;
  display: grid;
  height: 30vw;
  margin-top: 1.5rem;
  place-content: center;
  user-select: none;
  width: 60vw;

  @media only screen and (max-width: 768px) {
    height: 40vw;
    width: 80vw;
  }
`;

export const Logo = styled.img`
  height: ${({ width = data.logosHeroSize || 20 }) => width}vw;
  width: ${({ width = data.logosHeroSize || 20 }) => width}vw;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 19vw);
  justify-content: space-between;
  margin-top: 2rem;
  row-gap: 2rem;
  width: 60vw;
`;

export const ImagePreview = styled(motion.div)`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  cursor: pointer;
  height: 19vw;
  transition: 0.4s;
  width: 19vw;

  :hover {
    filter: brightness(0.9);
  }
`;

export const DescriptionBox = styled(motion.div)`
  max-width: 900px;
  width: 100%;
`;
