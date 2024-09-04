import { cn } from "../../../../app/utils/cn";
import { AliveIcon } from "./icons/StatusIcon/AliveIcon";
import { DeadIcon } from "./icons/StatusIcon/DeadIcon";
import { UnknownIcon } from "./icons/StatusIcon/UnknownIcon";

interface CharacterCardProps{
  image: string,
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  origin: string,
}
export function CharacterCard({image, name, status, origin}:CharacterCardProps){
  return (
    <div
    className="bg-white rounded-xl min-h-[200px] flex flex-col justify-between relative"
    role="button"
    >
      <figure>
        <img className="w-full" src={image} alt={name} />
        <span className={
          cn(
            "absolute top-3 right-5 p-2 rounded-xl flex items-center justify-center capitalize text-sm text-gray-800",
            status === "Alive" && "bg-[#88e23b]",
            status === "Dead" && "bg-[#931f05]",
            status === "unknown" && "bg-[#938605]",
        )}>
          {status === "Alive" && <AliveIcon classname="w-5"/>}
          {status === "Dead" && <DeadIcon classname="w-5"/>}
          {status === "unknown" && <UnknownIcon classname="w-5"/>}
        </span>
      </figure>
      <div>
        <h3>{name}</h3>
        <p>Planeta: <b className="font-normal capitalize">{origin}</b></p>
      </div>
    </div>
  )
}