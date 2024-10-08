import { Loader } from "@/components/Loader";
import { VideoCardIcon } from "@/components/icons/VideoIcon";
import { useGlobal } from "@/components/GlobalContext/useGlobal";
import { useEpisodes } from "@/app/hooks/useEpisodes";
import { EpisodeCard } from "@/components/EpisodeCard";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { EpisodeIcon } from "@/components/icons/EpisodeIcon";
import { CharacterIcon } from "@/components/icons/CharactersIcon";
import { usePagination } from "@/app/hooks/usePagination";

export function Episodes() {
  const { activeEpisodeId, setActiveEpisodeId } = useGlobal();
  const {
    episodes,
    page,
    totalPages,
    setPage,
    isFetchingEpisodes,
    activeEpisode,
  } = useEpisodes({ id: activeEpisodeId });
  const PaginationComponent = usePagination({ page, setPage, totalPages });
  function handleChangeEpisode(id: number) {
    scrollTo({ top: 0, behavior: "smooth" });
    setActiveEpisodeId(id);
  }

  return (
    <>
      <section className="max-w-80 mx-auto lg:max-w-full lg:mx-0 flex gap-16 relative min-h-[204px] pb-4 lg:min-h-[370px] lg:pt-8 lg:pb-16">
        {!activeEpisode ? (
          <div className="flex items-center justify-center flex-1">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              <VideoCardIcon classname="size-10 lg:size-[58px] text-projectGray-1" />
              <h2 className="text-projectGray-1 font-bold text-3xl my-4 lg:text-5xl lg:my-6">
                {activeEpisode.name}
              </h2>

              <div className="flex items-center gap-6 text-projectGray-1">
                <span className="flex items-center gap-2 text-base lg:text-lg">
                  <CalendarIcon className="size-4 lg:size-6" />{" "}
                  {activeEpisode.air_date}
                </span>
                <span className="flex items-center gap-2 text-base lg:text-lg">
                  <EpisodeIcon className="size-4 lg:size-6" />{" "}
                  {activeEpisode.episode}
                </span>
              </div>

              <span className="flex items-center gap-2 text-sm mt-6 lg:text-lg lg:mt-[70px] text-projectGray-1">
                <CharacterIcon className="size-4 lg:size-6" />{" "}
                {activeEpisode.characters.length} characters were featured in
                this episode.
              </span>
            </div>
          </>
        )}
        <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-300px] lg:left-[-1000px] w-[200vw]"></span>
      </section>

      <section className="max-w-80 mx-auto lg:max-w-full lg:mx-0 w-full pt-5 lg:py-20">
        <h3 className="flex items-center text-projectGray-1 text-lg lg:text-2xl gap-4 font-bold mb-6 lg:mb-16">
          <VideoCardIcon classname="size-6 lg:size-9" /> More Episodes
        </h3>
        {isFetchingEpisodes ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] gap-4">
              {episodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  id={episode.id}
                  onClick={handleChangeEpisode}
                  episode={episode.episode}
                  name={episode.name}
                />
              ))}
            </div>
          </>
        )}
        {PaginationComponent}
      </section>
    </>
  );
}
