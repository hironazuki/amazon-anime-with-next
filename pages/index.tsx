import Link from "next/link";
import { useAnimesQuery, AnimesDocument } from "../lib/anime.graphql";
import { initializeApollo } from "../lib/apollo";
import { GetStaticProps } from "next";
import { List } from "semantic-ui-react";
import Head from "next/head";

const Index: React.FC = () => {
  const { data } = useAnimesQuery();
  const { animes } = data!;

  return (
    <>
      <Head>
        <title>new_prime_anime更新まとめ</title>
      </Head>
      <List divided relaxed>
        {animes.map((anime, key) => (
          <List.Item key={key}>
            <List.Content>
              <Link href="/animes/[title]" as={`/animes/${anime.title}`}>
                <a>{anime.title}</a>
              </Link>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AnimesDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 30,
  };
};
export default Index;
