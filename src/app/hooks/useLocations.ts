import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Location, LocationResponse } from "../entities/Location";
import { locationsService } from "../services/locationsService";

interface UseLocationsProps {
  id?: number;
}

export function useLocations({ id }: UseLocationsProps) {
  const [page, setPage] = useState(1);

  const { data, isFetching: isFetchingLocations } = useQuery<LocationResponse>({
    queryKey: ["get-locations", page],
    queryFn: () => locationsService.getAll({ page }),
  });

  const { data: activeLocation, isFetching: isFetchingActiveLocation } =
    useQuery<Location>({
      queryKey: ["get-location", id],
      queryFn: () => locationsService.getById({ id }),
    });

  return {
    locations: data?.results ?? [],
    isFetchingLocations,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
    activeLocation,
    isFetchingActiveLocation,
  };
}
