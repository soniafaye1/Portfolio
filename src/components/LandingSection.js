import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Sonia!";
const bio1 = "A Frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <div>
      <VStack align="center">
        <Avatar name="me" src="Tabby_AC.png" />

        <h3> {greeting}</h3>
        <Heading>
          <h2>{bio1}</h2>
          <h2>{bio2}</h2>
        </Heading>
      </VStack>
    </div>
  </FullScreenSection>

  // return (
  //
  // );
);

export default LandingSection;
