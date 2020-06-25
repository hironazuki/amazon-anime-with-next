import { useAnimeQuery } from "../lib/anime.graphql";

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
        <li key={anime.id}>
          {anime.subTitle} {anime.createdAt}
        </li>
      ))}
    </div>
  );
};
<style jsx>{`
  section {
    padding-bottom: 20px;
  }
  li {
    display: block;
    margin-bottom: 10px;
  }
  div {
    align-items: center;
    display: flex;
  }
  a {
    font-size: 14px;
    margin-right: 10px;
    text-decoration: none;
    padding-bottom: 0;
    border: 0;
  }
  span {
    font-size: 14px;
    margin-right: 5px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  button:before {
    align-self: center;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #ffffff transparent transparent transparent;
    content: "";
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`}</style>;
export default AnimeData;
