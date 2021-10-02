/**
 *
 * MovieDetailPage
 *
 */
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import {
  Spinner,
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

import { useGetMovieDetailQuery } from 'services/movies';
import { useParamsId } from 'app/hooks/url';

export function MovieDetailPage() {
  const movieId = useParamsId();
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) return null;

  return (
    <StyledPage>
      <Helmet>
        <title>Detail</title>
        <meta name="description" content="Movie Detail" />
      </Helmet>

      <Box as="section" className="wrapped-full-width" position="relative">
        <Box
          as="figure"
          h="500px"
          position="absolute"
          inset="0"
          className="overlay"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            h="full"
            w="full"
            objectFit="cover"
          />
        </Box>

        <Container maxW="container.xl" px="4">
          <Flex
            position="relative"
            h="500px"
            gridGap={{ base: '4', md: '8' }}
            py={{ md: '10' }}
            align={{ base: 'center', md: 'initial' }}
          >
            <Box
              as="figure"
              display={{ base: 'none', md: 'block' }}
              borderColor="white"
              borderWidth="2px"
              flexBasis="25%"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                objectFit="cover"
                h="full"
                w="full"
              />
            </Box>

            <Box as="article" color="white" flex="1" p={{ md: '6' }} px="4">
              <Heading fontSize="3xl" pb="1">
                {movie.title} ({movie.release_date.substr(0, 4)})
              </Heading>

              <Text pb="4">{movie.release_date}</Text>

              <Flex gridGap="2" wrap="wrap" pb="4">
                {movie.genres.map((genre) => (
                  <Text fontSize="sm" fontWeight="bold" key={genre.id}>
                    {genre.name}
                  </Text>
                ))}
              </Flex>

              <HStack pb="4">
                <CircularProgress
                  value={movie.vote_average * 10}
                  color="green.400"
                  size="65px"
                  thickness="6px"
                >
                  <CircularProgressLabel fontSize="lg">
                    {movie.vote_average}
                  </CircularProgressLabel>
                </CircularProgress>

                <Text fontWeight="bold">
                  User Score <br />
                  <Text as="small">({movie.vote_count} votes)</Text>
                </Text>
              </HStack>

              <Text fontStyle="italic" pb="4">
                {movie.tagline}
              </Text>

              <Heading as="h3" fontSize="lg" pb="2">
                Overview
              </Heading>
              <Text>{movie.overview}</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </StyledPage>
  );
}

const StyledPage = styled.div``;
