interface DimensionIconProps {
  className?: string;
}

export function DimensionIcon({ className }: DimensionIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 22"
      className={className}
    >
      <path
        d="M21 14.679V7.32a1.625 1.625 0 0 0-.802-1.405L13.78 2.21a1.56 1.56 0 0 0-1.56 0L5.804 5.916A1.625 1.625 0 0 0 5 7.321v7.358a1.625 1.625 0 0 0 .803 1.405l6.417 3.706a1.561 1.561 0 0 0 1.56 0l6.416-3.706A1.624 1.624 0 0 0 21 14.679Zm-8-10.61L18.074 7 13 9.929 7.926 7 13 4.069ZM7 8.774l5 2.887v5.693l-5-2.888V8.774Zm7 8.58v-5.692l5-2.887v5.692l-5 2.887Z"
        fill="#313234"
      />
    </svg>
  );
}
