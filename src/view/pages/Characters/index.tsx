import { cn } from "@/app/utils/cn";
import { useCharacters } from "../../../app/hooks/useCharacters";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader } from "@/components/Loader";
import { CharacterCard } from "@/components/CharacterCard";

export function Characters() {
  const {
    characters,
    nextPage,
    prevPage,
    page,
    totalPages,
    setPage,
    isFetching,
  } = useCharacters({ name: "" });

  // Define a lógica para exibir um intervalo de 5 páginas
  const paginationRange = 5;
  const startPage = Math.max(1, page - Math.floor(paginationRange / 2)); // Calcula a página inicial
  const endPage = Math.min(totalPages, startPage + paginationRange - 1); // Calcula a página final
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  ); // Gera o array de páginas visíveis
  console.log(page);

  if (isFetching) {
    return <Loader />;
  }

  if (!isFetching) {
    return (
      <section className="w-full max-w-7xl m-auto py-20 px-5">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(298px,_1fr))] gap-4">
          {characters.map((character) => (
            <CharacterCard
              key={character.id} // Sempre adicione a chave única no map
              image={character.image}
              name={character.name}
              origin={character.origin.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
            />
          ))}
        </div>

        <Pagination className="mt-6">
          <PaginationContent>
            {/* Botão de página anterior */}
            <PaginationItem>
              <PaginationPrevious
                onClick={prevPage}
                className={cn(page === 1 && "pointer-events-none")}
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>

            {/* Links de páginas visíveis */}
            {pages.map((pg) => (
              <PaginationItem key={pg}>
                <PaginationLink
                  onClick={() => pg !== page && setPage(pg)}
                  className={cn(
                    "transition-all cursor-pointer",
                    pg === page &&
                      "bg-[#4d4d4d] text-white font-bold pointer-events-none"
                  )}
                >
                  {pg}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Botão de próxima página */}
            <PaginationItem>
              <PaginationNext
                onClick={nextPage}
                className={cn(page === totalPages && "pointer-events-none")}
                href="#"
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    );
  }
}
