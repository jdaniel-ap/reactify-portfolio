import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CaretLeft } from "@phosphor-icons/react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import Flex from "../../components/Flex";
import Text from "../../components/Text";
import { data } from "../../utils/data";
import { colors } from "../../utils/colors";
import {
  Container,
  DescriptionBox,
  Grid,
  ImagePreview,
  Logo,
  ProductHero,
  Box,
  Link,
} from "./styles";
import Footer from "../../components/Footer";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const CARET_SIZE = 20;

const cardAnimation = {
  initial: { scale: 0.0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};

const slideAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
function Project() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams();
  const project = data.projects.find((item) => item.id === id);
  const navigate = useNavigate();
  const thumbnailsRef = React.useRef(null);

  const handleNavigator = () => {
    if (window.location.search && window.location.search.includes("y=")) {
      const previousPosition = window.location.search.split("=")[1];
      window.scrollTo({
        top: previousPosition,
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (!project) {
      navigate("/404");
    }
    window.scrollTo({ top: 0 });
  }, [navigate, project]);

  return (
    <Container>
      <Box>
        <Flex direction="column" gap="2">
          <motion.div
            {...slideAnimation}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          >
            <Flex gap="1" align="center">
              <CaretLeft
                weight="bold"
                className="pointer"
                width={CARET_SIZE}
                height={CARET_SIZE}
                fill={colors.gray}
                onClick={handleNavigator}
              />
              <Text size="lg" weight="500" color={colors.gray}>
                {project?.title}
              </Text>
            </Flex>
          </motion.div>
          <motion.div
            {...slideAnimation}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >
            <Text size="xl">{project?.subtitle}</Text>
          </motion.div>
        </Flex>
      </Box>
      <ProductHero
        color={project?.color}
        {...cardAnimation}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        <Logo src={project?.image} alt={project?.title} />
      </ProductHero>
      <Box>
        <Flex
          direction="column"
          align="start"
          margin="3rem 0 0"
          gap="3"
          wrap="wrap"
        >
          {project?.details &&
            Object.keys(project?.details).map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{ ...slideAnimation }}
              >
                <DescriptionBox
                  {...slideAnimation}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.2 + index / 10,
                  }}
                >
                  <Flex direction="column" gap="1">
                    <Text size="rg" weight="500" color={colors.gray}>
                      {section.charAt(0).toUpperCase() +
                        section.slice(1, section.length)}
                    </Text>
                    <Text size="rg" weight="300" height="2rem">
                      {project?.details[section]}
                    </Text>
                  </Flex>
                </DescriptionBox>
              </motion.div>
            ))}
          <Flex gap="1">
            {project?.links &&
              Object.entries(project.links).map(([field, url]) => (
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Text
                    size="rg"
                    weight="500"
                    align="center"
                    color={colors.gray}
                  >
                    {field}
                  </Text>
                </Link>
              ))}
          </Flex>
          {project?.assets?.length && (
            <Text size="rg" weight="500" align="center" color="500">
              Gallery
            </Text>
          )}
        </Flex>
      </Box>
      <Grid>
        {project?.assets?.map((image, index) => {
          const millisecond = index / 50;
          return (
            <motion.div
              key={image}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: millisecond }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <ImagePreview
                {...cardAnimation}
                transition={{
                  delay: millisecond,
                  duration: 0.15,
                }}
                image={image}
                onClick={() => {
                  setIsViewerOpen(true);
                  setCurrentImage(index);
                }}
              />
            </motion.div>
          );
        })}
      </Grid>
      <Lightbox
        plugins={[Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
        index={currentImage}
        open={isViewerOpen}
        close={() => setIsViewerOpen(false)}
        slides={project?.assets?.map((item) => ({ src: item }))}
      />
      <Footer />
    </Container>
  );
}

export default Project;
