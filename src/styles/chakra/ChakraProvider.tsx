import { ChakraProvider as OriginalThemeProvider } from '@chakra-ui/react';

import { theme } from './theme';

export const ChakraProvider = ({ children }) => {
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};
