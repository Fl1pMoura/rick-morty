interface AliveIconProps {
  classname?: string;
}

export function AliveIcon({ classname }: AliveIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 23"
      className={classname}
    >
      <path
        d="M28 12a1 1 0 0 1-1 1h-3.383l-4.722 9.448A1 1 0 0 1 18 23h-.05a1 1 0 0 1-.885-.642L9.919 3.595 5.91 12.414A1 1 0 0 1 5 13H1a1 1 0 0 1 0-2h3.356L9.09.586a1 1 0 0 1 1.845.058l7.189 18.875 3.981-7.964A1 1 0 0 1 23 11h4a1 1 0 0 1 1 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
