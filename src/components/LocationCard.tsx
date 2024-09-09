import { cn } from "@/app/utils/cn";
import { InfoIcon } from "./icons/InfoIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { PlanetIcon } from "./icons/PlanetIcon";
import { LinkComponent } from "./LinkComponent";

interface LocationCardProps {
  type?: string;
  name: string;
  id?: number;
  locationType: "LOCATION" | "ORIGIN";
  onClick?: (id: number) => void;
}

export function LocationCard({
  type,
  name,
  locationType,
  id,
  onClick,
}: LocationCardProps) {
  return (
    <article
      className="transition-all bg-slate-100 hover:bg-slate-200 hover:scale-105 p-4 flex flex-col justify-center items-center rounded-2xl"
      role="button"
      onClick={() => id && onClick?.(id)}
    >
      {locationType === "ORIGIN" ? (
        <PlanetIcon className="size-12 -mt-9" />
      ) : (
        <LocationIcon className="size-12 -mt-9" />
      )}
      {type && <p className="capitalize text-projectGray-1">{type}</p>}
      <span
        className={cn(
          "capitalize text-projectBlue-1 text-center",
          !type && "pt-2"
        )}
      >
        {name}
      </span>
      <LinkComponent classname="mt-4 gap-2 w-full" to="/locations">
        <InfoIcon className="size-5" /> Learn More
      </LinkComponent>
    </article>
  );
}
