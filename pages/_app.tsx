import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/styles";
import { theme } from "theme";
import { GlobalStyle } from "GlobalStyle";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eyerene</title>
      </Head>

      <GlobalStyle />
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <EmotionThemeProvider theme={theme}>
            <Component {...pageProps} />
          </EmotionThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
