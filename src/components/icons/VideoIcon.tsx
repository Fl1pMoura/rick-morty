interface VideoCardProps {
  classname?: string;
}

export function VideoCardIcon({ classname }: VideoCardProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 19"
      className={classname} // Ajuste a classe conforme necessário
    >
      <path
        d="M17.5.75h-15A2.25 2.25 0 0 0 .25 3v10.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V3A2.25 2.25 0 0 0 17.5.75Zm.75 12.75a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v10.5Zm-4.5 4.5a.75.75 0 0 1-.75.75H7a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-.334-10.374-4.5-3a.75.75 0 0 0-1.166.624v6a.75.75 0 0 0 1.166.624l4.5-3a.75.75 0 0 0 0-1.248ZM9.25 9.848V6.656l2.398 1.594L9.25 9.848Z"
        fill="currentColor"
      />
    </svg>
  );
}
