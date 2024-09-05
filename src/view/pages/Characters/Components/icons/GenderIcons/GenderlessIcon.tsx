interface GenderlessIconProps {
  classname?: string;
}

export function GenderlessIcon({ classname }: GenderlessIconProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={classname}
    >
      <path d="M283.5 164.126V27.5a27.5 27.5 0 0 0-55 0v136.626a175.017 175.017 0 1 0 55.005 0zM256 216.974a120.08 120.08 0 0 1 117.867 97.281H138.133A120.08 120.08 0 0 1 256 216.974zM256 457a120.167 120.167 0 0 1-115.643-87.74h231.286A120.167 120.167 0 0 1 256 457z" />
    </svg>
  );
}
