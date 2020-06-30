import { AnimeQuery } from "../lib/anime.graphql";
import moment from "moment";

import { List } from "semantic-ui-react";

moment.updateLocale("ja", {
  weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"],
});
const AnimeData: React.FC<{ animeData: AnimeQuery }> = ({ animeData }) => {
  const { anime } = animeData;

  const formatMinute = (createdAt: string) => {
    const minutes = moment(createdAt).minutes();
    let usedMinutes = String(Math.floor(minutes / 10) * 10);
    if (usedMinutes.length === 1) {
      usedMinutes = "0" + usedMinutes;
    }
    return moment(createdAt).format("M月D日(ddd) HH：" + usedMinutes);
  };

  const animes = anime.map((a) => {
    return { ...a, createdAt: formatMinute(a.createdAt) };
  });
  return (
    <>
      <List divided relaxed>
        {animes.map((a) => (
          <List.Item key={a.id}>
            <List.Content>
              <List.Header>{a.subTitle}</List.Header>
              <List.Description>{a.createdAt}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};
export default AnimeData;
