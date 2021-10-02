import { useHistory } from 'react-router-dom';
import { Box, Heading, Container, HStack } from '@chakra-ui/react';

import { SearchBar } from './SearchBar';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export function Header() {
  const history = useHistory();

  function goToIndex() {
    history.push('/');
  }

  return (
    <Box borderBottomWidth="1px">
      <Container
        p="2"
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
          <SearchBar />
          <ColorModeSwitcher />
        </HStack>
      </Container>
    </Box>
  );
}
