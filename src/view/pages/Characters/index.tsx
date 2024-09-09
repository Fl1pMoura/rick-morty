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
import { VideoCardIcon } from "@/components/icons/VideoIcon";
import { AliveIcon } from "./Components/icons/StatusIcons/AliveIcon";
import { UnknownIcon } from "./Components/icons/StatusIcons/UnknownIcon";
import { SpecieIcon } from "@/components/icons/SpecieIcon";
import { GenderIcon } from "@/components/icons/GenderIcon";
import { LocationCard } from "@/components/LocationCard";
import { useGlobal } from "@/components/GlobalContext/useGlobal";
import { CharacterIcon } from "@/components/icons/CharactersIcon";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export function Characters() {
  const { activeCharacterId, setActiveCharacterId, setActiveLocationId } =
    useGlobal();
  const windowSize = useWindowWidth();
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
  const locationURL = activeCharacter?.location.url;
  const originURL = activeCharacter?.origin.url;
  let locationId: number | undefined;
  let originId: number | undefined;

  if (locationURL) {
    locationId = parseInt(locationURL.split("/").pop() as string, 10);
  }

  if (originURL) {
    originId = parseInt(originURL.split("/").pop() as string, 10);
  }

  // Define a lógica para exibir um intervalo de 5 páginas
  const paginationRange = windowSize > 1024 ? 5 : 3;
  const startPage = Math.max(1, page - Math.floor(paginationRange / 2)); // Calcula a página inicial
  const endPage = Math.min(totalPages, startPage + paginationRange - 1); // Calcula a página final
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  ); // Gera o array de páginas visíveis

  return (
    <>
      <section className="flex flex-col max-w-80 w-full mx-auto lg:max-w-full lg:mx-0 lg:flex-row gap-5 pb-6 lg:gap-16 lg:pb-16 relative min-h-[370px] lg:pt-8">
        {!activeCharacter ? (
          <div className="flex items-center justify-center flex-1">
            <Loader />
          </div>
        ) : (
          <>
            <figure className="w-56 lg:w-[370px] rounded-2xl overflow-clip">
              <img
                className="w-full h-full object-cover"
                src={activeCharacter.image}
                alt={activeCharacter.name}
              />
            </figure>
            <div className="flex flex-col">
              <h2 className="text-projectGray-1 font-bold text-3xl lg:text-5xl">
                {activeCharacter.name}
              </h2>
              <span className="flex items-center gap-3 text-projectGray-1 text-lg my-5 lg:text-xl lg:mt-9 lg:mb-12">
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
              <div className="flex flex-col gap-8 mt-10 lg:mt-auto lg:ml-auto lg:flex-row">
                <LocationCard
                  key={Math.random()}
                  id={locationId}
                  onClick={setActiveLocationId}
                  name={activeCharacter.location.name}
                  locationType="LOCATION"
                />
                <LocationCard
                  key={Math.random()}
                  id={originId}
                  onClick={setActiveLocationId}
                  name={activeCharacter.origin.name}
                  locationType="ORIGIN"
                />
              </div>
            </div>
          </>
        )}
        <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-300px] lg:left-[-1000px] w-[200vw]"></span>
      </section>

      <section className="max-w-80 mx-auto w-full pt-5 lg:mx-0 lg:max-w-full lg:py-20">
        <h3 className="flex items-center text-projectGray-1 text-lg lg:text-2xl gap-4 font-bold mb-6 lg:mb-16">
          <CharacterIcon className="size-6 lg:size-9" /> More Characters
        </h3>
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
