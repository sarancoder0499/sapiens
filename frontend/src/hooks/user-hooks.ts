import { useNavigate } from "react-router-dom";
import { ListPaginatedType } from "../types/user/ListTypes";
import ROUTES from "../constants/routePaths";
import { fetchUsers } from "../services/users";
import { useQuery } from "@tanstack/react-query";

export const useFetchUsers = (page: number = 1) => {
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useQuery<
    ListPaginatedType,
    Error
  >({
    queryKey: [`users${page}`],
    queryFn: () => fetchUsers(page),
    staleTime: 1000 * 60 * 2,
  });
  if (error) navigate(ROUTES.SERVER_ERROR);

  return {
    data,
    loading: isLoading,
    error,
    refetch,
  };
};
