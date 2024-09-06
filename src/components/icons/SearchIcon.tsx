interface SearchIconProps {
  classname?: string;
}

export function SearchIcon({ classname }: SearchIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
      className={classname}
    >
      <path
        d="m26.707 25.293-6.258-6.258a11.014 11.014 0 1 0-1.414 1.414l6.258 6.258a1.003 1.003 0 0 0 1.415 0 .998.998 0 0 0 0-1.415ZM3 12a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9Z"
        fill="#313234"
      />
    </svg>
  );
}
