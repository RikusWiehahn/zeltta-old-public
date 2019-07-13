import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta description="" />
          <meta charSet="utf8" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,800&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/png" href="../static/favicon.png" />
        </Head>
        <body style={{ margin: '0px' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
