import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
