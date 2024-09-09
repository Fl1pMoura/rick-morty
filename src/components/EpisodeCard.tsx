import { InfoIcon } from "./icons/InfoIcon";
import { VideoCardIcon } from "./icons/VideoIcon";
import { LinkComponent } from "./LinkComponent";

interface EpisodeCardProps {
  name: string;
  episode: string;
  id: number;
  onClick?: (id: number) => void;
}
export function EpisodeCard({ episode, name, id, onClick }: EpisodeCardProps) {
  return (
    <article
      className="bg-offWhite rounded-2xl p-4"
      role="button"
      onClick={() => onClick?.(id)}
    >
      <span className="flex items-center gap-5 lg:gap-2 text-projectGray-1">
        <VideoCardIcon classname="size-6 p1" />
        <b className="font-normal">
          {name}
          <br />
          {episode}
        </b>
      </span>
      <LinkComponent to="/episodes" classname="gap-2 mt-2">
        <InfoIcon className="size-5" /> Learn More
      </LinkComponent>
    </article>
  );
}
