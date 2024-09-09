interface CalendarIconProps {
  className?: string;
}

export function CalendarIcon({ className }: CalendarIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 26"
      className={className}
    >
      <path
        d="M22 2h-3V1a1 1 0 0 0-2 0v1H7V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM5 4v1a1 1 0 0 0 2 0V4h10v1a1 1 0 0 0 2 0V4h3v4H2V4h3Zm17 20H2V10h20v14Z"
        fill="currentColor"
      />
    </svg>
  );
}
