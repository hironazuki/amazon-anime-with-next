export function getAllAnimeTitles(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: any
): {
  params: {
    title: string;
  };
}[] {
  const { animes } = data!;

  return animes.map((anime: any) => {
    return {
      params: {
        title: anime.title,
      },
    };
  });
}
