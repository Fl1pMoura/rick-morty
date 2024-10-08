interface PlanetIconProps {
  className?: string;
}

export function PlanetIcon({ className }: PlanetIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 12"
      className={className}
    >
      <path
        d="M15.32 1.792c-.479-.824-1.74-1.01-3.657-.54A5.995 5.995 0 0 0 2.05 6.768C.319 8.562.343 9.625.68 10.207 1 10.76 1.665 11 2.54 11a7.76 7.76 0 0 0 1.8-.25 5.996 5.996 0 0 0 9.612-5.516c.781-.812 1.301-1.584 1.478-2.245.122-.457.085-.86-.11-1.196ZM8 1a5.007 5.007 0 0 1 4.875 3.888c-1.066 1.003-2.51 2.033-3.88 2.82C7.275 8.696 5.78 9.312 4.59 9.65A4.996 4.996 0 0 1 8 1ZM1.546 9.706c-.091-.157-.04-.453.139-.813a4.94 4.94 0 0 1 .643-.94A6 6 0 0 0 3.453 9.91c-1.078.181-1.75.066-1.907-.204ZM8 11a4.965 4.965 0 0 1-2.41-.621 23.13 23.13 0 0 0 3.902-1.804c1.349-.774 2.542-1.614 3.504-2.442A5.004 5.004 0 0 1 8 11Zm6.464-8.27c-.107.395-.387.846-.79 1.321a5.982 5.982 0 0 0-1.125-1.96c.889-.146 1.711-.135 1.907.203.056.099.059.245.008.437Z"
        fill="#313234"
      />
    </svg>
  );
}
