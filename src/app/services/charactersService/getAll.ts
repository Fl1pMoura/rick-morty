import { CharacterResponse } from "../../entities/Character"; 
import { httpClient } from "../httpClient";

export async function getAll(): Promise<CharacterResponse> {
  const { data } = await httpClient.get<CharacterResponse>("/character");

  return data ?? { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
}
