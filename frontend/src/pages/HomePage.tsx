import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import ROUTES from "../constants/routePaths";

export default function HomePage() {
  return (
    <Button asChild data-testid={"cy-view-users"}>
      <Link to={ROUTES.LISTUSER}>View Users</Link>
    </Button>
  );
}
