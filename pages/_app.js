import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
