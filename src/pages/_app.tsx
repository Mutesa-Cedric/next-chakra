import { ChakraProvider } from '@chakra-ui/react'


import theme from '../theme'
import { AppProps } from 'next/app'
import '../../public/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Chakra UI | Coding Challenge</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
