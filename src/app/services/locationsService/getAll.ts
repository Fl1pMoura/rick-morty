import { sleep } from "@/app/utils/sleep";
import { httpClient } from "../httpClient";
import { LocationResponse } from "@/app/entities/Location";

export type LocationsFilters = {
  name?: string;
  type?: string;
  dimension?: string;
  page?: number;
};

export async function getAll({
  page,
}: LocationsFilters): Promise<LocationResponse> {
  await sleep(1000);
  const { data } = await httpClient.get<LocationResponse>(`/location`, {
    params: { page },
  });

  return (
    data ?? {
      info: { count: 0, pages: 1, next: null, prev: null },
      results: [],
    }
  );
}
