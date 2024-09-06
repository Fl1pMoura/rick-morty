import { useQuery } from "@tanstack/react-query";
import { charactersService } from "../services/charactersService";
import { CharacterResponse } from "../entities/Character";
import { useState } from "react";

export function useCharacters() {
  const [page, setPage] = useState(1);
  console.log("useCharacters foi chamado com a página:", page);
  const { data, isFetching } = useQuery<CharacterResponse>({
    queryKey: ["get-characters", page],
    queryFn: () => charactersService.getAll({ page: page }),
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
    characters: data?.results ?? [],
    isFetching,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1, // Retorna o total de páginas
  };
}
