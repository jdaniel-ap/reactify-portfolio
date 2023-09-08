import { motion } from "framer-motion";
import styled from "styled-components";
import { data } from "../../utils/data";

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 1rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  margin: auto;
  padding-block: 50px;
  width: 60vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;

export const Hero = styled.section`
  background-color: #f7fafc;
  padding: 0 50px 60px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem 60px;
  }
`;

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  padding-bottom: 2rem;
  width: 100%;
`;

export const Grid = styled.div`
  column-gap: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3, 20vw);
  margin: 4rem 0 5rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 26.66vw);
  }
`;

export const Card = styled(motion.div)`
  background-color: ${({ color = "orangered" }) => color};
  border-radius: 1.5vw;
  cursor: pointer;
  display: grid;
  height: 20vw;
  overflow: hidden;
  place-content: center;
  position: relative;
  user-select: none;
  width: 20vw;

  @media only screen and (max-width: 768px) {
    height: 26vw;
    width: 26vw;
  }
`;

export const HoverCardContent = styled(motion.div)`
  align-items: flex-end;
  background-color: #00000066;
  display: flex;
  height: 100%;
  left: 0;
  line-height: 5rem;
  position: absolute;
  top: 0;
  width: 100%;

  p {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    padding-left: 1.5rem;
    font-family: "Manrope", sans-serif;
  }
`;

export const Logo = styled.img`
  height: ${({ width = data.logosGridSize || 10 }) => width}vw;
  width: ${({ width = data.logosGridSize || 10 }) => width}vw;
`;

export const Box = styled.div`
  line-height: 2rem;
  width: 60vw;

  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const TechCard = styled.img`
  width: 2.5rem;
`;

export const SocialBtn = styled.a`
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 2rem;
  padding: 0.2rem;
  display: grid;
  place-content: center;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  img {
    width: 30px;
  }
`;
