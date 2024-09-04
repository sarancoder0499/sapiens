export type ListCTAType = {
  url: string;
  label: string;
};

export type CreateUserType = {
  firstName: string;
  lastName: string;
  emailId: string;
};

export type UserType = CreateUserType & {
  _id?: string;
};

export type ListPaginatedType = {
  data: UserType[],
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}