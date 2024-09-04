import PageCTA from "../../components/header/PageCTA";
import PageHeader from "../../components/header/PageHeader";
import PageTitle from "../../components/header/PageTitle";
import ROUTES from "../../constants/routePaths";
import AddUserForm from "../../forms/user/AddUserForm";

export default function AddUserPage() {
  return (
    <section className="border bg-white flex flex-col rounded w-[100%] lg:w-[70%] m-4 lg:m-0 ">
      <PageHeader>
        <PageTitle>Add New User</PageTitle>
        <PageCTA label="Show User's" url={ROUTES.LISTUSER} />
      </PageHeader>
      <AddUserForm />
    </section>
  );
}
