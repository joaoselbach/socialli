import Head from 'next/head'

import { Box } from '@chakra-ui/react'
import { Form } from '~/containers/form'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Socialli - Records</title>
      </Head>
      <Box position="relative">
        <video
          src="/images/backgroundVideo.mp4"
          style={{
            position: 'absolute',
            zIndex: '-1',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: '0.5'
          }}
          loop
          muted
        />
        <Form />
      </Box>
    </>
  )
}

export default Home
