import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { Provider } from "next-auth/client";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
