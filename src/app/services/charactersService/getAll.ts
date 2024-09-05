import { sleep } from "@/app/utils/sleep";
import { CharacterResponse } from "../../entities/Character";
import { httpClient } from "../httpClient";

export async function getAll(page?: number): Promise<CharacterResponse> {
  await sleep(1000);
  const { data } = await httpClient.get<CharacterResponse>(
    `/character?page=${page}`
  );

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
