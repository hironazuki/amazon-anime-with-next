import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}

      <style jsx global>{`
        * {
          font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
            "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New",
            monospace, serif;
        }
      `}</style>
    </Container>
  );
};

export default Layout;
