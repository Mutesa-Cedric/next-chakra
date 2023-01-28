import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      "*": {
        borderColor: "gray.700",
        // color: 'white'
      },

      body: {
        bg: 'body-bg',
      },
    }),
    
  },
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
      'body-bg': {
        default: '#16161D',
        _dark: '#0F0F1B',
      }
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
})

export default theme
