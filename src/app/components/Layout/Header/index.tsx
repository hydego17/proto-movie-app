import { useHistory } from 'react-router-dom';
import { Box, Heading, Container, HStack } from '@chakra-ui/react';

import { useWindowSize } from 'app/hooks';

import { SearchBar } from './SearchBar';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export function Header() {
  const history = useHistory();

  const { isMobile } = useWindowSize();

  function goToIndex() {
    history.push('/');
  }

  return (
    <Box borderBottomWidth="1px">
      <Container
        py="2"
        maxW="container.xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gridGap="4"
      >
        <Box role="button" cursor="pointer" py="4" onClick={goToIndex}>
          <Heading fontSize="xl">Stockbit Movie</Heading>
        </Box>

        <HStack>
          {!isMobile && <SearchBar />}

          <ColorModeSwitcher />
        </HStack>
      </Container>

      {isMobile && (
        <Box pb="4" px="4">
          <SearchBar />
        </Box>
      )}
    </Box>
  );
}
