import "../../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import AppLayout from "../layouts/AppLayout";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <SSRProvider>
        {Component.getLayout(<Component {...pageProps} />)}
      </SSRProvider>
    );
  }

  return (
    <SSRProvider>
      <AppLayout title={"PokeDex"}>
        <Component {...pageProps} />
      </AppLayout>
    </SSRProvider>
  );
}
