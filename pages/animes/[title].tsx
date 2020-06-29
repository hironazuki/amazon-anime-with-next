import Link from "next/link";
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
