import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { LocationResponse } from "@/app/entities/Location";

export type LocationsFilters = {
  name?: string;
  type?: string;
  dimension?: string;
};

export async function getAll(): Promise<LocationResponse> {
  await sleep(1000);
  const { data } = await httpClient.get<LocationResponse>(`/location`);

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
