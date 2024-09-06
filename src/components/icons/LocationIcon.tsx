interface LocationIconProps {
  className?: string;
}

export function LocationIcon({ className }: LocationIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 42"
      className={className}
    >
      <path
        d="M17 9a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-21A16.519 16.519 0 0 0 .5 16.5c0 5.887 2.72 12.128 7.875 18.047a47.655 47.655 0 0 0 7.772 7.181 1.5 1.5 0 0 0 1.721 0 47.66 47.66 0 0 0 7.757-7.181c5.147-5.92 7.875-12.16 7.875-18.047A16.519 16.519 0 0 0 17 0Zm0 38.625C13.9 36.187 3.5 27.235 3.5 16.5a13.5 13.5 0 0 1 27 0c0 10.73-10.4 19.688-13.5 22.125Z"
        fill="currentColor"
      />
    </svg>
  );
}
