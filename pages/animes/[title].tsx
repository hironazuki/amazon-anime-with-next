import Head from "next/head";
import { useRouter } from "next/router";
import AnimeData from "../../components/AnimeData";
import {
  // AnimesDocument,
  AnimeDocument,
  useAnimeQuery,
} from "../../lib/anime.graphql";
// import { getAllAnimeTitles } from "../../lib/animes";
import { initializeApollo } from "../../lib/apollo";
import { GetStaticProps, GetStaticPaths } from "next";
import { Header } from "semantic-ui-react";

const Title: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;
  const stringTitle = typeof title === "string" ? title : "";
  const { loading, data } = useAnimeQuery({
    variables: { title: stringTitle },
  });
  if (loading) return <div>Loading</div>;
  // const { anime } = data!;
  if (typeof title === "string") {
    return (
      <>
        <Head>
          <title>{title} | new_prime_anime更新まとめ</title>
        </Head>
        <Header as="h2">{title}</Header>
        <AnimeData animeData={data!} />
      </>
    );
  }
  return null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const apolloClient = initializeApollo();

  // const query = await apolloClient.query({
  //   query: AnimesDocument,
  // });

  // const paths = getAllAnimeTitles(query.data);

  return {
    // paths,
    paths: [{ params: { title: "グレイプニル" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const title = params!.title as string;
  await apolloClient.query({
    query: AnimeDocument,
    variables: { title },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 30,
  };
};
export default Title;
