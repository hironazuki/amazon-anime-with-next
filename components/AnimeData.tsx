import { useAnimeQuery } from '../lib/anime.graphql';

const AnimeData: React.FC<{ title: string }> = ({ title }) => {
  const { loading, data } = useAnimeQuery({
    variables: { title },
  });
  if (loading) return <div>Loading</div>;
  const { anime } = data!;
  // const test: any = anime.map((a) => {
  //   return { sub: a.subTitle, date: a.createdAt };
  // });

  // console.log(test);
  return (
    <div>
      {anime.map((anime) => (
        <p key={anime.id}>
          {anime.subTitle} {anime.createdAt}
        </p>
      ))}
    </div>
  );
};

export default AnimeData;
