import type { AppProps } from "next/app";
import "../App.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
