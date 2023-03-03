import NavBar from "@components/NavBar";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
