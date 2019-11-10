import "normalize.css/normalize.css";
import "../styles/index.css";
import "../styles/App.css";

import Head from "next/head";
import { AppContext } from "next/app";

export default ({ Component, pageProps }: AppContext & { pageProps: any }) => (
  <>
    <Head>
      <title>GitHub Contributions Chart Generator</title>
      <meta
        name="description"
        content="See all of your GitHub contributions in one image!"
      />
    </Head>
    <Component {...pageProps} />
  </>
);
