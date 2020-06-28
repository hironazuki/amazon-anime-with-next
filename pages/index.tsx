import Link from "next/link";
import { useAnimesQuery, AnimesDocument } from "../lib/anime.graphql";
import { initializeApollo } from "../lib/apollo";
import { GetStaticProps } from "next";

const Index: React.FC = () => {
  const { data } = useAnimesQuery();
  const { animes } = data!;

  return (
    <>
      {animes.map((anime, key) => (
        <li key={key}>
          <Link href="/animes/[title]" as={`/animes/${anime.title}`}>
            <a>{anime.title}</a>
          </Link>
        </li>
      ))}
      <Link href="/about">
        <a>about</a>
      </Link>{" "}
      page.
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
    unstable_revalidate: 1,
  };
};
export default Index;
