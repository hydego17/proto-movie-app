import { Box, Center, Heading, Image, Fade, Tag } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

import { IMovie } from 'types';
import { useHover } from 'app/hooks';
import { useQueryParam } from 'app/hooks/url';

type CardProps = {
  movie: IMovie;
};

export function Card({ movie }: CardProps) {
  const { hovered, eventHandlers } = useHover();
  const { addQueryParam } = useQueryParam();

  const onSelect = (id: number) => {
    addQueryParam(id);
  };

  return (
    <Box
      key={movie.id}
      mx="2"
      rounded="md"
      overflow="hidden"
      position="relative"
      cursor="pointer"
      onClick={() => onSelect(movie.id)}
      {...eventHandlers}
    >
      <Box as="figure" h="full">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          h="full"
          w="full"
          minH={{ base: '150px', md: '300px' }}
        />
      </Box>

      <Box position="absolute" top="0" right="0" p="1">
        <Tag size="sm" variant="solid" colorScheme="teal">
          <HiStar /> {movie.vote_average}
        </Tag>
      </Box>

      {hovered && (
        <Fade in={hovered}>
          <Box position="absolute" inset="0" bgColor="rgba(0,0,0,0.65)" p="2">
            <Center h="full" mx="2">
              <Heading as="h3" fontSize="md" color="white" textAlign="center">
                {movie.title} <br /> ({movie.release_date.substr(0, 4)})
              </Heading>
            </Center>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
