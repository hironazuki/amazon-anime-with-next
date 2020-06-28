import { AnimesQuery } from "./anime.graphql";

export function getAllAnimeTitles(
  data: AnimesQuery
): {
  params: {
    title: string;
  };
}[] {
  const { animes } = data!;

  return animes.map((anime) => {
    return {
      params: {
        title: anime.title,
      },
    };
  });
}
