import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import ROUTES from "../constants/routePaths";
import { startTransition } from "react";

export default function ServerError() {
  const navigate = useNavigate();
  const handleRoute = () => {
    startTransition(() => {
      navigate(ROUTES.LISTUSER);
    });
  };
  return (
    <section className="flex flex-col justify-center items-center space-y-4">
      <div className="font-semibold">Server Error</div>
      <Button onClick={handleRoute}>Go Back</Button>
    </section>
  );
}
