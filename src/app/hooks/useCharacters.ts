import { useQuery } from "@tanstack/react-query";
import { charactersService } from "../services/charactersService";
import { CharacterResponse } from "../entities/Character";
import { useState } from "react";

export function useCharacters() {
  const [page, setPage] = useState(0);
  const { data, isFetching } = useQuery<CharacterResponse>({
    queryKey: ["get-characters", page],
    queryFn: () => charactersService.getAll(page),
  });

  const nextPage = () => {
    if (page < (data?.info.pages ?? 1)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return {
    characters: data?.results ?? [],
    isFetching,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
  };
}
