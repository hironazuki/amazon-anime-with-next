import Link from "next/link";
import { useRouter } from "next/router";
import AnimeData from "../../components/AnimeData";
import { AnimesDocument, useAnimeQuery } from "../../lib/anime.graphql";
import { initializeApollo } from "../../lib/apollo";
import { GetStaticProps, GetStaticPaths } from "next";

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
        <AnimeData animeData={data!} />
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        page.
      </>
    );
  }
  return null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const { data } = useAnimesQuery();
  // const paths = getAllAnimeTitles(data!);
  return {
    paths: [
      {
        params: {
          title: "グレイプニル",
        },
      },
    ],
    fallback: true,
  };
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
    unstable_revalidate: 10,
  };
};
export default Title;
