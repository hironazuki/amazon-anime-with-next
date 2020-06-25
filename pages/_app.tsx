import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
