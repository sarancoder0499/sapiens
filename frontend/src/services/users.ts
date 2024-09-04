import {  USER_ENDPOINT } from "../constants/api";
import { CreateUserType, ListPaginatedType, UserType } from "../types/user/ListTypes";
import { get, post } from "./base";

export const fetchUsers = async (page:number): Promise<ListPaginatedType> => {
  return await get(`${USER_ENDPOINT}?page=${page}`);
};

export const createUser = async (data:CreateUserType): Promise<UserType> => {
  return await post(USER_ENDPOINT, data);
};
