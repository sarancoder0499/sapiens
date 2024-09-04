export class PaginationDto<T> {
  constructor(partial: Partial<PaginationDto<T>>) {
    Object.assign(this, partial);
  }

  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}
