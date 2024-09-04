import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function PageCTA({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <Button asChild size={"sm"}>
      <Link to={url}>{label}</Link>
    </Button>
  );
}
