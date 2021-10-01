import { Container } from '@chakra-ui/react';

import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }) {
  return (
    <>
      <Header />

      <Container as="main" p="4" maxW="container.xl" minH="100vh">
        {children}
      </Container>

      <Footer />
    </>
  );
}
