import { Loader } from "@/components/Loader";
import { useGlobal } from "@/components/GlobalContext/useGlobal";
import { CharacterIcon } from "@/components/icons/CharactersIcon";
import { useLocations } from "@/app/hooks/useLocations";
import { LocationCard } from "@/components/LocationCard";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { PlanetIcon } from "@/components/icons/PlanetIcon";
import { DimensionIcon } from "@/components/icons/DimensionIcon";
import { usePagination } from "@/app/hooks/usePagination";

export function Locations() {
  const { activeLocationId, setActiveLocationId } = useGlobal();
  const {
    locations,
    page,
    setPage,
    totalPages,
    isFetchingLocations,
    activeLocation,
  } = useLocations({ id: activeLocationId });
  const PaginationComponent = usePagination({ page, setPage, totalPages });

  function handleChangeLocation(id: number) {
    scrollTo({ top: 0, behavior: "smooth" });
    setActiveLocationId(id);
  }

  return (
    <>
      <section className="max-w-80 w-full mx-auto lg:mx-0 lg:max-w-full flex gap-16 lg:pb-16 relative pb-4 min-h-[220px] lg:min-h-[370px] lg:pt-8">
        {!activeLocation ? (
          <div className="flex items-center justify-center flex-1">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              <PlanetIcon className="size-10 lg:size-[58px] text-projectGray-1" />
              <h2 className="text-projectGray-1 font-bold text-3xl lg:text-5xl my-5 lg:my-6">
                {activeLocation.name}
              </h2>

              <div className="flex items-center gap-6 text-projectGray-1">
                <span className="flex items-center gap-2 text-base lg:text-lg capitalize">
                  <PlanetIcon className="size-6" /> {activeLocation.type}
                </span>
                <span className="flex items-center gap-2 text-base lg:text-lg capitalize">
                  <DimensionIcon className="size-6" />{" "}
                  {activeLocation.dimension}
                </span>
              </div>

              <span className="flex items-center gap-2 text-base lg:text-lg mt-6 lg:mt-[70px] text-projectGray-1">
                <CharacterIcon className="size-5 lg:size-6" />{" "}
                {activeLocation.residents.length} characters located here.
              </span>
            </div>
          </>
        )}
        <span className="border-2 border-projectBlue-1 absolute bottom-0 left-[-200px] lg:left-[-1000px] w-[200vw]"></span>
      </section>

      <section className="max-w-80 mx-auto lg:mx-0 lg:max-w-full w-full pt-5 lg:py-20">
        <h3 className="flex items-center text-projectGray-1 text-lg lg:text-2xl gap-4 font-bold mb-8 lg:mb-16">
          <LocationIcon className="size-6 lg:size-9" /> More Locations
        </h3>
        {isFetchingLocations ? (
          <div className="my-20">
            <Loader />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] gap-6 gap-y-10">
              {locations.map((location) => (
                <LocationCard
                  onClick={handleChangeLocation}
                  locationType="LOCATION"
                  id={location.id}
                  name={location.name}
                  key={location.id}
                  type={location.type}
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
