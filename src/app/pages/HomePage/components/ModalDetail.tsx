import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';
import { Spinner, Image, Text, Box, Flex, Tag, Button } from '@chakra-ui/react';

import { useGetMovieDetailQuery } from 'services/movies';
import { useGetMovieId } from 'app/hooks/url';

type ModalDetailProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ModalDetail({ isOpen, onClose }: ModalDetailProps) {
  const movieId = useGetMovieId();
  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);

  if (!movie) return null;

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {movie.title} ({movie.release_date.substr(0, 4)})
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Spinner />
            ) : (
              <Flex
                flexDir={{ base: 'column', md: 'row' }}
                gridGap={{ base: '4', md: '2' }}
              >
                <Box
                  as="figure"
                  h={{ base: 'auto', md: '400px' }}
                  flexBasis={{ md: '35%' }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                    alt={movie.title}
                    h="full"
                  />
                </Box>

                <Box flex="1">
                  <InfoItem label="Overview">
                    <Text>{movie.overview}</Text>
                  </InfoItem>

                  <InfoItem label="Genre">
                    <Flex gridGap="2" wrap="wrap">
                      {movie.genres.map((genre) => (
                        <Tag size="sm" key={genre.id}>
                          {genre.name}
                        </Tag>
                      ))}
                    </Flex>
                  </InfoItem>

                  <InfoItem label="Rating">
                    <Text>
                      {movie.vote_average} ({movie.vote_count})
                    </Text>
                  </InfoItem>

                  <InfoItem label="Release Date">
                    <Text>{movie.release_date}</Text>
                  </InfoItem>
                </Box>
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
            <Button mt="4">View Detail</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

type InfoItemProps = {
  label: string;
  children: React.ReactNode;
};

const InfoItem = ({ label, children }: InfoItemProps) => {
  return (
    <Box pb="2">
      <Text fontWeight="semibold" mb="0.5">
        {label}
      </Text>
      {children}
    </Box>
  );
};
