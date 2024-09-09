import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { Episode } from "@/app/entities/Episodes";

export type EpisodeFilter = {
  id?: number;
};

export async function getById({ id }: EpisodeFilter): Promise<Episode> {
  await sleep(1000);
  const { data } = await httpClient.get<Episode>(`/episode/${id || 1}`);

  return data;
}
