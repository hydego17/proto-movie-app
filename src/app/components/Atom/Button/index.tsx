import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export function Button({ children, ...rest }: ButtonProps) {
  return (
    // @ts-ignore
    <ChakraButton colorScheme="main" {...rest}>
      {children}
    </ChakraButton>
  );
}
