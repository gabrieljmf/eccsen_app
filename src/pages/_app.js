import { Component } from "react";
import NavBar from "../components/navbar";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NavBar />
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
