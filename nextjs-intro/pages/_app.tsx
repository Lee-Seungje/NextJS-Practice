import Head from "next/head";
import Layout from "../components/Layout";
import "../src/global.css";

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
