import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../ui/pagination";
import ROUTES from "../../../constants/routePaths";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

export default function ListPaging({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const showPreviousPage = previousPage >= 1;
  const showNextPage = nextPage <= totalPages;
  return (
    <Pagination className="p-4">
      <PaginationContent>
        {showPreviousPage && (
          <PaginationItem>
            <Link
              to={`${ROUTES.LISTUSER}?page=${currentPage - 1}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Previous</span>
            </Link>
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <PaginationItem key={i + 1}>
              <Link
                to={`${ROUTES.LISTUSER}?page=${i + 1}`}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2",
                  {
                    "bg-gray-100": i + 1 == currentPage,
                  }
                )}
              >
                {i + 1}
              </Link>
            </PaginationItem>
          );
        })}
        {showNextPage && (
          <PaginationItem>
            <Link
              to={`${ROUTES.LISTUSER}?page=${currentPage + 1}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pr-2.5"
            >
              <span> Next</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
