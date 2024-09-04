import { useQuery } from "@tanstack/react-query";
import { charactersService } from "../services/charactersService";
import { CharacterResponse } from "../entities/Character";

export function useCharacters() {
  const { data, isFetching } = useQuery<CharacterResponse>({
    queryKey: ['get-characters'],
    queryFn: charactersService.getAll
  });

  return { characters: data?.results ?? [], info: data?.info ?? { count: 0, pages: 0, next: null, prev: null }, isFetching };
}
