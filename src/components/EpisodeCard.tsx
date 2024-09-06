import { VideoIcon } from "lucide-react";

interface EpisodeCardProps {
  name: string;
  episode: string;
}
export function EpisodeCard({ episode, name }: EpisodeCardProps) {
  return (
    <article className="bg-offWhite rounded-2xl">
      <span>
        <VideoIcon />
        <b>
          {name} | {episode}
        </b>
      </span>
    </article>
  );
}
