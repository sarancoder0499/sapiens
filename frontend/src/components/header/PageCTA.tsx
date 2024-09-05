import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function PageCTA({
  url,
  label,
  testId,
}: {
  url: string;
  label: string;
  testId?: string;
}) {
  return (
    <Button asChild size={"sm"} data-testid={testId}>
      <Link to={url}>{label}</Link>
    </Button>
  );
}
