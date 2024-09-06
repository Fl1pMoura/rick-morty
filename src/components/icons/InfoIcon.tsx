interface InfoIconProps {
  className?: string;
}

export function InfoIcon({ className }: InfoIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        d="M10 .25A9.75 9.75 0 1 0 19.75 10 9.76 9.76 0 0 0 10 .25Zm0 18A8.25 8.25 0 1 1 18.25 10 8.26 8.26 0 0 1 10 18.25Zm1.5-3.75a.75.75 0 0 1-.75.75 1.5 1.5 0 0 1-1.5-1.5V10a.75.75 0 0 1 0-1.5 1.5 1.5 0 0 1 1.5 1.5v3.75a.75.75 0 0 1 .75.75Zm-3-8.625a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
