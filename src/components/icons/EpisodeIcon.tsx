interface EpisodeProps {
  className?: string;
}

export function EpisodeIcon({ className }: EpisodeProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 19"
      className={className}
    >
      <path
        d="M0 1a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm13 7H1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2Zm0 8H1a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2Zm14-3a1 1 0 0 1-.47.848l-8 5A1 1 0 0 1 17 18V8a1 1 0 0 1 1.53-.848l8 5A1 1 0 0 1 27 13Zm-2.886 0L19 9.804v6.392L24.114 13Z"
        fill="#313234"
      />
    </svg>
  );
}
