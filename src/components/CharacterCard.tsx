import { SpecieIcon } from "@/components/icons/SpecieIcon";
import { PlanetIcon } from "@/components/icons/PlanetIcon";
import { LinkComponent } from "@/components/LinkComponent";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { cn } from "@/app/utils/cn";
import { AliveIcon } from "@/view/pages/Characters/Components/icons/StatusIcons/AliveIcon";
import { UnknownIcon } from "@/view/pages/Characters/Components/icons/StatusIcons/UnknownIcon";

interface CharacterCardProps {
  image: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: string;
}
export function CharacterCard({
  image,
  name,
  status,
  species,
  origin,
}: CharacterCardProps) {
  return (
    <article
      className="bg-offWhite rounded-[8px] min-h-[200px] flex flex-col justify-between relative p-4"
      role="button"
    >
      <figure
        className={cn(`relative min-h-[250px] overflow-clip rounded-2xl`)}
      >
        <img className="w-full" src={image} alt={name} />
      </figure>
      <h3 className="flex items-center gap-2 my-4 font-bold text-projectGray-1">
        {name}
      </h3>
      <div className="space-y-1">
        <span
          className={cn(
            "flex items-center capitalize text-[#88e23b] gap-2",
            status === "Dead" && "text-[#931f05]",
            status === "unknown" && "text-[#c7af26]"
          )}
        >
          {(status === "Alive" || status === "Dead") && (
            <AliveIcon classname="size-4 min-w-4 min-h-4" />
          )}
          {status === "unknown" && (
            <UnknownIcon classname="size-4 min-w-4 min-h-4" />
          )}
          <b className="capitalize font-normal text-projectGray-1">{status}</b>
        </span>

        <span className="flex items-center gap-2">
          <SpecieIcon className="size-4" />
          <b className="capitalize font-normal text-projectGray-1">{species}</b>
        </span>

        <span className="flex items-center gap-2">
          <PlanetIcon className="size-4" />
          <b className="capitalize font-normal text-projectGray-1">{origin}</b>
        </span>
      </div>
      <LinkComponent classname="mt-6 gap-2" to="/">
        <InfoIcon className="size-5" />
        Learn More
      </LinkComponent>
    </article>
  );
}
