import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LocationResponse } from "../entities/Location";
import { locationsService } from "../services/locationsService";

// interface UseEpisodesProps {
//   name?: string;
// }

export function useLocations() {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useQuery<LocationResponse>({
    queryKey: ["get-locations", page],
    queryFn: () => locationsService.getAll(),
  });

  const nextPage = () => {
    if (data?.info.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (data?.info.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return {
    locations: data?.results ?? [],
    isFetching,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
  };
}
