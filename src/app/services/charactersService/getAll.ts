import { CharacterResponse } from "../../entities/Character";
import { httpClient } from "../httpClient";

export async function getAll(page?: number): Promise<CharacterResponse> {
  const { data } = await httpClient.get<CharacterResponse>(
    `/character?page=${page}`
  );

  return (
    data ?? {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    }
  );
}
