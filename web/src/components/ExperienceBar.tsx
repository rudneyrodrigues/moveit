import { Box, Flex, Text } from "@chakra-ui/react";
import { useChallenges } from "../hooks/useChallenges";

export const ExperienceBar = (): JSX.Element => {
  const { currentExperience, experienceNextToLevel } = useChallenges();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceNextToLevel;

  return (
    <Flex
      as="header"
      align="center"
    >
      <Text
        fontSize="1rem"
      >
        0 xp
      </Text>

      <Flex
        flex="1"
        height="4px"
        borderRadius="4px"
        bg="gray.300"
        mx="1.5rem"
        position="relative"
        _dark={{
          bg: "gray.700",
        }}
      >
        <Box
          height="4px"
          borderRadius="4px"
          bg="green.300"
          width={`${percentToNextLevel}`}
          _dark={{
            bg: "green.700",
          }}
        />

        <Text
          as="span"
          left={`${percentToNextLevel}`}
          fontSize="1rem"
        >
          {currentExperience} xp
        </Text>
      </Flex>

      <Text>0 xp</Text>
    </Flex>
  )
}
