import {
  Box,
  Divider,
  Stack,
  Skeleton,
  SimpleGrid,
  SkeletonText,
} from '@chakra-ui/react';

import { useWindowSize } from 'app/hooks';

export const MovieSkeleton = () => {
  const { isDesktop } = useWindowSize();
  const skeletonCount = isDesktop ? 6 : 3;
  return (
    <Box py="6">
      <SkeletonText noOfLines={2} width="20%" />

      <Divider my="4" />

      <SimpleGrid columns={{ base: 3, lg: 6 }} spacing={6}>
        {[...Array(skeletonCount)].map((x, i) => (
          <Stack spacing={4} key={i}>
            <Skeleton height={{ base: 150, md: 300 }} rounded="md" />
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};
