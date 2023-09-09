import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Text from "../../components/Text";
import Flex from "../../components/Flex";

import { data } from "../../utils/data";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Header,
  Hero,
  HoverCardContent,
  Logo,
  SocialBtn,
  TechCard,
} from "./styles";
import Footer from "../../components/Footer";

const TECH_ICON_SIZE = 35;

const CARD_ANIMATION = {
  initial: { scale: 0.0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};

const HERO_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function Home() {
  const positionY = useRef();
  const [hoverElement, setHoverElement] = useState(null);
  const navigator = useNavigate();
  const user = data;

  useEffect(() => {
    const positionSetter = () => {
      positionY.current = window.scrollY;
    };
    document.addEventListener("scroll", positionSetter);

    return () => {
      document.removeEventListener("scroll", positionSetter);
    };
  }, []);

  return (
    <Container>
      <Hero>
        <Header>
          <Text weight="600" family="secondary">
            {`<${user.name} />`}
          </Text>
          <Text>Resume</Text>
        </Header>
        <Flex align="center" direction="column" gap="1">
          {user.avatar && (
            <motion.div
              onMouseLeave={() => setHoverElement(null)}
              {...CARD_ANIMATION}
              transition={{ delay: 0.2 }}
            >
              <Avatar src={user.avatar} />
            </motion.div>
          )}
          <motion.div
            {...HERO_ANIMATION}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          >
            <Text weight="700" size="xl" family="secondary">
              Hey, I'm {user.name}!
            </Text>
          </motion.div>
          <motion.div
            {...HERO_ANIMATION}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >
            <Text weight="400" size="lg" align="center">
              {user.slogan}
            </Text>
          </motion.div>
        </Flex>
        <Flex justify="center" gap="0.5">
          {user.socialMedia
            .filter((item) => item.url)
            .map((item) => (
              <SocialBtn
                color={item.background}
                href={item.url}
                key={item.url}
                target="__blank"
                rel="noopener"
              >
                <img
                  src={`/images/logos/social-media/${item.name}.svg`}
                  alt={item.name}
                />
              </SocialBtn>
            ))}
        </Flex>
      </Hero>

      <Grid>
        {data.projects.map((item, index) => (
          <Card
            key={item.id}
            onClick={() =>
              navigator(`/project/${item.id}?y=${positionY.current}`)
            }
            onMouseEnter={() => setHoverElement(item.title)}
            onMouseLeave={() => setHoverElement(null)}
            color={item.color}
            transition={{ delay: 0.3 + index / 10 }}
            {...CARD_ANIMATION}
          >
            <Logo src={item.image} alt={item.title} width={item.imageWidth} />
            <AnimatePresence>
              {hoverElement === item.title && (
                <HoverCardContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    {item.title}
                  </motion.p>
                </HoverCardContent>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </Grid>
      {Object.keys(user.details).map((field, index) => (
        <Box key={index}>
          <Flex direction="column" gap="1" margin={index && "2rem 0 0"}>
            <Text weight="500" size="md" color="500">
              {field.charAt(0).toUpperCase() + field.slice(1, field.length)}
            </Text>
            <Text size="rg" weight="300" height="2rem">
              {user.details[field]}
            </Text>
          </Flex>
        </Box>
      ))}
      <Box>
        <Flex direction="column" margin="2rem 0 0" gap="1">
          <Text weight="400" size="rg" color="500">
            I made apps with
          </Text>
          <Flex gap="1" wrap="wrap" margin="1rem 0 0">
            {user.tools.map((item, index) => (
              <TechCard
                key={index}
                src={`/images/techs/${item}.svg`}
                alt={item}
                width={TECH_ICON_SIZE}
                height={TECH_ICON_SIZE}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}

export default Home;
