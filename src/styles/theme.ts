import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#EDEBF9',
      100: '#CAC4ED',
      200: '#A69DE2',
      300: '#8375D6',
      400: '#5F4ECA',
      500: '#4635B1',
      600: '#36298A',
      700: '#271D62',
      800: '#17123B',
      900: '#080614',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800'
      }
    }
  }
})
