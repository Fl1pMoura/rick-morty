import { cn } from "../../../../app/utils/cn";
import { GenderlessIcon } from "./icons/GenderIcons/GenderlessIcon";
import { MaleIcon } from "./icons/GenderIcons/MaleIcon";
import { UnknownGenderIcon } from "./icons/GenderIcons/UnknownGenderIcon";
import { NameIcon } from "./icons/NameIcon";
import { PlanetIcon } from "./icons/PlanetIcon";
import { AliveIcon } from "./icons/StatusIcons/AliveIcon";
import { DeadIcon } from "./icons/StatusIcons/DeadIcon";
import { UnknownIcon } from "./icons/StatusIcons/UnknownIcon";

interface CharacterCardProps {
  image: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  location: string;
  species: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
}
export function CharacterCard({
  image,
  name,
  status,
  location,
  species,
  gender,
}: CharacterCardProps) {
  return (
    <article
      className="bg-white rounded-xl min-h-[200px] flex flex-col justify-between relative"
      role="button"
    >
      <div className="py-4 px-6 flex justify-between items-center gap-3 flex-1">
        <h3 className="flex items-center gap-2">
          <NameIcon classname="w-8 text-[#4d4d4d]" />{" "}
          <div className="text-[#211F1F]">
            <b className="font-medium text-base tracking-[0.02em] block">
              {name}
            </b>
            <small className="block opacity-75 capitalize">{species}</small>
          </div>
        </h3>
        {gender && (
          <span className="min-w-6 size-6 rounded-full bg-[#4d4d4d] text-white flex items-center justify-center">
            {gender === "Male" && <MaleIcon classname="size-[14px]" />}
            {gender === "Female" && (
              <MaleIcon classname="size-[14px] rotate-180" />
            )}
            {gender === "Genderless" && (
              <GenderlessIcon classname="size-[14px]" />
            )}
            {gender === "unknown" && (
              <UnknownGenderIcon classname="size-[14px]" />
            )}
          </span>
        )}
      </div>
      <figure className="relative min-h-[298px]">
        <img className="w-full" src={image} alt={name} />
        <span
          className={cn(
            " absolute top-4 right-6 rounded-full flex items-center justify-center capitalize text-sm text-white min-w-8 size-8 ml-auto",
            status === "Alive" && "bg-[#88e23b] text-stone-800",
            status === "Dead" && "bg-[#931f05]",
            status === "unknown" && "bg-[#938605]"
          )}
        >
          {status === "Alive" && <AliveIcon classname="size-4" />}
          {status === "Dead" && <DeadIcon classname="size-4" />}
          {status === "unknown" && <UnknownIcon classname="size-4" />}
        </span>
      </figure>
      <div className="py-4 px-6 flex">
        <div>
          <h4>Last Location</h4>
          <div className="flex items-center gap-2 text-[#211F1F] mt-1 mb-3">
            <PlanetIcon classname="size-5 text-[#]" />
            <p className="text-sm font-semibold capitalize">{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
