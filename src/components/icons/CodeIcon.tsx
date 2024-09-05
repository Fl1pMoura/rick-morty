interface CodeIconProps {
  classname?: string;
}

export function CodeIcon({ classname }: CodeIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classname}
    >
      <path
        d="m16 18 6-6-6-6M8 6l-6 6 6 6"
        stroke="#11B0C8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
