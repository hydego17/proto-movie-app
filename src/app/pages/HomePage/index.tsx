import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { Box, useDisclosure } from '@chakra-ui/react';

import { useGetMovieId, useQueryParam } from 'app/hooks/url';

import { PopularMovies } from './module/PopularMovies';
import { HighRatedMovies } from './module/HighRatedMovies';
import { ModalDetail } from './components/ModalDetail';

export function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const movieId = useGetMovieId();
  const { deleteQueryParam } = useQueryParam();

  useEffect(() => {
    if (movieId) {
      onOpen();
    }
  }, [movieId, onOpen]);

  const onModalClose = () => {
    deleteQueryParam();
    onClose();
  };

  return (
    <StyledHomePage>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Box>
        <Box as="section">
          <PopularMovies />

          <HighRatedMovies />

          <ModalDetail isOpen={isOpen} onClose={onModalClose} />
        </Box>
      </Box>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div``;
