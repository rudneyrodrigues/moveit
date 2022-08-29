import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


export const theme = extendTheme({
  colors: {},
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Rajdhani', sans-serif",
  },
  styles: {
    global: {
      body: {},
    }
  },
  config,
});
