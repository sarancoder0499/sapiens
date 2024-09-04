import { UserType } from "../../../types/user/ListTypes";
import ListContent from "./ListContent";

export default function ListBody({ user }: { user: UserType }) {
  return (
    <>
      <ListContent>{user.firstName}</ListContent>
      <ListContent>{user.lastName}</ListContent>
      <ListContent className="hidden lg:block">{user.emailId}</ListContent>
    </>
  );
}
