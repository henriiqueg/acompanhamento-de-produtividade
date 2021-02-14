import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const theme = extendTheme({
  fonts: {
    body:
      "'Montserrat', 'Open Sans', 'Segoe UI', -apple-system, 'Helvetica Neue', sans-serif",
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
