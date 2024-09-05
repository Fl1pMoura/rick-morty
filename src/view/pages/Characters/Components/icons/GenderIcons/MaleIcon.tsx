interface MaleIconProps {
  classname?: string;
}

export function MaleIcon({ classname }: MaleIconProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={classname}
    >
      <path d="M45.8 1.7H32c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.7l-9.2 9.2c-7.1-5.3-17.2-4.8-23.6 1.6-7 7-7 18.5 0 25.5s18.5 7 25.5 0c6.4-6.4 7-16.6 1.6-23.6l9.2-9.2V18c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V4.2c.1-1.4-1-2.5-2.4-2.5zM29 39.5c-5.1 5.1-13.4 5.1-18.5 0s-5.1-13.4 0-18.5 13.4-5.1 18.5 0 5.1 13.4 0 18.5z" />
    </svg>
  );
}
