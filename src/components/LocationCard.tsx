import { cn } from "@/app/utils/cn";
import { InfoIcon } from "./icons/InfoIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { PlanetIcon } from "./icons/PlanetIcon";
import { LinkComponent } from "./LinkComponent";

interface LocationCardProps {
  type?: string;
  name: string;
  locationType: "LOCATION" | "ORIGIN";
}

export function LocationCard({ type, name, locationType }: LocationCardProps) {
  return (
    <article className="bg-offWhite p-4 flex flex-col justify-center items-center rounded-2xl">
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
      <LinkComponent classname="mt-4 gap-2 w-full" to="/">
        <InfoIcon className="size-5" /> Learn More
      </LinkComponent>
    </article>
  );
}
