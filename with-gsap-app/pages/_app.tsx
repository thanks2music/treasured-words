import type { AppProps } from "next/app";
import "modern-css-reset/dist/reset.min.css";
import "../App.sass";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
