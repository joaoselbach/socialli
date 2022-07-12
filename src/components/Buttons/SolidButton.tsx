import { Button as ChakraButton, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  fontSize: string
  px: string
  py: string
}

export const SolidButton = ({ children, fontSize, py, px }: ButtonProps) => {
  return (
    <ChakraButton
      px={px}
      py={py}
      fontSize={fontSize}
      bgColor="purple.primary"
      textTransform="uppercase"
      gap=".5rem"
      alignItems="center"
      fontWeight="bold"
      transition="0.2s all ease"
      filter="drop-shadow(0px 0px 10px rgba(77, 7, 227, 0.7))"
      _hover={{ filter: 'drop-shadow(0px 0px 14px rgba(77, 7, 227, 0.7))' }}
      _active={{ opacity: 0.9 }}
      _focus={{ border: 'none' }}
    >
      <Image width="1.25rem" src="/images/whatsapp.svg" />
      {children}
    </ChakraButton>
  )
}
