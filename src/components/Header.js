import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sonia.slobodsky@mail.mcgill.ca",
    title: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com/soniafaye1",
    title: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sonia-slobodsky/",
    title: "LinkedIn",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((item, idx) => {
              return (
                <a href={item.url} key={idx}>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                id="contactme-section"
                href="/#contact-me"
                onClick={handleClick()}
              >
                <h3>Contact Me</h3>
              </a>
              <a
                id="projects-section"
                href="/#projects"
                onClick={handleClick()}
              >
                <h3>Projects</h3>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
