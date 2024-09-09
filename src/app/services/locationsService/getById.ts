import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { Location } from "@/app/entities/Location";

export type LocationFilter = {
  id?: number;
};

export async function getById({ id }: LocationFilter): Promise<Location> {
  await sleep(1000);
  const { data } = await httpClient.get<Location>(`/location/${id || 1}`);

  return data;
}
