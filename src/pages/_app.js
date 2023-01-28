import {SSRProvider} from "@react-aria/ssr";
import {SessionProvider} from "next-auth/react";
import AppLayout from "../layouts/AppLayout";
import {ThemeProvider} from "styled-components";
import {theme} from "/src/styles/variables";
import {useState, useEffect} from "react";
//* Global Style Import That is injected into the components
import GlobalStyle from "./../styles/GlobalStyles";

// ! Main App Component Every page is rendered through this component
export default function App({
                              Component,
                              pageProps: {session, ...pageProps},
                            }) {
  //! Probably shouldn't have (known to skip over server side rendering) -|
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  //! take all this out with the above code                              |
  if (typeof window === "undefined") {
    return <></>;
  } else {
    // * This is if the component has a getLayout method attached to it, you can look at an example in the /about and /sign-in page
    if (Component.getLayout) {
      return (
        <SessionProvider session={session}>
          <SSRProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle/>
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
            <GlobalStyle/>
            <AppLayout title={"PokeDex"}>
              <Component {...pageProps} />
            </AppLayout>
          </ThemeProvider>
        </SSRProvider>
      </SessionProvider>
    );
  }
}
