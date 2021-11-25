import { useMemo } from 'react';
import { Box, Heading, Divider } from '@chakra-ui/react';

import { Card, Carousel } from 'app/components';
import { useWindowSize } from 'app/hooks';
import { IMovies } from 'types';

type MovieListProps = {
  title: string;
  movies: IMovies;
};

const responsive = {
  0: { items: 2 },
  600: { items: 3 },
  1024: { items: 6 },
};

export const MovieList = ({ title, movies }: MovieListProps) => {
  const { isMobile } = useWindowSize();

  const movieItems = useMemo(
    () => movies.map((movie) => <Card key={movie.id} movie={movie} />),
    [movies]
  );

  return (
    <Box as="section" py="6">
      <Heading fontSize="lg">{title}</Heading>

      <Divider my="4" />

      <Box mx={{ base: '-6', md: '0' }}>
        <Carousel
          infinite
          items={movieItems}
          responsive={responsive}
          disableDotsControls
          paddingLeft={isMobile ? 60 : 0}
          paddingRight={isMobile ? 60 : 0}
          touchMoveDefaultEvents={false}
        />
      </Box>
    </Box>
  );
};
