interface GenderIconProps {
  classname?: string;
}

export function GenderIcon({ classname }: GenderIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 27"
      className={classname}
    >
      <path
        d="M20 0h-5a1 1 0 0 0 0 2h2.586l-3.144 3.144A8 8 0 1 0 8 18.935V21H5a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3v-2.065a7.99 7.99 0 0 0 5.73-12.25L19 3.414V6a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1ZM9 17a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
