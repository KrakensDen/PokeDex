import "../../styles/globals.css";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import "/styles/layout.css";

export default function App({ Component, pageProps }) {

  if(Component.getLayout) {
    return (

      Component.getLayout(
      <Component {...pageProps} />
      )

    )
  }


  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
