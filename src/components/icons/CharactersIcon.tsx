interface CharacterIconProps {
  className?: string;
}

export function CharacterIcon({ className }: CharacterIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      className={className}
    >
      <path
        d="M13 0a13 13 0 1 0 13 13A13.013 13.013 0 0 0 13 0Zm0 24a11 11 0 1 1 11-11 11.012 11.012 0 0 1-11 11Zm-3-13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#313234"
      />
    </svg>
  );
}
