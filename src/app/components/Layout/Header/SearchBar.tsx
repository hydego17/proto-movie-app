import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  InputGroup,
  Input,
  CloseButton,
  InputRightElement,
  Box,
  Stack,
  Heading,
  Image,
  Fade,
  Center,
  Spinner,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

import { useSearchMoviesQuery } from 'services/movies';

export function SearchBar() {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('');
  const isInputFilled = searchValue.length > 0;

  const [debouncedValue, setDebouncedValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const debounced = useDebouncedCallback((value) => {
    setDebouncedValue(value);
  }, 500);

  // Start of side effects to handle show search result
  useEffect(() => {
    if (debouncedValue.length > 0) {
      setShowResult(true);
    }
    if (debouncedValue.length === 0) {
      setShowResult(false);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (location.pathname) {
      setShowResult(false);
    }
  }, [location.pathname]);
  // End of side effects to handle show search result

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    debounced(e.target.value);
  }

  function onReset() {
    // clear input
    setSearchValue('');
    setDebouncedValue('');
  }

  return (
    <>
      <InputGroup w={{ md: '350px' }} position="relative">
        <Input
          w="full"
          type="text"
          rounded="md"
          fontSize="sm"
          placeholder="Search Movies"
          value={searchValue}
          onChange={onChange}
          autoFocus={false}
        />
        <InputRightElement
          children={
            isInputFilled ? (
              <CloseButton size="sm" onClick={onReset} color="#565f68" />
            ) : (
              <BiSearch
                style={{
                  color: '#CBD5E0',
                }}
              />
            )
          }
        />

        <Box zIndex={2}>
          {showResult && <SearchBarResult searchValue={debouncedValue} />}
        </Box>
      </InputGroup>
    </>
  );
}

type SearchBarResultProps = {
  searchValue: string;
};

function SearchBarResult({ searchValue }: SearchBarResultProps) {
  const { data, isLoading } = useSearchMoviesQuery(searchValue);

  const bgColor = mode('white', 'gray.700');
  const bgColorHover = mode('gray.50', 'gray.800');

  if (isLoading) {
    return (
      <Fade in>
        <Center
          display="flex"
          position="absolute"
          bgColor={bgColor}
          w="full"
          top="100%"
          left="0"
          right="0"
          rounded="md"
          h="150px"
          shadow={{ md: 'lg' }}
        >
          <Spinner />
        </Center>
      </Fade>
    );
  }

  if (!data) {
    return null;
  }

  const { results } = data;

  const movies = results.slice(0, 20);

  return (
    <Fade in>
      <Box
        display="flex"
        position="absolute"
        bgColor={bgColor}
        w="full"
        top="120%"
        left="0"
        right="0"
        rounded="md"
        maxH={{ base: '70vh', md: '70vh' }}
        overflowY="hidden"
        shadow="lg"
      >
        <Stack
          flex="1"
          py="4"
          px={['2', '4']}
          spacing="2"
          overflowY="auto"
          className="custom-scrollbar"
        >
          {movies.length > 0 ? (
            <>
              {movies.map((movie) => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <Stack
                      borderTopWidth="1px"
                      py="2"
                      px="2"
                      spacing="4"
                      direction="row"
                      align="center"
                      _hover={{
                        bgColor: bgColorHover,
                      }}
                    >
                      <Box as="figure" flex="20%">
                        <Image
                          rounded="sm"
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Box>

                      <Box flex="80%" py="1">
                        <Heading
                          as="h4"
                          fontSize="sm"
                          transition="color 0.25s ease"
                          _hover={{
                            color: 'main.500',
                          }}
                          noOfLines={2}
                        >
                          {movie.title} ({movie.release_date.substr(0, 4)})
                        </Heading>
                      </Box>
                    </Stack>
                  </Link>
                );
              })}
            </>
          ) : (
            <Stack>
              <Box py="2">
                <Heading as="h4" fontSize="sm" textAlign="center">
                  No movies found
                </Heading>
              </Box>
            </Stack>
          )}
        </Stack>
      </Box>
    </Fade>
  );
}
