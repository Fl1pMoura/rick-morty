import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useWindowWidth } from "./useWindowWidth";
import { cn } from "../utils/cn";

interface UsePaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function usePagination({
  page,
  totalPages,
  setPage,
}: UsePaginationProps) {
  const windowSize = useWindowWidth();

  // Define a lógica para exibir um intervalo de páginas baseado no tamanho da tela
  const paginationRange = windowSize > 1024 ? 5 : 3;
  const startPage = Math.max(1, page - Math.floor(paginationRange / 2));
  const endPage = Math.min(totalPages, startPage + paginationRange - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Retorna o JSX da paginação
  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={prevPage}
            className={cn(page === 1 && "pointer-events-none")}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

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

        <PaginationItem>
          <PaginationNext
            onClick={nextPage}
            className={cn(page === totalPages && "pointer-events-none")}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
