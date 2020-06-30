import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Container } from "semantic-ui-react";

export const siteTitle = "new_prime_anime更新まとめ";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="../static/amazon_new_anime.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Container>
        <Header />
        <div>{children}</div>

        <style jsx global>{`
          * {
            font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
              "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New",
              monospace, serif;
          }
        `}</style>
        <style jsx>{`
          div {
            margin: 4rem 0;
          }
        `}</style>
      </Container>
    </>
  );
};

export default Layout;
