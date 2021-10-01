import { Box, Heading, Container } from '@chakra-ui/react';

export function Header() {
  return (
    <Box borderBottomWidth="1px">
      <Container p="2" maxW="container.xl">
        <Heading fontSize="lg">Stockbit Movie</Heading>
      </Container>
    </Box>
  );
}
