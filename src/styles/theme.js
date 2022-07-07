import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./global";

import Head from "next/head";

const Theme = ({ children }) => (
  <>
    <Head>
      <title>Vitor Borges</title>
      <link rel="icon" type="image/png" href="/icon.png?" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);

export default Theme;
