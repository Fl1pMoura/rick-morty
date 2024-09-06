import { sleep } from "@/app/utils/sleep";
import { CharacterResponse } from "../../entities/Character";
import { httpClient } from "../httpClient";

export type CharactersFilters = {
  name?: string;
  page?: number;
};

export async function getAll(
  filters: CharactersFilters
): Promise<CharacterResponse> {
  const { page, name } = filters;
  await sleep(1000);
  const { data } = await httpClient.get<CharacterResponse>(
    `/character?page=${page}`,
    { params: { page, name } }
  );

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
