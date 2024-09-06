import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { EpisodeResponse } from "@/app/entities/Episodes";

export type EpisodesFilters = {
  name?: string;
  episode?: number;
};

export async function getAll(): Promise<EpisodeResponse> {
  await sleep(1000);
  const { data } = await httpClient.get<EpisodeResponse>(`/episode`);

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
