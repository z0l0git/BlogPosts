import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css?family=Work Sans"
        rel="stylesheet"
      ></link>
      <body className="font-work-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
