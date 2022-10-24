import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"


const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
