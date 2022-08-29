import { Sun, Moon } from 'phosphor-react';
import { Box, Flex, IconButton, Image, useColorMode } from "@chakra-ui/react";

import LogoImg from '../assets/images/logo-full.svg';

export const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      h={20}
      px={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      _dark={{
        borderColor: "gray.700"
      }}
    >
      <Flex
        h={20}
        gap={4}
        mx="auto"
        maxW="1120px"
        align="center"
        justify="space-between"
      >
        <Image
          src={LogoImg}
          w="200px"
        />

        <IconButton
          aria-label="Alterar tema"
          icon={
            colorMode === "dark"
            ? <Sun weight="fill" size={20} />
            : <Moon weight="fill" size={20} />
          }
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  )
}
