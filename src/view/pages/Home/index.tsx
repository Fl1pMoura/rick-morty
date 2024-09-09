import { useCharacters } from "@/app/hooks/useCharacters";
import hero from "@/assets/RickMortyHero.webp";
import { GridIcon } from "@/components/icons/GridIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { LinkComponent } from "@/components/LinkComponent";
import { Loader } from "@/components/Loader";
import { useState } from "react";
import { cn } from "@/app/utils/cn";
import { useEpisodes } from "@/app/hooks/useEpisodes";
import { CharacterCard } from "@/components/CharacterCard";
import { EpisodeCard } from "@/components/EpisodeCard";
import { useLocations } from "@/app/hooks/useLocations";
import { LocationCard } from "@/components/LocationCard";
import { useGlobal } from "@/components/GlobalContext/useGlobal";
import notFound from "@/assets/not-found.png";

export function Home() {
  const {
    setActiveCharacterId,
    setActiveEpisodeId,
    activeEpisodeId,
    activeLocationId,
    setActiveLocationId,
    activeCharacterId,
  } = useGlobal();
  const [filter, setFilter] = useState("");
  const { characters, isFetchingCharacters } = useCharacters({
    name: filter,
    id: activeCharacterId,
  });
  const { episodes, isFetchingEpisodes } = useEpisodes({ id: activeEpisodeId });
  const { locations } = useLocations({ id: activeLocationId });
  const characterExists = characters.length > 0;

  const getGridClassName = (characterCount: number) => {
    if (characterCount < 3) {
      return "grid-cols-[repeat(auto-fit,_minmax(0,_312px))]";
    }
    return "grid-cols-[repeat(auto-fit,_minmax(298px,_1fr))]";
  };

  const gridClassName = getGridClassName(characters.length);
  return (
    <>
      <section className="max-w-80 w-full mx-auto lg:max-w-full lg:mx-0 flex flex-col justify-between items-center lg:mt-3 relative lg:flex-row">
        <div className="max-w-[480px] space-y-3 lg:space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-projectGray-1">
            Find everything you need in one{" "}
            <b className="text-projectBlue-1 font-bold">place.</b>
          </h2>
          <p className="text-projectGray-1">
            Characters, locations, episodes, and much more.
          </p>
          <small className="block text-projectBlue-1 text-base">
            Wubba Lubba Dub Dub! Watch out for your eyes!
          </small>
        </div>
        <figure className="mt-6 lg:mt-0">
          <img src={hero} alt="" />
        </figure>
        <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-300px] lg:left-[-1000px] w-[200vw]"></span>
      </section>

      <section className="max-w-80 w-full mx-auto lg:mx-0 lg:max-w-full py-7 lg:py-16">
        <div className="relative max-w-[405px] w-full mb-6 lg:mb-16">
          <input
            id="character"
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-[405px] min-h-12 border-[1px] border-projectGray-1 rounded-[32px] px-4 pt-4 pr-12
             outline-none text-projectGray-1 transition-all peer placeholder-shown:pt-0"
            placeholder=""
          />

          <label
            htmlFor="character"
            className="absolute text-xs left-[17px] top-2 pointer-events-none text-gray-700 opacity-70 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
          >
            Character
          </label>

          <SearchIcon classname="size-6 absolute right-5 top-1/2 -translate-y-1/2" />
        </div>

        <div>
          <header className="flex gap-4 mb-4">
            <h4 className="text-projectGray-1 font-bold text-lg lg:text-2xl">
              Characters
            </h4>
            <LinkComponent classname="gap-3 text-nowrap" to="/characters">
              <GridIcon classname="size-4" />
              View all
            </LinkComponent>
          </header>

          {isFetchingCharacters && <Loader />}

          {!isFetchingCharacters && !characterExists && (
            <img
              src={notFound}
              alt="search not found"
              className="lg:max-w-lg"
            />
          )}

          {!isFetchingCharacters && (
            <div
              className={cn(
                "max-w-80 grid gap-4 lg:mt-7 lg:max-w-full",
                gridClassName
              )}
            >
              {characters.slice(0, 8).map((character) => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  origin={character.origin.name}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  onClick={setActiveCharacterId}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-80 w-full mx-auto lg:mx-0 lg:max-w-full pb-7 lg:pb-16">
        <div>
          <header className="flex gap-4 mb-4 lg:mb-7">
            <h4 className="text-projectGray-1 font-bold text-lg lg:text-2xl">
              Episodes
            </h4>
            <LinkComponent classname="gap-3 text-nowrap" to="/episodes">
              <GridIcon classname="size-4" />
              View all
            </LinkComponent>
          </header>

          {isFetchingEpisodes && <Loader />}

          {!isFetchingEpisodes && (
            <div
              className={cn(
                "grid gap-4 grid-cols-[repeat(auto-fit,_minmax(232px,_1fr))]"
              )}
            >
              {episodes.slice(0, 5).map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  id={episode.id}
                  episode={episode.episode}
                  name={episode.name}
                  onClick={setActiveEpisodeId}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-80 w-full mx-auto lg:mx-0 lg:max-w-full lg:pb-16">
        <div>
          <header className="flex gap-4 mb-9 lg:mb-12">
            <h4 className="text-projectGray-1 font-bold text-lg lg:text-2xl">
              Locations
            </h4>
            <LinkComponent classname="gap-3 text-nowrap" to="/locations">
              <GridIcon classname="size-4" />
              View all
            </LinkComponent>
          </header>

          {isFetchingCharacters && <Loader />}

          {!isFetchingCharacters && (
            <div
              className={cn(
                "grid gap-9 lg:gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
              )}
            >
              {locations.slice(0, 5).map((location) => (
                <LocationCard
                  onClick={setActiveLocationId}
                  id={location.id}
                  locationType="ORIGIN"
                  name={location.name}
                  type={location.type}
                  key={location.id}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
