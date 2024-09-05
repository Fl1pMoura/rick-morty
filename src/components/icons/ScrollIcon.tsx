interface ScrollIconProps {
  classname?: string;
}

export function ScrollIcon({ classname }: ScrollIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={classname}
    >
      <path
        d="M20 36a11.2 11.2 0 0 0 11.2-11.2v-9.6a11.2 11.2 0 1 0-22.4 0v9.6A11.2 11.2 0 0 0 20 36Zm-9.6-20.8a9.6 9.6 0 0 1 19.2 0v9.6a9.6 9.6 0 1 1-19.2 0v-9.6Z"
        fill="currentColor"
      />
      <path
        d="M20.8 9.205h-.072l-.16-.168a.8.8 0 0 0-1.136 0l-.16.168H19.2v.072l-4.568 4.56 1.136 1.136 3.432-3.44v8.472h1.6v-8.472l3.432 3.44 1.136-1.136-4.568-4.56v-.072Z"
        fill="currentColor"
      />
    </svg>
  );
}
