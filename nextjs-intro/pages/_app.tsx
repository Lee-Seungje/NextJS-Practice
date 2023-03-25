import { Head } from "next/document";
import { Fragment } from "react";
import Layout from "../components/Layout";

interface props {
  Component: any;
  pageProps: any;
}

const GlobalApp = ({ Component, pageProps }: props) => {
  return (
    <Layout>
      <Head>
        <title>Home | Next Movies</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default GlobalApp;
