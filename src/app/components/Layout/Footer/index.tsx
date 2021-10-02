import {
  Box,
  Text,
  Container,
  Stack,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <Box borderTopWidth="1px" mt="8">
      <Container p="2" maxW="container.xl" py="6">
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sm">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </Text>

          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="https://github.com/hydego17/proto-movie-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
