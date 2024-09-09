import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { EpisodeResponse } from "@/app/entities/Episodes";

export type EpisodesFilters = {
  page?: number;
};

export async function getAll(
  filters: EpisodesFilters
): Promise<EpisodeResponse> {
  const { page } = filters;
  await sleep(1000);
  const { data } = await httpClient.get<EpisodeResponse>(`/episode`, {
    params: { page },
  });

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
