import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { App } from './App';

import { theme } from './styles/theme';
import { ChallengesProvider } from './contexts/ChallengesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChallengesProvider>
      <ChakraProvider theme={theme}>
        <App />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </ChallengesProvider>
  </React.StrictMode>
)
