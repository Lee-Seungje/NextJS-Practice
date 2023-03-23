import { Fragment } from "react";
import NavBar from "../components/NavBar";

interface props {
  Component: any;
  pageProps: any;
}

export function GlobalApp({ Component, pageProps }: props) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <h1>hello</h1>
    </Fragment>
  );
}
