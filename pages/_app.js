import { Fragment } from "react";
import { CalculatorProvider } from "../context/calculatorContext";
import Head from "next/head";
import "./styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Food App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CalculatorProvider>
        <Component {...pageProps} />
      </CalculatorProvider>
    </Fragment>
  );
}

export default MyApp;
