import Link from 'next/link';
// import {
//   useAnimesQuery,
//   useAnimeQuery,
//   AnimesDocument
// } from '../../lib/anime.graphql';
import { initializeApollo } from '../../lib/apollo';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

const Title = () => {
  const router = useRouter();
  const { title } = router.query;
  // const { loading, data } = useAnimeQuery();
  // const { anime } = data!;

  return (
    <div>
      {/* {anime.map(anime => (
        <p>{anime.title}</p>
      ))} */}
      {/* <h1>Old</h1>
      {old_animes.map(anime => (
        <p>{anime.title}</p>
      ))} */}
      {/* You're signed in as {viewer.name} and you're {viewer.status} go to the{' '} */}
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      page.
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = useAnimesQuery();

  return {
    paths: [{ params: { title: 'からくりサーカス' } }],
    fallback: false
  };
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: AnimesDocument
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     }
//   };
// }
