import { breakpoints } from './breakpoints';
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      background: '#1b1d1e',
      input: '#141414',
      icon: '#505050',
      placeholder: '#505050',
      light: '#EEEEF2',
    },
    purple: {
      primary: '#7900ff',
      hover: '#553CC0',
      focus: '#7900ff',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      },
      html: {
        scrollBehavior: 'smooth'
      }
    }
  }
})

export default theme
