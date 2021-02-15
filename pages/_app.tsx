import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia) {
      return setPrefersDarkMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Inaccessibility</title>
      </Head>
      <Component {...pageProps} prefersDarkMode={prefersDarkMode} />
    </>
  );
}

export default App;
