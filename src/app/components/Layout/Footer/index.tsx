import { Box, Text, Container } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box borderTopWidth="1px">
      <Container p="2" maxW="container.xl">
        <Text>Copyright</Text>
      </Container>
    </Box>
  );
}
