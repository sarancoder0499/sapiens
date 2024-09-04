import { UsersRound } from "lucide-react";
import ROUTES from "../../constants/routePaths";
import ListPaging from "../../components/list/paging/ListPaging";
import PageHeader from "../../components/header/PageHeader";
import PageTitle from "../../components/header/PageTitle";
import PageCTA from "../../components/header/PageCTA";
import ListEmpty from "../../components/list/empty/ListEmpty";
import ListEmptyIcon from "../../components/list/empty/ListEmptyIcon";
import ListEmptyTitle from "../../components/list/empty/ListEmptyTitle";
import ListEmptyContent from "../../components/list/empty/LitEmptyContent";
import List from "../../components/list/content/List";
import ListHeading from "../../components/list/content/ListHeading";
import ListBody from "../../components/list/content/ListBody";
import ListLoader from "../../components/list/content/ListLoader";
import { useFetchUsers } from "../../hooks/user-hooks";
import { UserType } from "../../types/user/ListTypes";
import { useSearchParams } from "react-router-dom";
import { querySchema } from "../../schema/userSchema";
import { useNavigate } from "react-router-dom";

export default function ListUserPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const result = querySchema.safeParse(paramsObject);
  if (!result.success) {
    navigate(ROUTES.SERVER_ERROR);
  }
  const page = result.data?.page || 1;
  const { data, loading } = useFetchUsers(page);
  const users: UserType[] = data?.data || [];
  const totalItems = data?.totalItems || 0;
  const totalPages = data?.totalPages || 1;
  const currentPage = data?.currentPage || 1;
  const itemsPerPage = data?.itemsPerPage || 10;

  return (
    <section className="border bg-white flex flex-col rounded w-[100%] lg:w-[70%] min-h-[calc(100vh-4rem)] m-4 lg:m-0">
      <PageHeader>
        <PageTitle>
          Total Users: <span>{totalItems}</span>
        </PageTitle>
        <PageCTA label="Add User" url={ROUTES.ADDUSER} />
      </PageHeader>
      {loading && <ListLoader />}
      {totalItems > 0 && (
        <List>
          <ListHeading key={"firstName"}>First Name</ListHeading>
          <ListHeading key={"lastName"}>Last Name</ListHeading>
          <ListHeading key={"EmailId"} className="hidden lg:block">
            Email Id
          </ListHeading>
          {users.map((user: UserType) => {
            return <ListBody key={user._id} user={user} />;
          })}
        </List>
      )}

      {!loading && !users.length && (
        <ListEmpty>
          <ListEmptyIcon>
            <UsersRound className="text-gray-400" />
          </ListEmptyIcon>
          <ListEmptyTitle>No Users Available</ListEmptyTitle>
          <ListEmptyContent>
            There are currently no users to display. Please add new users to
            view them here by clicking the 'Add User' button above.
          </ListEmptyContent>
        </ListEmpty>
      )}

      {totalItems > itemsPerPage && (
        <ListPaging currentPage={currentPage} totalPages={totalPages} />
      )}
    </section>
  );
}
