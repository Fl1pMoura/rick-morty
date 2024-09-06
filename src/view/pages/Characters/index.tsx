import { cn } from "@/app/utils/cn";
import { useCharacters } from "../../../app/hooks/useCharacters";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader } from "@/components/Loader";
import { CharacterCard } from "@/components/CharacterCard";
import { useState } from "react";
import { VideoCardIcon } from "@/components/icons/VideoIcon";
import { AliveIcon } from "./Components/icons/StatusIcons/AliveIcon";
import { UnknownIcon } from "./Components/icons/StatusIcons/UnknownIcon";
import { SpecieIcon } from "@/components/icons/SpecieIcon";
import { GenderIcon } from "@/components/icons/GenderIcon";
import { LocationCard } from "@/components/LocationCard";

export function Characters() {
  const [activeCharacterId, setActiveCharacterId] = useState(1);
  const {
    characters,
    nextPage,
    prevPage,
    page,
    totalPages,
    setPage,
    isFetchingCharacters,
    activeCharacter,
  } = useCharacters({ name: "", id: activeCharacterId });

  // Define a lógica para exibir um intervalo de 5 páginas
  const paginationRange = 5;
  const startPage = Math.max(1, page - Math.floor(paginationRange / 2)); // Calcula a página inicial
  const endPage = Math.min(totalPages, startPage + paginationRange - 1); // Calcula a página final
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  ); // Gera o array de páginas visíveis

  return (
    <>
      <section className="flex gap-16 pb-16 relative min-h-[370px] pt-8">
        {!activeCharacter ? (
          <div className="flex items-center justify-center flex-1">
            <Loader />
          </div>
        ) : (
          <>
            <figure className="w-[370px] rounded-2xl overflow-clip">
              <img
                className="w-full h-full object-cover"
                src={activeCharacter.image}
                alt={activeCharacter.name}
              />
            </figure>
            <div className="flex flex-col">
              <h2 className="text-projectGray-1 font-bold text-5xl">
                {activeCharacter.name}
              </h2>
              <span className="flex items-center gap-3 text-projectGray-1 text-xl mt-9 mb-12">
                <VideoCardIcon classname="size-6" />
                Featured in {activeCharacter.episode.length} episodes
              </span>
              <div className="flex gap-6">
                <span
                  className={cn(
                    "flex items-center capitalize text-[#88e23b] gap-2",
                    activeCharacter.status === "Dead" && "text-[#931f05]",
                    activeCharacter.status === "unknown" && "text-[#c7af26]"
                  )}
                >
                  {(activeCharacter.status === "Alive" ||
                    activeCharacter.status === "Dead") && (
                    <AliveIcon classname="size-4 min-w-4 min-h-4" />
                  )}
                  {activeCharacter.status === "unknown" && (
                    <UnknownIcon classname="size-4 min-w-4 min-h-4" />
                  )}
                  <b className="capitalize font-normal text-projectGray-1">
                    {activeCharacter.status}
                  </b>
                </span>

                <span className="flex items-center gap-2">
                  <SpecieIcon className="size-4" />
                  <b className="capitalize font-normal text-projectGray-1">
                    {activeCharacter.species}
                  </b>
                </span>

                <span className="flex items-center gap-2">
                  <GenderIcon classname="size-4" />
                  <b className="capitalize font-normal text-projectGray-1">
                    {activeCharacter.gender}
                  </b>
                </span>
              </div>
              <div className="flex gap-8 mt-auto ml-auto">
                <LocationCard
                  key={Math.random()}
                  name={activeCharacter.location.name}
                  locationType="LOCATION"
                />
                <LocationCard
                  key={Math.random()}
                  name={activeCharacter.origin.name}
                  locationType="ORIGIN"
                />
              </div>
            </div>
          </>
        )}
        <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-1000px] w-[200vw]"></span>
      </section>

      <section className="w-full py-20">
        {isFetchingCharacters ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(298px,_1fr))] gap-4">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  origin={character.origin.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  onClick={setActiveCharacterId}
                />
              ))}
            </div>

            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={prevPage}
                    className={cn(page === 1 && "pointer-events-none")}
                  >
                    Previous
                  </PaginationPrevious>
                </PaginationItem>

                {pages.map((pg) => (
                  <PaginationItem key={pg}>
                    <PaginationLink
                      onClick={() => pg !== page && setPage(pg)}
                      className={cn(
                        "transition-all cursor-pointer",
                        pg === page &&
                          "bg-[#4d4d4d] text-white font-bold pointer-events-none"
                      )}
                    >
                      {pg}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={nextPage}
                    className={cn(page === totalPages && "pointer-events-none")}
                    href="#"
                  >
                    Next
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </section>
    </>
  );
}
