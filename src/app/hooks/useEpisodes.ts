import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { episodesService } from "../services/episodesService";
import { Episode, EpisodeResponse } from "../entities/Episodes";

interface UseEpisodesProps {
  id?: number;
}

export function useEpisodes({ id }: UseEpisodesProps) {
  const [page, setPage] = useState(1);

  const { data, isFetching: isFetchingEpisodes } = useQuery<EpisodeResponse>({
    queryKey: ["get-episodes", page],
    queryFn: () => episodesService.getAll({ page }),
    placeholderData: keepPreviousData,
  });

  const { data: activeEpisode, isFetching: isFetchingActiveEpisode } =
    useQuery<Episode>({
      queryKey: ["get-episode", id],
      queryFn: () => episodesService.getById({ id }),
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
    activeEpisode,
    isFetchingActiveEpisode,
    isFetchingEpisodes,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
  };
}
