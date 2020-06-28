import { useAnimeQuery, AnimeDocument } from "../lib/anime.graphql";
import moment from "moment";
import { initializeApollo } from "../lib/apollo";
import { GetServerSideProps } from "next";

moment.locale("ja", {
  weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"],
});
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

  const formatMinute = (createdAt: string) => {
    const minutes = moment(createdAt).minutes();
    const usedMinutes = String(Math.floor(minutes / 10) * 10);
    return moment(createdAt).format("M月D日(ddd) HH：" + usedMinutes);
  };

  const animes = anime.map((a) => {
    return { ...a, createdAt: formatMinute(a.createdAt) };
  });
  return (
    <div>
      {animes.map((a) => (
        <div key={a.id}>
          <span>{a.subTitle}</span>
          <br />
          <span>{a.createdAt}</span>
        </div>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AnimeDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
export default AnimeData;
