import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { charactersService } from "../services/charactersService";
import { Character, CharacterResponse } from "../entities/Character";
import { useState } from "react";

interface UseCharactersProps {
  name?: string;
  id?: number;
}

export function useCharacters({ name, id }: UseCharactersProps) {
  const [page, setPage] = useState(1);
  const { data, isFetching: isFetchingCharacters } =
    useQuery<CharacterResponse>({
      queryKey: ["get-characters", page, name],
      queryFn: () => charactersService.getAll({ page, name }),
      placeholderData: keepPreviousData, // Mantém os dados antigos enquanto busca novos dados
    });

  const { data: activeCharacter, isFetching: isFetchingActiveChar } =
    useQuery<Character>({
      queryKey: ["get-character", id],
      queryFn: () => charactersService.getById({ id }),
    });
  return {
    activeCharacter,
    isFetchingActiveChar,
    characters: data?.results ?? [],
    isFetchingCharacters,
    page,
    setPage,
    totalPages: data?.info.pages ?? 1,
  };
}
