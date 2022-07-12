import { useRouter } from 'next/router'

import { SolidButton } from '../Buttons/SolidButton'
import { Flex, Image, Box, Icon } from '@chakra-ui/react'
import { RiWhatsappFill } from 'react-icons/ri'

const Header = () => {
  const router = useRouter()

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      zIndex="99"
      w="100%"
      h="4.2rem"
      px={{ base: '1.5rem', m: '6rem' }}
      boxShadow="0px 8px 15px rgb(0 0 0 / 17%)"
      backdropFilter="blur(1.5rem)"
      bgColor="#1b1d1e63"
    >
      <Image
        src="/images/logo.svg"
        cursor="pointer"
        width="7rem"
        onClick={() => router.push('/')}
        transition="0.1s"
        _active={{ opacity: '0.7' }}
        />
      <SolidButton fontSize=".90rem" px="1.5rem" py="1.25rem">
        Whatsapp
      </SolidButton>
    </Flex>
  )
}

export default Header
