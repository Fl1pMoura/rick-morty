import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { episodesService } from "../services/episodesService";
import { EpisodeResponse } from "../entities/Episodes";

// interface UseEpisodesProps {
//   name?: string;
// }

export function useEpisodes() {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useQuery<EpisodeResponse>({
    queryKey: ["get-episodes", page],
    queryFn: () => episodesService.getAll(),
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
    episodes: data?.results ?? [],
    isFetching,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
  };
}
