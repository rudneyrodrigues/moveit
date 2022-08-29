import { Flex, Text } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { ExperienceBar } from "./components/ExperienceBar";

export const App = (): JSX.Element => {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
    >
      <Header />

      <Flex
        flex="1"
        flexDir="column"
        w="full"
        maxW="992px"
        mx="auto"
        p="2rem"
      >
        <ExperienceBar />
        
        <Text>Ola mundo</Text>
      </Flex>
    </Flex>
  )
}
