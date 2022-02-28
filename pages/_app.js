import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
