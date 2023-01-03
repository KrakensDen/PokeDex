import "../../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import AppLayout from "../layouts/AppLayout";

export default function App({ Component, pageProps }) {
  // * This is if the component has a getLayout method atatched to it, you can look at an example in the /about and /sign-in page
  if (Component.getLayout) {
    return (
      <SSRProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </SSRProvider>
    );
  }

  //* This is the App wide Layout and Component
  return (
    <SSRProvider>
      <AppLayout title={"PokeDex"}>
        <Component {...pageProps} />
      </AppLayout>
    </SSRProvider>
  );
}
