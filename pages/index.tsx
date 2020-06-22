import Link from 'next/link';
import { useAnimesQuery, AnimesDocument } from '../lib/anime.graphql';
import { initializeApollo } from '../lib/apollo';

const Index = () => {
  const { data } = useAnimesQuery();
  const { animes } = data!;
  const new_animes = animes.filter(a => a.year === '2020');
  // const old_animes = animes.filter(a => a.year !== '2020');
  return (
    <div>
      {new_animes.map(anime => (
        <p>{anime.title}</p>
      ))}
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AnimesDocument
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default Index;
