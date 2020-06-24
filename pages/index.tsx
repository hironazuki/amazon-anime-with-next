import Link from 'next/link';
import { useAnimesQuery, AnimesDocument } from '../lib/anime.graphql';
import { initializeApollo } from '../lib/apollo';

const Index = () => {
  const { data } = useAnimesQuery();
  const { animes } = data!;
  return (
    <div>
      {animes.map((anime, key) => (
        <li key={key}>
          <Link href="/animes/[title]" as={`/animes/${anime.title}`}>
            <a>{anime.title}</a>
          </Link>
        </li>
      ))}
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      page.
    </div>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AnimesDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
