import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia) {
      return setPrefersDarkMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  return <Component {...pageProps} prefersDarkMode={prefersDarkMode} />;
}

export default App;
