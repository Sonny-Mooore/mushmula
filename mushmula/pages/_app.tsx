import React, {FC} from 'react'
import {AppProps} from 'next/app'
import isPropValid from "@emotion/is-prop-valid";
import {StyleSheetManager} from "styled-components";
import Head from "next/head";
import './globals.css';


const MyApp: FC<AppProps> = ({Component, pageProps}) => {


  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="/images/favicon.png"/>
        <title>mushmula</title>
      </Head>
      <Component {...pageProps} />
    </StyleSheetManager>

  )
}

export default MyApp
