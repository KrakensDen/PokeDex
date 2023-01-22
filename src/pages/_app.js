import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { SessionProvider, useSession } from "next-auth/react";
import AppLayout from "../layouts/AppLayout";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "/src/styles/variables";
import { useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  :root {
    --default-bg-gradient: linear-gradient(95deg, #263238aa, #212121aa);
    --card-height: 11rem;
    --card-width: 8rem;
  }

  * {
    font-family: ${(props) => props.theme.fontFamily};
  }

  button {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bolder;
  }

  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.2;
    }
    100% {
      width: 400px;
      height: 400px;
      opacity: 0;
    }

  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    // * This is if the component has a getLayout method attached to it, you can look at an example in the /about and /sign-in page
    if (Component.getLayout) {
      return (
        <SessionProvider session={session}>
          <SSRProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {Component.getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </SSRProvider>
        </SessionProvider>
      );
    }

    //* This is the App wide Layout and Component
    return (
      <SessionProvider session={session}>
        <SSRProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppLayout title={"PokeDex"}>
              <Component {...pageProps} />
            </AppLayout>
          </ThemeProvider>
        </SSRProvider>
      </SessionProvider>
    );
  }
}
