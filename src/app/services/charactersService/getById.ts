import { sleep } from "@/app/utils/sleep";
import { Character } from "../../entities/Character";
import { httpClient } from "../httpClient";

export type CharacterFilter = {
  id?: number;
};

export async function getById({ id }: CharacterFilter): Promise<Character> {
  await sleep(1000);
  const { data } = await httpClient.get<Character>(`/character/${id}`);

  return data;
}
